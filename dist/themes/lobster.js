'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _base = require('./base');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var text = '#220011';

exports.default = _extends({}, _base2.default, {
  font: 'Lobster, cursive',
  monospace: '"Roboto Mono", monospace',
  colors: {
    text: text,
    background: 'tomato',
    link: text
  }
});