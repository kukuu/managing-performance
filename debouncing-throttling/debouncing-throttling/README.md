# Debouncing and Throttling

Both are ways to limit the amount of JavaScript you are executing based on DOM events for performance reasons. Howeer their effects are different.

Throttling enforces a maximum number of times a function can be called over time. As in "execute this function at most once every 100 milliseconds."

Say under normal circumstances you would call this function 1,000 times over 10 seconds. If you throttle it to only once per 100 milliseconds, it would only execute that function at most 100 times

```

(10s * 1,000) = 10,000ms //number of milliseconds in 10 secs. 

10,000ms / 100ms throttling = 100 maximum calls

```

Debouncing enforces that a function not be called again until a certain amount of time has passed without it being called. As in "execute this function only if 100 milliseconds have passed without it being called."

Perhaps a function is called 1,000 times in a quick burst, dispersed over 3 seconds, then stops being called. If you have debounced it at 100 milliseconds, the function will only fire once, at 3.1 seconds, once the burst is over. Each time the function is called during the burst it resets the debouncing timer.

## Why Debounce or Throttle?

One major use case for these concepts is certain DOM events, like scrolling and resizing. For instance, if you attach a scroll handler to an element, and scroll that element down say 5000px, you're likely to see 100+ events be fired. If your event handler does a bunch of work (like heavy calculations and other DOM manipulation), you may see performance issues (jank). If you can get away with executing that handler less times, without much interruption in experience, it's probably worth it.


Quick hit examples:

i. Wait until the user stops resizing the window

ii. Don't fire an ajax event until the user stops typing

iii. Measure the scroll position of the page and respond at most every 50ms

iv. Ensure good performance as you drag elements around in an app

## How to do it (Simple throttled scroll)

Functions for both are built into Underscore and Lodash. Even if you don't use those libraries wholesale, you could always go extract the functions out of them for your own use.



## How to do it

Functions for both are built into Underscore and Lodash. Even if you don't use those libraries wholesale, you could always go extract the functions out of them for your own use.

Snippets - Simple throttled scroll:

```

//1
$("body").on('scroll', _.throttle(function() {
  // Do expensive things
}, 100));

```

```
//2
$(window).on('resize', _.debounce(function() {
  // Do expensive things
}, 100));

```

## Example

### html

```
<div class="area area-1">
  <div class="inside inside-1">
    <div class="content content-2"></div>
    <div class="thing thing-1">Nothing</div>
  </div>
  <div class="count count-1">0</div>
</div>

<div class="area area-2">
  <div class="inside inside-2">
    <div class="content content-2"></div>
    <div class="thing thing-2">Throttled</div>
  </div>
  <div class="count count-2">0</div>
</div>

<div class="area area-3">
  <div class="inside inside-3">
    <div class="content content-3"></div>
    <div class="thing thing-3">Debounced</div>
  </div>
  <div class="count count-3">0</div>
</div>

```

### css

```
* {
  box-sizing: border-box;
}
body {
  background: #eee;
}

.area {
  width: 300px;
  height: 200px;
  margin: 20px auto;
  background: white;
  position: relative;
}

.inside {
  height: 200px;
  position: relative;
  overflow: auto;
}

.content {
  height: 5000px;
}

.thing {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  text-align: center;
  background: #f06d06;
  color: white;
  padding: 10px;
}

.count {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

```

### JS

```
// 1
var inside1 = $(".inside-1");
var thing1 = $(".thing-1");
var count1 = $(".count-1");
inside1.on('scroll', function() {
  thing1.css("top", inside1[0].scrollTop);
  count1.html(parseInt(count1.html())+1);
});

// 2 
var inside2 = $(".inside-2");
var thing2 = $(".thing-2");
var count2 = $(".count-2");
inside2.on('scroll', _.throttle(function() {
  thing2.css("top", inside2[0].scrollTop); 
  count2.html(parseInt(count2.html())+1);
}, 150));

// 3
var inside3 = $(".inside-3");
var thing3 = $(".thing-3");
var count3 = $(".count-3");
inside3.on('scroll', _.debounce(function() {
  thing3.css("top", inside3[0].scrollTop);
  count3.html(parseInt(count3.html())+1);
}, 100));

```


## requestAnimationFrame (rAF)

requestAnimationFrame is another way of rate-limiting the execution of a function.

It can be thought as a _.throttle(dosomething, 16). But with a much higher fidelity, since it's a browser native API that aims for better accuracy.

We can use the rAF API, as an alternative to the throttle function, considering this pros/cons:

## Pros
Aims for 60fps (frames of 16 ms) but internally will decide the best timing on how to schedule the rendering.
Fairly simple and standard API, not changing in the future. Less maintenance.


## Cons

The start/cancelation of rAFs it's our responsibility, unlike .debounce or `.throttle`, where it's managed internally.
If the browser tab is not active, it would not execute. Although for scroll, mouse or keyboard events this doesn't matter.
Although all modern browsers offer rAF, still is not supported in IE9, Opera Mini and old Android. (A polyfill)[http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/] would be needed still today.

rAF is not supported in node.js, so you can't use it on the server to throttle filesystem events.
As a rule of thumb, use requestAnimationFrame if your JavaScript function is "painting" or animating directly properties, use it at everything that involves re-calculating element positions.

To make Ajax requests, or deciding if adding/removing a class (that could trigger a CSS animation), consider _.debounce or _.throttle, where you can set up lower executing rates (200ms for example, instead of 16ms)

If you think that rAF could be implemented inside underscore or lodash, they both have rejected the idea, since it's a specialized use case, and it's easy enough to be called directly.

