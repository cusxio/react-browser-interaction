module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _modernizr = __webpack_require__(1);

	var _modernizr2 = _interopRequireDefault(_modernizr);

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _index = __webpack_require__(3);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Container = function (_Component) {
	    _inherits(Container, _Component);

	    function Container() {
	        _classCallCheck(this, Container);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Container).apply(this, arguments));
	    }

	    _createClass(Container, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement('div', null);
	        }
	    }]);

	    return Container;
	}(_react.Component);

	exports.default = (0, _index2.default)(_modernizr2.default, Container, 1200, 'hoverable', 'scrolled');

/***/ },
/* 1 */
/***/ function(module, exports) {

	;(function(window){
	/*! modernizr 3.3.1 (Custom Build) | MIT *
	 * http://modernizr.com/download/?-csstransitions-touchevents-setclasses !*/
	!function(e,n,t){function o(e,n){return typeof e===n}function r(){var e,n,t,r,s,i,a;for(var l in g)if(g.hasOwnProperty(l)){if(e=[],n=g[l],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(r=o(n.fn,"function")?n.fn():n.fn,s=0;s<e.length;s++)i=e[s],a=i.split("."),1===a.length?Modernizr[a[0]]=r:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=r),w.push((r?"":"no-")+a.join("-"))}}function s(e){var n=_.className,t=Modernizr._config.classPrefix||"";if(x&&(n=n.baseVal),Modernizr._config.enableJSClass){var o=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(o,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),x?_.className.baseVal=n:_.className=n)}function i(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):x?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function a(){var e=n.body;return e||(e=i(x?"svg":"body"),e.fake=!0),e}function l(e,t,o,r){var s,l,f,u,c="modernizr",d=i("div"),p=a();if(parseInt(o,10))for(;o--;)f=i("div"),f.id=r?r[o]:c+(o+1),d.appendChild(f);return s=i("style"),s.type="text/css",s.id="s"+c,(p.fake?p:d).appendChild(s),p.appendChild(d),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(n.createTextNode(e)),d.id=c,p.fake&&(p.style.background="",p.style.overflow="hidden",u=_.style.overflow,_.style.overflow="hidden",_.appendChild(p)),l=t(d,e),p.fake?(p.parentNode.removeChild(p),_.style.overflow=u,_.offsetHeight):d.parentNode.removeChild(d),!!l}function f(e,n){return!!~(""+e).indexOf(n)}function u(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function c(n,o){var r=n.length;if("CSS"in e&&"supports"in e.CSS){for(;r--;)if(e.CSS.supports(u(n[r]),o))return!0;return!1}if("CSSSupportsRule"in e){for(var s=[];r--;)s.push("("+u(n[r])+":"+o+")");return s=s.join(" or "),l("@supports ("+s+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return t}function d(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function p(e,n,r,s){function a(){u&&(delete E.style,delete E.modElem)}if(s=o(s,"undefined")?!1:s,!o(r,"undefined")){var l=c(e,r);if(!o(l,"undefined"))return l}for(var u,p,m,h,v,y=["modernizr","tspan"];!E.style;)u=!0,E.modElem=i(y.shift()),E.style=E.modElem.style;for(m=e.length,p=0;m>p;p++)if(h=e[p],v=E.style[h],f(h,"-")&&(h=d(h)),E.style[h]!==t){if(s||o(r,"undefined"))return a(),"pfx"==n?h:!0;try{E.style[h]=r}catch(g){}if(E.style[h]!=v)return a(),"pfx"==n?h:!0}return a(),!1}function m(e,n){return function(){return e.apply(n,arguments)}}function h(e,n,t){var r;for(var s in e)if(e[s]in n)return t===!1?e[s]:(r=n[e[s]],o(r,"function")?m(r,t||n):r);return!1}function v(e,n,t,r,s){var i=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+T.join(i+" ")+i).split(" ");return o(n,"string")||o(n,"undefined")?p(a,n,r,s):(a=(e+" "+j.join(i+" ")+i).split(" "),h(a,n,t))}function y(e,n,o){return v(e,t,t,n,o)}var g=[],C={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){g.push({name:e,fn:n,options:t})},addAsyncTest:function(e){g.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=C,Modernizr=new Modernizr;var w=[],_=n.documentElement,x="svg"===_.nodeName.toLowerCase(),S=C._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):[];C._prefixes=S;var b=C.testStyles=l;Modernizr.addTest("touchevents",function(){var t;if("ontouchstart"in e||e.DocumentTouch&&n instanceof DocumentTouch)t=!0;else{var o=["@media (",S.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");b(o,function(e){t=9===e.offsetTop})}return t});var z="Moz O ms Webkit",T=C._config.usePrefixes?z.split(" "):[];C._cssomPrefixes=T;var P={elem:i("modernizr")};Modernizr._q.push(function(){delete P.elem});var E={style:P.elem.style};Modernizr._q.unshift(function(){delete E.style});var j=C._config.usePrefixes?z.toLowerCase().split(" "):[];C._domPrefixes=j,C.testAllProps=v,C.testAllProps=y,Modernizr.addTest("csstransitions",y("transition","all",!0)),r(),s(w),delete C.addTest,delete C.addAsyncTest;for(var N=0;N<Modernizr._q.length;N++)Modernizr._q[N]();e.Modernizr=Modernizr}(window,document);
	module.exports = window.Modernizr;
	})(window);

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _debounce = __webpack_require__(4);

	var _debounce2 = _interopRequireDefault(_debounce);

	var _throttle = __webpack_require__(5);

	var _throttle2 = _interopRequireDefault(_throttle);

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _ViewportMetrics = __webpack_require__(6);

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

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("lodash/debounce");

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("lodash/throttle");

/***/ },
/* 6 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ViewportMetrics
	 */

	'use strict';

	var ViewportMetrics = {

	  currentScrollLeft: 0,

	  currentScrollTop: 0,

	  refreshScrollValues: function (scrollPosition) {
	    ViewportMetrics.currentScrollLeft = scrollPosition.x;
	    ViewportMetrics.currentScrollTop = scrollPosition.y;
	  }

	};

	module.exports = ViewportMetrics;

/***/ }
/******/ ]);