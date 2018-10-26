'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Flex = require('../Flex');

var _Flex2 = _interopRequireDefault(_Flex);

var _Box = require('../Box');

var _Box2 = _interopRequireDefault(_Box);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

var Root = _styledComponents2.default.div([], {
  width: '100vw',
  height: '100vh'
});

var SplitRight = function SplitRight(_ref) {
  var children = _ref.children;

  var _React$Children$toArr = _react2.default.Children.toArray(children.props.children),
      _React$Children$toArr2 = _toArray(_React$Children$toArr),
      a = _React$Children$toArr2[0],
      rest = _React$Children$toArr2.slice(1);

  return _react2.default.createElement(
    Root,
    null,
    _react2.default.createElement(
      _Flex2.default,
      {
        css: {
          alignItems: 'center',
          height: '100%'
        } },
      _react2.default.createElement(
        _Box2.default,
        { width: 1 / 2 },
        rest
      ),
      _react2.default.createElement(
        _Box2.default,
        { width: 1 / 2 },
        a
      )
    )
  );
};

exports.default = SplitRight;