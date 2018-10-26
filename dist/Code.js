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

var _styledComponents = require('styled-components');

var _prismLight = require('react-syntax-highlighter/prism-light');

var _prismLight2 = _interopRequireDefault(_prismLight);

var _atomDark = require('react-syntax-highlighter/styles/prism/atom-dark');

var _atomDark2 = _interopRequireDefault(_atomDark);

var _javascript = require('react-syntax-highlighter/languages/prism/javascript');

var _javascript2 = _interopRequireDefault(_javascript);

var _jsx = require('react-syntax-highlighter/languages/prism/jsx');

var _jsx2 = _interopRequireDefault(_jsx);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = (0, _styledComponents.withTheme)((_temp = _class = function (_React$Component) {
  _inherits(Code, _React$Component);

  function Code(props) {
    _classCallCheck(this, Code);

    var _this = _possibleConstructorReturn(this, (Code.__proto__ || Object.getPrototypeOf(Code)).call(this, props));

    _this.getLangauge = function (lang) {
      return lang ? lang.replace('language-', '') : 'javascripts';
    };

    (0, _prismLight.registerLanguage)('javascript', _javascript2.default);
    (0, _prismLight.registerLanguage)('jsx', _jsx2.default);
    if (props.theme && props.theme.prism && props.theme.prism.languages) {
      var languages = props.theme.prism.languages;
      Object.keys(languages).forEach(function (key) {
        (0, _prismLight.registerLanguage)(key, languages[key]);
      });
    }
    return _this;
  }

  _createClass(Code, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          children = _props.children,
          theme = _props.theme;

      var language = this.getLangauge(className);
      var style = theme.prism && theme.prism.style ? theme.prism.style : _atomDark2.default;
      return _react2.default.createElement(
        _prismLight2.default,
        { language: language, style: style },
        children
      );
    }
  }]);

  return Code;
}(_react2.default.Component), _class.propTypes = {
  children: _propTypes2.default.string,
  className: _propTypes2.default.string,
  theme: _propTypes2.default.object
}, _temp));