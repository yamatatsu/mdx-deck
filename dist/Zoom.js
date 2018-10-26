'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var ZoomRoot = _styledComponents2.default.div([], {
  backgroundColor: 'white'
}, function (props) {
  return {
    width: 100 * props.zoom + 'vw',
    height: 100 * props.zoom + 'vh'
  };
});

ZoomRoot.propTypes = {
  zoom: _propTypes2.default.number.isRequired
};

var ZoomInner = _styledComponents2.default.div([], function (props) {
  return {
    transformOrigin: '0 0',
    transform: 'scale(' + props.zoom + ')'
  };
});

ZoomInner.propTypes = {
  zoom: _propTypes2.default.number.isRequired
};

var Zoom = function Zoom(_ref) {
  var zoom = _ref.zoom,
      props = _objectWithoutProperties(_ref, ['zoom']);

  return _react2.default.createElement(
    ZoomRoot,
    { zoom: zoom },
    _react2.default.createElement(ZoomInner, _extends({ zoom: zoom }, props))
  );
};

Zoom.propTypes = {
  zoom: _propTypes2.default.number
};

Zoom.defaultProps = {
  zoom: 1
};

exports.default = Zoom;