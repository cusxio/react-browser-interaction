import test from 'ava';
import React, { Component } from 'react';
import { mount } from 'enzyme';
import { spy } from 'sinon';
import browserInteractionHOC from '../index';

class Container extends Component {
    render() {
        return (
            <div>scrollTop</div>
        );
    }
}

const ComposedComponent = browserInteractionHOC(Container, 1200, 'hoverable', 'scrolled');

test('mounted', (t) => {
    spy(ComposedComponent.prototype, 'componentDidMount');
    const component = mount(<ComposedComponent />); //eslint-disable-line
    t.true(ComposedComponent.prototype.componentDidMount.calledOnce);
});

test('document to have hoverable class', (t) => {
    const component = mount(<ComposedComponent />); //eslint-disable-line
    t.true(document.body.classList.contains('hoverable'));
});

test('should have NO scrolling state', (t) => {
    const component = mount(<ComposedComponent />);
    t.false(component.state('isScrolling'));
});

test('should have scrolling state', (t) => {
    const component = mount(<ComposedComponent />);
    component.setState({ isScrolling: true });
    t.true(component.state('isScrolling'));
});

test('should have scroll top', (t) => {
    const component = mount(<ComposedComponent />);
    component.setState({ scrollTop: 100 });
    t.is(component.state('scrollTop'), 100);
});
