# react-browser-interaction

![demo](https://raw.githubusercontent.com/cusxio/react-browser-interaction/master/demo.gif)

> A react higher order component that checks interaction on the browser.

This component checks whether the browser is hoverable, i.e. non-touch screen device, or non-hoverable, i.e. touch-screen device. Besides that it also checks for screen resize, and scroll browser events.

## Install

```bash
$ npm install --save react-browser-interaction
```

## Notes

This component requires an instace of [Modernizr](https://modernizr.com/).

You can either use [modernizr-loader](https://www.npmjs.com/package/modernizr-loader) for Webpack or [browsernizr](https://www.npmjs.com/package/browsernizr) for Browserify.

There's an [example](https://github.com/cusxio/react-browser-interaction/tree/master/example) provided for Webpack.

## Usage

```javascript

// container.js
import Modernizr from 'modernizr';
import React, { Component } from 'react';
import browserInteractionHOC from 'react-browser-interaction';

class Container extends Component {
    render() {
        return (
            <div></div>
        )
    }
}

export default browserInteractionHOC(Modernizr, Container, 1200, 'hoverable', 'scrolled');

// app.js

import React from 'react';
import { render } from 'react-dom';
import Container from './container';

render(<Container />, document.getElementById('app'));

```

## API

### browserInteractionHOC(modernizrInstance, component, screenWidth, hoverClass, scrollClass)

#### modernizrInstance

Type: `function`

An instance of the modernizr package.

#### component

Type: `function`

Any React component to be wrapped. However `react-browser-interaction` is a higher-order-component that tracks browser interaction, therefore it is most favorably used on the `container` element of the page, and is **used only once**.

#### screenWidth

Type: `number`

Throttling screen resize.

#### hoverClass

Type: `string`

Name of hover class to be added to the `body` element if the browser is "hoverable".

#### scrollClass

Type: `string`

Name of scroll class to be added to the `body` element if the browser is scrolled.

## License

MIT © Jonathan Chan
