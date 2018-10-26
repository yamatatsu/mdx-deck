'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _base = require('./base');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var yellow = '#fd0';

exports.default = _extends({}, _base2.default, {
  font: '"Roboto Condensed", system-ui, sans-serif',
  weights: [400, 700],
  monospace: '"Roboto Mono", monospace',
  colors: {
    text: '#000',
    background: yellow,
    link: '#333',
    pre: yellow,
    preBackground: '#000',
    code: yellow,
    codeBackground: '#000'
  },
  heading: {
    textTransform: 'uppercase',
    fontWeight: 700
  },
  blockquote: {
    fontWeight: 700
  },
  pre: {
    textAlign: 'left'
  }
});