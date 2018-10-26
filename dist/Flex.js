'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledSystem = require('styled-system');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Flex = _styledComponents2.default.div([], {
  display: 'flex',
  justifyContent: 'center',
  '@media print': {
    display: 'none'
  }
}, function (props) {
  return props.css;
}, _styledSystem.space, _styledSystem.width, _styledSystem.color);

Flex.propTypes = _extends({
  css: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.string])
}, _styledSystem.space.propTypes, _styledSystem.width.propTypes, _styledSystem.color.propTypes);

exports.default = Flex;