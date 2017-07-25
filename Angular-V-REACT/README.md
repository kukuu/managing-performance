# Managing Performance

## AngularJS vs REACT

 React encourages one-way data flow and believes in a philosophy that components are state machines driven by data. Whereas most of the other frameworks like working with the DOM and directly manipulating it, React hates the DOM and works to shield the developer from it. React provides only the basic API which is needed to define any UI component and nothing else. 

### Why REACT improves performance


1. By virtue of avoiding heavy DOM manipulation, digest cycles, two way binding and dirty checking using virtual DOM REACT predominantly improves performance


2. On successive renders, React performs a diff (diffing algorithm) on the Virtual DOM and updates only that part of the real DOM which needs to be updated.

3. REACT resolves cross browser issues: The Virtual DOM also helps in solving cross browser issues, as it provides a unified cross-browser API which even works in Internet Explorer 8. 

4. Lastly, REACT is pure JavaScript


### Why Develop in React?


Both AngularJS and REACT  provide a multitude of improvements including modular component architecture, type checking, and easy to understand component lifecycle. 

While Angular is the more opinionated of the two – providing an entire framework to help you structure your app – React lets you integrate it more easily with whatever architecture structure you already have in place, taking a more library-like approach to help ease any transition.


## The re-factoring process

It's important to stress that sometimes a full web app migration might not even be necessary. Angular 1 is a powerful framework that shines in many aspects, so it may not be necessary to change everything in your application, just the pain points. 

Focusing on speed of rendering, React.js makes use of one-way data flow, virtual DOM and JSX along with the aforementioned improvements to scale the complexities found with UI as your application continues to grow. This makes it an attractive choice to render large and complex elements with. Which also means it does not have to encompass the whole app.

Start small — ideally with segregated parts of your applications. You can write self-contained components which more or less compares to Angular directives. If the developers handling this task are not fully experienced with using React, tackle simple UI components that do not have a lot of dependencies. 


 ####DOM for execution :

Angular heavily relies on the DOM for its execution flow. In the default bootstrapping of applications, it scans the DOM and compiles it with priorities of directives which makes it difficult to debug and test the execution order.


#### The dependency injection  (DI) dactor

JavaScript does not have a package manager and dependency resolver of its own. However, implementations like AMD, UMD and CommonJS have been solving this issue very well. Sadly, AngularJS does not come in handy with any of these. Rather, it introduces a dependency injection (DI) of its own; though there are non-official AngularJS DI implementations using RequireJS.


#### Two-way binding is a double-edged sword 

It is tempting to use two-way binding, but as the complexity of your component grows it may lead to a performance disaster.  How does two-way binding affect the performance? Well, JavaScript ES5 does not have any implementation to notify for any change to its variables or objects, so Angular uses something called “dirty checking” to track data changes and sync it with the UI. Dirty-checking is carried out after any operation performed within Angular’s scope ($digest cycle) which leads to slower performance as the number of bindings increases.

 Another problem with two-way binding is that many different components on the page are capable of changing the data, leading to multiple source of data-inputs. Not a single source of truth. If not handled well it can lead to an ambiguous situation. REACT works with other state management architecture like REDUX to resolve this.

#### Angular has its own world 

Every operation in Angular must go through its digest cycle or else your components won’t sync with your data models. So, if you’re using any third party existing JavaScript library you need to wrap it with Angular’s $apply function if it involves data changes or you will need to convert it to a service if it’s a utility library. It’s like re-inventing every available JavaScript module for Angular.
		

#### Too many concepts and steep learning curve  

Learning Angular requires learning possibly a ton of concepts including modules, controllers, directives, scopes, templates, linking functions, filters, and dependency injection.


#### React Component Architecture

Most approaches to implementing React in an Angular 1 application are very similar in nature, they take advantage of its abstraction layer. Using directives helps to follow best practices as well as start developing modular components. Take this example of a simple stateless react component.

``` import React, { PropTypes } from 'react';

const myComponent = ({ myProp }) => ( 

  <div>
    <h3>This is a stateless React.js component</h3>
    <p>{myProp} is a string being passed in.</p>
  </div>
);

myComponent.propTypes = {  
  myProp: PropTypes.string,
};

export default myComponent;
``` 
 
If you are considering only migrating pain points or perhaps just the view layer, libraries like ngReact can be used.