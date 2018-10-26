'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require('styled-system');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Box = _styledComponents2.default.div([], {
  flex: 'none'
}, function (props) {
  return props.css;
}, _styledSystem.width, _styledSystem.space, _styledSystem.color);

exports.default = Box;