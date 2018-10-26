'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Head = exports.HeadProvider = exports.Context = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var noop = function noop() {
  console.warn('Missing HeadProvider');
};

var Context = exports.Context = _react2.default.createContext({
  tags: [],
  push: noop
});

var HeadProvider = exports.HeadProvider = function (_React$Component) {
  _inherits(HeadProvider, _React$Component);

  function HeadProvider() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, HeadProvider);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = HeadProvider.__proto__ || Object.getPrototypeOf(HeadProvider)).call.apply(_ref, [this].concat(args))), _this), _this.push = function (elements) {
      var _this$props$tags;

      (_this$props$tags = _this.props.tags).push.apply(_this$props$tags, _toConsumableArray(elements));
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(HeadProvider, [{
    key: 'render',
    value: function render() {
      var context = _extends({}, this.props, {
        push: this.push
      });

      return _react2.default.createElement(
        Context.Provider,
        { value: context },
        this.props.children
      );
    }
  }]);

  return HeadProvider;
}(_react2.default.Component);

HeadProvider.defaultProps = {
  tags: []
};

var Head = exports.Head = function (_React$Component2) {
  _inherits(Head, _React$Component2);

  function Head() {
    var _ref2;

    var _temp2, _this2, _ret2;

    _classCallCheck(this, Head);

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return _ret2 = (_temp2 = (_this2 = _possibleConstructorReturn(this, (_ref2 = Head.__proto__ || Object.getPrototypeOf(Head)).call.apply(_ref2, [this].concat(args))), _this2), _this2.state = {
      didMount: false
    }, _this2.rehydrate = function () {
      var children = _react2.default.Children.toArray(_this2.props.children);
      var nodes = [].concat(_toConsumableArray(document.head.querySelectorAll('[data-head]')));

      nodes.forEach(function (node) {
        node.remove();
      });
      children.forEach(function (child) {
        if (child.type === 'title') {
          var title = document.head.querySelector('title');
          if (title) title.remove();
        }
        if (child.type === 'meta') {
          var name = child.props.name;

          var meta = void 0;
          if (name) meta = document.head.querySelector('meta[name="' + name + '"]');
          if (meta) meta.remove();
        }
      });

      _this2.setState({
        didMount: true
      });
    }, _temp2), _possibleConstructorReturn(_this2, _ret2);
  }

  _createClass(Head, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.rehydrate();
    }
  }, {
    key: 'render',
    value: function render() {
      var _children = _react2.default.Children.toArray(this.props.children).map(function (child) {
        return _react2.default.cloneElement(child, {
          'data-head': true
        });
      });

      var didMount = this.state.didMount;


      if (!didMount) {
        return _react2.default.createElement(Context.Consumer, {
          children: function children(_ref3) {
            var push = _ref3.push;

            push(_children);
            return false;
          }
        });
      }

      return (0, _reactDom.createPortal)(_children, document.head);
    }
  }]);

  return Head;
}(_react2.default.Component);