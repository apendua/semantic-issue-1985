# semantic-issue-1985

A demo project showing a problem with semantic-ui pushable body element.

http://semantic-issue-1985.meteor.com

Look here for more details:

https://github.com/Semantic-Org/Semantic-UI/issues/1985

![zrzut ekranu 2015-03-19 o 11 41 03](https://cloud.githubusercontent.com/assets/1971195/6728794/df4f0f18-ce2c-11e4-8fcc-3b965edf735a.png)

To reproduce open it on an iOS device / emulator and note that the scroll position does not change until you switch off `pushable` class on the `body` element. To make sure it's not related to the possible lack of support for scrolling events, I am just probing the values 10 times per second.

I have observed that
```css
body.pushable {
  overflow-x: initial;
}
```
solves the problem, but of course the content will overflow horizontally producing unwanted scrollbars when the sidebar is active. My suggestion is to use `overflow-x: hidden` only when the scrollbar is active. This should solve all the issues I described above.

Moreover, on a real device there's also a performance issue caused by the same thing. It manifests itself on fixed positioned elements. Namely, when `overflow-x` is `hidden` on `body`, the elements fail to update their position smoothly when the user scrolls the view. They would only update after the scrolling is done, which produces a really ugly visual artifacts. This is also visible on your very own page here

http://learnsemantic.com/guide/expert.html

Looks how the top menu is reacting to scroll events on a mobile device.
