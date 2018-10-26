'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _context = require('./context');

var _updaters = require('./updaters');

var _constants = require('./constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = (0, _context.withDeck)((_temp = _class = function (_React$Component) {
  _inherits(Appear, _React$Component);

  function Appear(props) {
    _classCallCheck(this, Appear);

    var _this = _possibleConstructorReturn(this, (Appear.__proto__ || Object.getPrototypeOf(Appear)).call(this, props));

    var _props$deck = props.deck,
        update = _props$deck.update,
        index = _props$deck.index;

    var steps = _react2.default.Children.toArray(props.children).length;
    update((0, _updaters.setSteps)(index, steps));
    return _this;
  }

  _createClass(Appear, [{
    key: 'render',
    value: function render() {
      var children = _react2.default.Children.toArray(this.props.children).map(function (child) {
        return typeof child === 'string' ? _react2.default.createElement(
          'div',
          null,
          child
        ) : child;
      });
      var _props$deck2 = this.props.deck,
          step = _props$deck2.step,
          mode = _props$deck2.mode;


      if (mode === _constants.modes.grid) {
        return children;
      }

      return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        children.map(function (child, i) {
          return _react2.default.cloneElement(child, {
            key: i,
            style: {
              visibility: step >= i + 1 ? 'visible' : 'hidden'
            }
          });
        })
      );
    }
  }]);

  return Appear;
}(_react2.default.Component), _class.propTypes = {
  children: _propTypes2.default.array.isRequired,
  deck: _propTypes2.default.object.isRequired
}, _temp));