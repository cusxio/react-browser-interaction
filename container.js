import React, { Component } from 'react';
import browserInteractionHOC from '../lib/index';

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
            isScrolling,
        });
    }
    render() {
        let { scrollTop, isScrolling } = this.state;
        return (
            <div>
                <h1>scrollTop: { scrollTop }</h1>
            </div>
        )
    }
}

export default browserInteractionHOC(Container, 1200, 'hoverable', 'scrolled');
