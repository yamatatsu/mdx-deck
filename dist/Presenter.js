'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Presenter = undefined;

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

var _Timer = require('./Timer');

var _Timer2 = _interopRequireDefault(_Timer);

var _Mono = require('./Mono');

var _Mono2 = _interopRequireDefault(_Mono);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Presenter = function Presenter(_ref) {
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

  var Next = slides[index + 1];
  var notes = (0, _lodash2.default)(metadata, index + '.notes');

  return _react2.default.createElement(
    _Flex2.default,
    {
      color: 'white', bg: 'black',
      css: {
        flexDirection: 'column',
        height: '100vh'
      }
    },
    _react2.default.createElement(
      _Flex2.default,
      { my: 'auto' },
      _react2.default.createElement(
        _Box2.default,
        {
          mx: 'auto',
          width: 5 / 8,
          css: {
            border: '1px solid rgba(128, 128, 128, 0.25)'
          } },
        _react2.default.createElement(
          _Zoom2.default,
          { zoom: 5 / 8 },
          _react2.default.createElement(
            _Root2.default,
            props,
            props.children
          )
        )
      ),
      _react2.default.createElement(
        _Flex2.default,
        {
          width: 1 / 4,
          mx: 'auto',
          css: {
            flex: 'none',
            flexDirection: 'column'
          } },
        _react2.default.createElement(
          _Box2.default,
          {
            mx: 'auto',
            css: {
              border: '1px solid rgba(128, 128, 128, 0.25)'
            } },
          _react2.default.createElement(
            _Zoom2.default,
            { zoom: 1 / 4 },
            _react2.default.createElement(
              _Root2.default,
              props,
              Next && _react2.default.createElement(
                _Slide2.default,
                null,
                _react2.default.createElement(Next, null)
              )
            )
          )
        ),
        _react2.default.createElement(
          _Box2.default,
          {
            py: 3,
            css: {
              flex: 'auto'
            } },
          notes
        )
      )
    ),
    _react2.default.createElement(
      _Flex2.default,
      { mt: 'auto', px: 3, py: 3 },
      _react2.default.createElement(
        _Mono2.default,
        null,
        'Slide ',
        index + 1,
        ' of ',
        length
      ),
      _react2.default.createElement(_Box2.default, { mx: 'auto' }),
      _react2.default.createElement(_Timer2.default, null)
    )
  );
};

exports.Presenter = Presenter;
Presenter.propTypes = {
  index: _propTypes2.default.number.isRequired,
  length: _propTypes2.default.number.isRequired,
  update: _propTypes2.default.func.isRequired,
  step: _propTypes2.default.number.isRequired,
  slides: _propTypes2.default.array,
  mode: _propTypes2.default.string,
  metadata: _propTypes2.default.object
};

exports.default = Presenter;