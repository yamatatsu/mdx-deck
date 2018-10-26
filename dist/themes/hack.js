'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _base = require('./base');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var green = '#42ff71';

exports.default = _extends({}, _base2.default, {
  font: '"IBM Plex Mono", monospace',
  monospace: '"IBM Plex Mono", monospace',
  colors: {
    text: green,
    background: '#000',
    link: green,
    pre: '#000',
    preBackground: green,
    code: '#000',
    codeBackground: green
  },
  css: {
    textAlign: 'left',
    fontSize: '16px',
    '@media screen and (min-width:64em)': {
      fontSize: '32px'
    },
    '& .Slide > div': {
      minWidth: '80vw',
      minHeight: '60vh'
    }
  }
});