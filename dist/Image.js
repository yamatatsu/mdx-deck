'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require('styled-system');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Image = _styledComponents2.default.div([], {
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat'
}, function (props) {
  return {
    backgroundSize: props.size || 'cover',
    backgroundImage: 'url(' + props.src + ')'
  };
}, _styledSystem.width, _styledSystem.height, function (props) {
  return props.css;
});

Image.propTypes = _extends({}, _styledSystem.width.propTypes, _styledSystem.height.propTypes);

Image.defaultProps = {
  width: '100vw',
  height: '100vh'
};

exports.default = Image;