'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GoogleFonts = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _webfont = require('@compositor/webfont');

var _webfont2 = _interopRequireDefault(_webfont);

var _styledComponents = require('styled-components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GoogleFonts = exports.GoogleFonts = (0, _styledComponents.withTheme)(function (_ref) {
  var theme = _ref.theme;

  var links = [_webfont2.default.getURL(theme.font || '', theme.weights), _webfont2.default.getURL(theme.monospace || '')].filter(Boolean);
  if (!links.length) return false;
  return _react2.default.createElement(
    _react2.default.Fragment,
    null,
    links.map(function (href, i) {
      return _react2.default.createElement('link', {
        key: i,
        href: href,
        rel: 'stylesheet'
      });
    })
  );
});

exports.default = GoogleFonts;