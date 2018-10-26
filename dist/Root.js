'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Root = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require('styled-system');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Root = exports.Root = _styledComponents2.default.div([], {
  '@media print': {
    fontSize: '24px',
    height: 'auto'
  }
}, function (props) {
  return props.theme.font ? {
    fontFamily: props.theme.font
  } : null;
}, function (props) {
  return props.theme.css;
}, _styledSystem.width, _styledSystem.height, _styledSystem.color);

Root.propTypes = _extends({}, _styledSystem.width.propTypes, _styledSystem.height.propTypes, _styledSystem.color.propTypess);

Root.defaultProps = {
  color: 'text',
  bg: 'background'
};

exports.default = Root;