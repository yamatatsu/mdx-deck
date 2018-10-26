'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Dots = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require('styled-system');

var _Flex = require('./Flex');

var _Flex2 = _interopRequireDefault(_Flex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Dot = _styledComponents2.default.button([], {
  appearance: 'none',
  border: '4px solid transparent',
  backgroundClip: 'padding-box',
  borderRadius: '9999px',
  width: '8px',
  height: '8px',
  color: 'inherit',
  '&:focus': {
    outline: 'none',
    boxShadow: '0 0 0 1px'
  }
}, function (props) {
  return {
    opacity: props.active ? 0.5 : 0.125
  };
}, _styledSystem.space, _styledSystem.color);
Dot.propTypes = _extends({}, _styledSystem.space.propTypes, _styledSystem.color.propTypes);
Dot.defaultProps = {
  m: 0,
  p: 1,
  color: 'text',
  bg: 'text'
};

var Dots = function Dots(_ref) {
  var index = _ref.index,
      length = _ref.length,
      _onClick = _ref.onClick,
      props = _objectWithoutProperties(_ref, ['index', 'length', 'onClick']);

  return _react2.default.createElement(
    _Flex2.default,
    props,
    Array.from({ length: length }).map(function (n, i) {
      return _react2.default.createElement(Dot, {
        key: i,
        active: i <= index,
        title: 'go to: ' + i,
        onClick: function onClick(e) {
          _onClick(i);
        }
      });
    })
  );
};

exports.Dots = Dots;
Dots.propTypes = {
  index: _propTypes2.default.number.isRequired,
  length: _propTypes2.default.number.isRequired,
  onClick: _propTypes2.default.func
};

exports.default = Dots;