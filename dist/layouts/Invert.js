'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require('styled-system');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Invert = _styledComponents2.default.div([], {
  width: '100vw',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '& a': {
    color: 'inherit'
  }
}, _styledSystem.color);

Invert.defaultProps = {
  color: 'background',
  bg: 'text'
};

exports.default = Invert;