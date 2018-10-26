'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _base = require('./base');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var blue = '#0af';

exports.default = _extends({}, _base2.default, {
  font: '"Avenir Next", system-ui, sans-serif',
  colors: {
    text: '#fff',
    background: '#111',
    blue: blue,
    link: blue,
    pre: blue,
    preBackground: '#000',
    code: blue
  },
  heading: {
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    fontWeight: 600
  },
  quote: {
    fontWeight: 600
  }
});