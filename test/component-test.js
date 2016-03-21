import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import { spy } from 'sinon';
import Component from './component-bundle.js';

describe('<Component/>', () => {
    it('calls componentDidMount', () => {
        spy(Component.prototype, 'componentDidMount');
        const wrapper = mount(<Component/>); //eslint-disable-line
        expect(Component.prototype.componentDidMount.calledOnce).to.equal(true);
    });
    it('should have hoverable class', () => {
        const wrapper = mount(<Component/>); //eslint-disable-line
        expect(document.body.classList.contains('hoverable')).to.equal(true);
    });
    it('should have NOT have scrolled class', () => {
        const wrapper = mount(<Component/>); //eslint-disable-line
        expect(document.body.classList.contains('scrolled')).to.equal(false);
    });
    it('should have NO scrolling state', () => {
        const wrapper = mount(<Component/>);
        expect(wrapper.state('isScrolling')).to.equal(false);
    });
    it('should have  scrolling state', () => {
        const wrapper = mount(<Component/>);
        wrapper.setState({ isScrolling: true });
        expect(wrapper.state('isScrolling')).to.equal(true);
    });
    it('should have NO scroll top', () => {
        const wrapper = mount(<Component/>);
        wrapper.setState({ scrollTop: 100 });
        expect(wrapper.state('scrollTop')).to.equal(100);
    });
});
