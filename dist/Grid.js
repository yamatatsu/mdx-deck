'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Flex = require('./Flex');

var _Flex2 = _interopRequireDefault(_Flex);

var _Box = require('./Box');

var _Box2 = _interopRequireDefault(_Box);

var _Slide = require('./Slide');

var _Slide2 = _interopRequireDefault(_Slide);

var _Zoom = require('./Zoom');

var _Zoom2 = _interopRequireDefault(_Zoom);

var _Root = require('./Root');

var _Root2 = _interopRequireDefault(_Root);

var _constants = require('./constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var _ref$slides = _ref.slides,
      slides = _ref$slides === undefined ? [] : _ref$slides,
      update = _ref.update;
  return _react2.default.createElement(
    _Box2.default,
    { bg: 'black', css: { minHeight: '100vh' } },
    _react2.default.createElement(
      _Flex2.default,
      {
        css: {
          justifyContent: 'flex-start',
          flexWrap: 'wrap'
        } },
      slides.map(function (Component, i) {
        return _react2.default.createElement(
          _Box2.default,
          { key: i, css: { cursor: 'pointer' } },
          _react2.default.createElement(
            'div',
            { role: 'link',
              href: '#' + i,
              onClick: function onClick(e) {
                update({
                  index: i,
                  mode: _constants.modes.normal
                });
              } },
            _react2.default.createElement(
              _Zoom2.default,
              { zoom: 1 / 4 },
              _react2.default.createElement(
                _Root2.default,
                { width: '100vw', height: '100vh' },
                _react2.default.createElement(
                  _Slide2.default,
                  { index: i },
                  _react2.default.createElement(Component, null)
                )
              )
            )
          )
        );
      })
    )
  );
};