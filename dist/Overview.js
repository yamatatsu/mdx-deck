'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Overview = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _lodash = require('lodash.get');

var _lodash2 = _interopRequireDefault(_lodash);

var _Box = require('./Box');

var _Box2 = _interopRequireDefault(_Box);

var _Flex = require('./Flex');

var _Flex2 = _interopRequireDefault(_Flex);

var _Zoom = require('./Zoom');

var _Zoom2 = _interopRequireDefault(_Zoom);

var _Slide = require('./Slide');

var _Slide2 = _interopRequireDefault(_Slide);

var _Root = require('./Root');

var _Root2 = _interopRequireDefault(_Root);

var _Mono = require('./Mono');

var _Mono2 = _interopRequireDefault(_Mono);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Overview = function Overview(_ref) {
  var index = _ref.index,
      length = _ref.length,
      _ref$slides = _ref.slides,
      slides = _ref$slides === undefined ? [] : _ref$slides,
      mode = _ref.mode,
      _ref$metadata = _ref.metadata,
      metadata = _ref$metadata === undefined ? {} : _ref$metadata,
      update = _ref.update,
      step = _ref.step,
      props = _objectWithoutProperties(_ref, ['index', 'length', 'slides', 'mode', 'metadata', 'update', 'step']);

  var notes = (0, _lodash2.default)(metadata, index + '.notes');

  return _react2.default.createElement(
    _Flex2.default,
    {
      color: 'white',
      bg: 'black',
      css: {
        alignItems: 'flex-start',
        height: '100vh'
      } },
    _react2.default.createElement(
      _Box2.default,
      {
        mr: 'auto',
        px: 2,
        py: 3,
        css: {
          flex: 'none',
          height: '100vh',
          overflowY: 'auto'
        } },
      slides.map(function (Component, i) {
        return _react2.default.createElement(
          _Box2.default,
          {
            key: i,
            role: 'link',
            p: 1,
            style: {
              outline: i === index ? '1px solid #07c' : null
            },
            css: {
              cursor: 'pointer'
            },
            onClick: function onClick(e) {
              update({ index: i });
            } },
          _react2.default.createElement(
            _Zoom2.default,
            { zoom: 1 / 6 },
            _react2.default.createElement(
              _Root2.default,
              props,
              _react2.default.createElement(
                _Slide2.default,
                null,
                _react2.default.createElement(Component, null)
              )
            )
          )
        );
      })
    ),
    _react2.default.createElement(
      _Box2.default,
      { mx: 'auto', py: 4, width: 2 / 3 },
      _react2.default.createElement(
        _Zoom2.default,
        { zoom: 2 / 3 },
        _react2.default.createElement(
          _Root2.default,
          props,
          props.children
        )
      ),
      _react2.default.createElement(
        _Flex2.default,
        null,
        _react2.default.createElement(
          _Box2.default,
          { ml: 'auto', py: 2 },
          index + 1,
          '/',
          length
        )
      ),
      _react2.default.createElement(
        _Box2.default,
        { mt: 3 },
        notes
      )
    )
  );
};

exports.Overview = Overview;
Overview.propTypes = {
  index: _propTypes2.default.number.isRequired,
  length: _propTypes2.default.number.isRequired,
  update: _propTypes2.default.func.isRequired,
  step: _propTypes2.default.number.isRequired,
  slides: _propTypes2.default.array,
  mode: _propTypes2.default.string,
  notes: _propTypes2.default.object
};

exports.default = Overview;