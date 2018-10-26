'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Carousel = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _lodash = require('lodash.get');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var themeable = function themeable(key) {
  return function (props) {
    return _defineProperty({}, key, (0, _lodash2.default)(props.theme, key, props[key]));
  };
};

var CarouselRoot = _styledComponents2.default.div([], {
  overflowX: 'hidden',
  width: '100%',
  height: '100%',
  '@media print': {
    height: 'auto',
    overflowX: 'visible'
  }
});

var CarouselInner = _styledComponents2.default.div([], {
  display: 'flex',
  width: '100%',
  height: '100%',
  '@media print': {
    height: 'auto',
    display: 'block'
  },
  transitionProperty: 'transform'
}, themeable('transitionTimingFunction'), themeable('transitionDuration'), function (props) {
  return {
    transform: 'translateX(' + -100 * props.index + '%)'
  };
});

CarouselInner.propTypes = {
  index: _propTypes2.default.number.isRequired
};

CarouselInner.defaultProps = {
  transitionTimingFunction: 'ease-out',
  transitionDuration: '.3s'
};

var Carousel = exports.Carousel = function Carousel(props) {
  return _react2.default.createElement(
    CarouselRoot,
    null,
    _react2.default.createElement(CarouselInner, props)
  );
};

exports.default = Carousel;