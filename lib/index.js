'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _debounce = require('lodash/debounce');

var _debounce2 = _interopRequireDefault(_debounce);

var _throttle = require('lodash/throttle');

var _throttle2 = _interopRequireDefault(_throttle);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ViewportMetrics = require('react/lib/ViewportMetrics');

var _ViewportMetrics2 = _interopRequireDefault(_ViewportMetrics);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var browserInteractionHOC = function browserInteractionHOC(modernizrInstance, ComposedComponent, screenSize, hoverClass, scrollClass) {
    return function (_Component) {
        _inherits(_class, _Component);

        function _class(props) {
            _classCallCheck(this, _class);

            var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(_class).call(this, props));

            _this._onResize = _this._onResize.bind(_this);
            _this._onScroll = _this._onScroll.bind(_this);
            _this.state = {
                scrollTop: 0,
                isScrolling: false
            };
            return _this;
        }

        _createClass(_class, [{
            key: '_hoverThrottle',
            value: function _hoverThrottle() {
                (0, _debounce2.default)(function () {
                    document.body.classList.add(hoverClass);
                }, 100)();
            }
        }, {
            key: '_scrollThrottle',
            value: function _scrollThrottle() {
                (0, _throttle2.default)(function () {
                    document.body.scrollTop > 0.15 * window.innerHeight ? document.body.classList.add(scrollClass) : document.body.classList.remove(scrollClass);
                    if (_ViewportMetrics2.default.currentScrollTop === this.state.scrollTop) {
                        this.setState({
                            isScrolling: false
                        });
                    }
                }, 100).bind(this)();
            }
        }, {
            key: '_resizeThrottle',
            value: function _resizeThrottle() {
                var currentScreenSize = window.innerWidth < screenSize;
                (0, _throttle2.default)(function () {
                    window.innerWidth < screenSize && !currentScreenSize ? currentScreenSize = !0 : window.innerWidth > screenSize - 1 && currentScreenSize && (currentScreenSize = !1);
                }, 100).bind(this)();
            }
        }, {
            key: '_scrollActions',
            value: function _scrollActions() {
                document.body.classList.add(hoverClass);
                window.addEventListener('scroll', this._onScroll);
            }
        }, {
            key: '_onScroll',
            value: function _onScroll() {
                document.body.classList.contains(hoverClass) && document.body.classList.remove(hoverClass);
                var scrollTop = _ViewportMetrics2.default.currentScrollTop;
                this.setState({
                    scrollTop: scrollTop,
                    isScrolling: true
                });
                this._hoverThrottle();
                this._scrollThrottle();
            }
        }, {
            key: '_resizeActions',
            value: function _resizeActions() {
                window.addEventListener('resize', this._onResize);
            }
        }, {
            key: '_onResize',
            value: function _onResize() {
                this._resizeThrottle();
            }
        }, {
            key: 'componentDidMount',
            value: function componentDidMount() {
                var touchEvent = modernizrInstance.touchevents;
                touchEvent || this._scrollActions();
                this._resizeActions();
            }
        }, {
            key: 'componentWillUnmount',
            value: function componentWillUnmount() {
                window.removeEventListener('scroll', this._onScroll);
                window.removeEventListener('resize', this._onResize);
            }
        }, {
            key: 'render',
            value: function render() {
                return _react2.default.createElement(ComposedComponent, { data: this.state });
            }
        }]);

        return _class;
    }(_react.Component);
};

exports.default = browserInteractionHOC;