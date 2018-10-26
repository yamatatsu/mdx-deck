'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SlideDeck = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _tag = require('@mdx-js/tag');

var _styledComponents = require('styled-components');

var _lodash = require('lodash.debounce');

var _lodash2 = _interopRequireDefault(_lodash);

var _querystring = require('querystring');

var _querystring2 = _interopRequireDefault(_querystring);

var _reactSwipeable = require('react-swipeable');

var _reactSwipeable2 = _interopRequireDefault(_reactSwipeable);

var _Head = require('./Head');

var _Provider = require('./Provider');

var _Provider2 = _interopRequireDefault(_Provider);

var _Carousel = require('./Carousel');

var _Carousel2 = _interopRequireDefault(_Carousel);

var _Slide = require('./Slide');

var _Slide2 = _interopRequireDefault(_Slide);

var _Dots = require('./Dots');

var _Dots2 = _interopRequireDefault(_Dots);

var _Root = require('./Root');

var _Root2 = _interopRequireDefault(_Root);

var _Presenter = require('./Presenter');

var _Presenter2 = _interopRequireDefault(_Presenter);

var _Overview = require('./Overview');

var _Overview2 = _interopRequireDefault(_Overview);

var _Grid = require('./Grid');

var _Grid2 = _interopRequireDefault(_Grid);

var _GoogleFonts = require('./GoogleFonts');

var _GoogleFonts2 = _interopRequireDefault(_GoogleFonts);

var _themes = require('./themes');

var _themes2 = _interopRequireDefault(_themes);

var _components = require('./components');

var _components2 = _interopRequireDefault(_components);

var _updaters = require('./updaters');

