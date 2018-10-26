'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _hhmmss = require('hhmmss');

var _hhmmss2 = _interopRequireDefault(_hhmmss);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require('styled-system');

var _Flex = require('./Flex');

var _Flex2 = _interopRequireDefault(_Flex);

var _Box = require('./Box');

var _Box2 = _interopRequireDefault(_Box);

var _Mono = require('./Mono');

var _Mono2 = _interopRequireDefault(_Mono);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Button = _styledComponents2.default.button([], {
  appearance: 'none',
  fontFamily: 'inherit',
  fontSize: '12px',
  fontWeight: 'bold',
  borderRadius: '4px',
  border: 'none'
}, _styledSystem.space, _styledSystem.color);

Button.propTypes = _extends({}, _styledSystem.space.propTypes, _styledSystem.color.propTypes);

Button.defaultProps = {
  m: 0,
  px: 2,
  py: 1,
  color: 'white',
  bg: '#333'
};

var Timer = function (_React$Component) {
  _inherits(Timer, _React$Component);

  function Timer() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Timer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Timer.__proto__ || Object.getPrototypeOf(Timer)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      on: false,
      time: new Date().toLocaleTimeString(),
      seconds: 0
    }, _this.toggle = function () {
      _this.setState(function (state) {
        return { on: !state.on };
      });
    }, _this.reset = function () {
      _this.setState({ seconds: 0 });
    }, _this.tick = function () {
      var now = new Date();
      _this.setState(function (state) {
        return {
          time: now.toLocaleTimeString(),
          seconds: state.on ? state.seconds + 1 : state.seconds
        };
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Timer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.timer = setInterval(this.tick, 1000);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (!this.timer) return;
      clearInterval(this.timer);
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          time = _state.time,
          seconds = _state.seconds,
          on = _state.on;

      var elapsed = (0, _hhmmss2.default)(seconds);

      return _react2.default.createElement(
        _Flex2.default,
        { css: { alignItems: 'center' } },
        !on && seconds > 0 && _react2.default.createElement(
          Button,
          { mr: 1, onClick: this.reset },
          'reset'
        ),
        _react2.default.createElement(
          Button,
          {
            bg: on ? '#600' : '#060',
            onClick: this.toggle },
          on ? 'stop' : 'start'
        ),
        _react2.default.createElement(
          _Mono2.default,
          { px: 2 },
          elapsed,
          ' |'
        ),
        _react2.default.createElement(
          _Mono2.default,
          null,
          time
        )
      );
    }
  }]);

  return Timer;
}(_react2.default.Component);

exports.default = Timer;