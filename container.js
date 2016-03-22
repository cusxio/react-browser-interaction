import React, { Component } from 'react';
import browserInteractionHOC from '../lib/index';
import Modernizr from 'modernizr';

class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isScrolling: false,
            scrollTop: 0,
        };
    }
    componentWillReceiveProps(nextProps) {
        let { scrollTop, isScrolling } = nextProps.data;
        console.log(`Am I Scrolling? ${isScrolling}`);
        this.setState({
            scrollTop,
        });
    }
    render() {
        let { scrollTop } = this.state;
        return (
            <div>
                <h1>scrollTop: {scrollTop}</h1>
            </div>
        );
    }
}

export default browserInteractionHOC(Modernizr, Container, 1200, 'hoverable', 'scrolled');