var _constants = require('./constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SlideDeck = exports.SlideDeck = function (_React$Component) {
  _inherits(SlideDeck, _React$Component);

  function SlideDeck() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SlideDeck);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SlideDeck.__proto__ || Object.getPrototypeOf(SlideDeck)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      length: _this.props.slides.length,
      index: 0,
      mode: _constants.modes.normal,
      // contextual metadata for slides
      metadata: {},
      step: 0
    }, _this.update = function (fn) {
      return _this.setState(fn);
    }, _this.handleKeyDown = function (e) {
      if (document.activeElement.tagName !== 'BODY' || _this.props.ignoreKeyEvents) {
        return;
      }

      if (e.metaKey || e.ctrlKey) return;
      var alt = e.altKey && !e.shiftKey;
      var shift = e.shiftKey && !e.altKey;

      if (alt) {
        switch (e.keyCode) {
          case _constants.keys.p:
            _this.update((0, _updaters.toggleMode)('presenter'));
            break;
          case _constants.keys.o:
            _this.update((0, _updaters.toggleMode)('overview'));
            break;
          case _constants.keys.g:
            _this.update((0, _updaters.toggleMode)('grid'));
            break;
        }
      } else if (shift) {
        switch (e.keyCode) {
          case _constants.keys.right:
            e.preventDefault();
            _this.update(_updaters.incrementIndex);
            break;
          case _constants.keys.left:
            e.preventDefault();
            _this.update(_updaters.decrementIndex);
            break;
        }
      } else if (!alt && !shift) {
        switch (e.keyCode) {
          case _constants.keys.right:
          case _constants.keys.space:
            e.preventDefault();
            _this.update(_updaters.next);
            break;
          case _constants.keys.left:
            e.preventDefault();
            _this.update(_updaters.previous);
            break;
          // shim for old Appear API
          case _constants.keys.up:
            _this.update(_updaters.decrementStep);
            break;
          case _constants.keys.down:
            _this.update(_updaters.incrementStep);
            break;
        }
      }
    }, _this.handleHashChange = function (e) {
      _this.isHashChange = true;
      _this.hashToState();
    }, _this.hashToState = function () {
      var hash = window.location.hash;

      var _hash$replace$split = hash.replace(/^#/, '').split('.'),
          _hash$replace$split2 = _slicedToArray(_hash$replace$split, 2),
          index_ = _hash$replace$split2[0],
          step_ = _hash$replace$split2[1];

      var index = parseInt(index_, 10);
      var step = parseInt(step_, 10);
      if (isNaN(index)) return;
      _this.setState({ index: index, step: isNaN(step) ? 0 : step });
    }, _this.getMode = function () {
      var _querystring$parse = _querystring2.default.parse(window.location.search.replace(/^\?/, '')),
          mode = _querystring$parse.mode;

      _this.setState({
        mode: _constants.modes[mode] || _constants.modes.normal
      });
    }, _this.handleStorageChange = function (e) {
      if (e.key === _constants.MDX_SLIDE_INDEX) {
        var index = parseInt(e.newValue, 10);
        _this.isStorageChange = true;
        _this.setState({ index: index });
      } else if (e.key === _constants.MDX_SLIDE_STEP, 10) {
        var step = parseInt(e.newValue, 10);
        _this.isStorageChange = true;
        _this.setState({ step: step });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SlideDeck, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      document.body.addEventListener('keydown', this.handleKeyDown);
      window.addEventListener('hashchange', this.handleHashChange);
      window.addEventListener('storage', this.handleStorageChange);
      this.hashToState();
      this.getMode();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.body.removeEventListener('keydown', this.handleKeyDown);
      window.removeEventListener('hashchange', this.handleHashChange);
      window.removeEventListener('storage', this.handleStorageChange);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (this.isHashChange) {
        this.isHashChange = false;
        return;
      }
      if (this.isStorageChange) {
        this.isStorageChange = false;
        return;
      }
      var _state = this.state,
          index = _state.index,
          mode = _state.mode,
          step = _state.step;

      var query = '';
      if (mode && mode !== _constants.modes.normal) {
        query += '?' + _querystring2.default.stringify({
          mode: (mode || '').toLowerCase()
        });
      } else if (mode === _constants.modes.normal) {
        query += window.location.pathname;
      }
      var step_ = step !== 0 ? '.' + step : '';
      history.pushState(null, null, query + '#' + index + step_);
      localStorage.setItem(_constants.MDX_SLIDE_INDEX, index);
      localStorage.setItem(_constants.MDX_SLIDE_STEP, step);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          slides = _props.slides,
          theme = _props.theme,
          propsComponents = _props.components,
          PropsProvider = _props.Provider,
          width = _props.width,
          height = _props.height,
          headTags = _props.headTags;
      var _state2 = this.state,
          index = _state2.index,
          mode = _state2.mode,
          metadata = _state2.metadata;
      var _theme$components = theme.components,
          components = _theme$components === undefined ? propsComponents : _theme$components,
          _theme$Provider = theme.Provider,
          Provider = _theme$Provider === undefined ? PropsProvider : _theme$Provider;


      var Wrapper = _Root2.default;
      if (mode === _constants.modes.presenter) {
        Wrapper = _Presenter2.default;
      } else if (mode === _constants.modes.overview) {
        Wrapper = _Overview2.default;
      }

      var context = _extends({}, this.state, {
        slides: slides,
        update: this.update
      });

      return _react2.default.createElement(
        _Head.HeadProvider,
        { tags: headTags },
        _react2.default.createElement(
          _styledComponents.ThemeProvider,
          { theme: theme },
          _react2.default.createElement(
            _tag.MDXProvider,
            {
              components: _extends({}, _components2.default, components) },
            _react2.default.createElement(
              Provider,
              _extends({}, this.state, { update: this.update }),
              mode === _constants.modes.grid ? _react2.default.createElement(_Grid2.default, {
                slides: slides,
                update: this.update
              }) : _react2.default.createElement(
                _reactSwipeable2.default,
                {
                  onSwipedLeft: function onSwipedLeft() {
                    return _this2.update(_updaters.next);
                  },
                  onSwipedRight: function onSwipedRight() {
                    return _this2.update(_updaters.previous);
                  } },
                _react2.default.createElement(
                  Wrapper,
                  _extends({}, this.state, {
                    slides: slides,
                    width: width,
                    height: height,
                    update: this.update }),
                  _react2.default.createElement(_GoogleFonts2.default, null),
                  _react2.default.createElement(
                    _Carousel2.default,
                    { index: index },
                    slides.map(function (Component, i) {
                      return _react2.default.createElement(
                        _Slide2.default,
                        _extends({
                          key: i,
                          id: 'slide-' + i
                        }, context, {
                          index: i,
                          className: 'Slide',
                          active: i === index,
                          metadata: metadata[i] }),
                        _react2.default.createElement(Component, null)
                      );
                    })
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return SlideDeck;
}(_react2.default.Component);

SlideDeck.propTypes = {
  slides: _propTypes2.default.array.isRequired,
  theme: _propTypes2.default.object,
  components: _propTypes2.default.object,
  Provider: _propTypes2.default.func,
  width: _propTypes2.default.string,
  height: _propTypes2.default.string,
  ignoreKeyEvents: _propTypes2.default.bool,
  headTags: _propTypes2.default.array.isRequired
};
SlideDeck.defaultProps = {
  slides: [],
  theme: _themes2.default,
  components: {},
  Provider: _Provider2.default,
  width: '100vw',
  height: '100vh',
  ignoreKeyEvents: false,
  headTags: []
};
exports.default = SlideDeck;