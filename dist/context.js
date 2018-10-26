'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withSlide = exports.withDeck = exports.Consumer = exports.Provider = exports.Context = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Context = exports.Context = _react2.default.createContext(null);
var Provider = Context.Provider,
    Consumer = Context.Consumer;
exports.Provider = Provider;
exports.Consumer = Consumer;
var withDeck = exports.withDeck = function withDeck(Component) {
  return function (props) {
    return _react2.default.createElement(
      Consumer,
      null,
      function (deck) {
        return _react2.default.createElement(Component, _extends({}, props, {
          deck: deck,
          slide: deck
        }));
      }
    );
  };
};

// alias for backwards compatibility
var withSlide = exports.withSlide = withDeck;

exports.default = Context;