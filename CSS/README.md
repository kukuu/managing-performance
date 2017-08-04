# Managing CSS Performance 

## Display vs Visibility


A repaint occurs when changes are made to an elements skin that changes visibility, but do not affect its layout.
Examples of this include outline, visibility, or background color. According to Opera, repaint is expensive because the browser must verify the visibility of all other nodes in the DOM tree.

A reflow is even more critical to performance because it involves changes that affect the layout of a portion of the page (or the whole page).


## VISIBILITY

Using the CSS property/value pair of visibility: hidden hides an element from the browser. However, that hidden element still takes up space in the layout. It's like you have basically made the element invisible, but it still remains in place and takes up the space it would have taken up had it been leftt alone.

If you place a DIV on your page and use CSS to give it dimensions to take up 100x100 pixels, the visibility: hidden property will make the DIV not show on the screen, but the text following it will act like it's still there, respecting that 100x100 spacing.

If you are using other CSS properties like positioning to achieve the layout for a certain element, you could use visibility to hide that item initially, only to "turn" it back on on hover.


 That is one possible use of this property, but again, it is not something one turns to with any frequency.


## DISPLAY

Unlike the visibility property, which leaves an element in normal document flow,display: none removes the element completely from the document. It does not take up any space, even though the HTML for it is still in the source code. This is because it is, indeed, removed from document flow. For all intents and purposes, the item is gone. This can be a good thing or a bad thing, depending on what your intentions are. It can also be damaging to your page if you misuse this property!
I often use "display: none" when testing a page.  If I need an area to "go away" for a bit while so that I can test other areas of the page, I can use display: none for that.  The thing to remember, however, is that the element should be returned back to the page prior to the actual launch of that site. This is because an item that is removed from document flow in this method is not seen by search engines or screen readers, even though it may remain in the HTML markup.  In the past, this method was used as a black-hat method to try to influence search engine rankings, so items that are not displayed could be a red flag for Google to look into why that approach is being used.

One way I do find display: none to be useful, and where I do use it on live, production websites, is when I am building a responsive site that may have elements that are available for one display size but not for others. You can use display: none to hide that element and then turn it back on with media queries later.  This is an acceptable use of display: none, because you are not trying to hid anything for nefarious reasons, but have a legitimate need to do so.


