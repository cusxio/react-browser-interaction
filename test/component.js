import Modernizr from 'modernizr';
import React, { Component } from 'react';
import browserInteractionHOC from '../index.js';

class Container extends Component {
    render() {
        return (
            <div></div>
        );
    }
}

export default browserInteractionHOC(Modernizr, Container, 1200, 'hoverable', 'scrolled');

