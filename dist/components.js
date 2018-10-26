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

var _styledSystem = require('styled-system');

var _Notes = require('./Notes');

var _Notes2 = _interopRequireDefault(_Notes);

var _Mono = require('./Mono');

var _Mono2 = _interopRequireDefault(_Mono);

var _Code = require('./Code');

var _Code2 = _interopRequireDefault(_Code);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var css = function css(key) {
  return function (props) {
    return props.theme[key];
  };
};

var Heading = _styledComponents2.default.h1([], {
  lineHeight: 1.25
}, _styledSystem.fontSize, _styledSystem.space, _styledSystem.color, css('heading'));
Heading.propTypes = _extends({}, _styledSystem.fontSize.propTypes, _styledSystem.space.propTypes, _styledSystem.color.propTypes);
Heading.defaultProps = {
  color: 'heading',
  mt: 3,
  mb: 3
};

var h1 = (0, _styledComponents2.default)(Heading.withComponent('h1'))([], css('h1'));
h1.defaultProps = {
  fontSize: 4
};

var h2 = (0, _styledComponents2.default)(Heading.withComponent('h2'))([], css('h2'));
h2.defaultProps = {
  fontSize: 3
};

var h3 = (0, _styledComponents2.default)(Heading.withComponent('h3'))([], css('h3'));
h3.defaultProps = {
  fontSize: 2
};
var h4 = (0, _styledComponents2.default)(h3.withComponent('h4'))([], css('h4'));
var h5 = (0, _styledComponents2.default)(h3.withComponent('h5'))([], css('h5'));
var h6 = (0, _styledComponents2.default)(h3.withComponent('h6'))([], css('h6'));

var a = _styledComponents2.default.a([], _styledSystem.color, css('link'), css('a'));
a.propTypes = _extends({}, _styledSystem.color.propTypes);
a.defaultProps = {
  color: 'link'
};

var p = _styledComponents2.default.p([], _styledSystem.fontSize, _styledSystem.space, _styledSystem.color, css('paragraph'), css('p'));
p.propTypes = _extends({}, _styledSystem.fontSize.propTypes, _styledSystem.space.propTypes, _styledSystem.color.propTypes);
p.defaultProps = {
  fontSize: 2
};

var ul = _styledComponents2.default.ul([], {
  textAlign: 'left'
}, _styledSystem.fontSize, css('ul'));
ul.propTypes = _extends({}, _styledSystem.fontSize.propTypes);
ul.defaultProps = {
  fontSize: 2
};

var ol = _styledComponents2.default.ol([], {
  textAlign: 'left'
}, _styledSystem.fontSize, css('ol'));
ol.propTypes = _extends({}, _styledSystem.fontSize.propTypes);
ol.defaultProps = {
  fontSize: 2
};
var li = _styledComponents2.default.li([], css('li'));

var blockquote = _styledComponents2.default.blockquote([], {
  textAlign: 'left',
  fontWeight: 'bold'
}, _styledSystem.fontSize, _styledSystem.space, _styledSystem.color, css('blockquote'), css('quote'));
blockquote.propTypes = _extends({}, _styledSystem.fontSize.propTypes, _styledSystem.space.propTypes, _styledSystem.color.propTypes);
blockquote.defaultProps = {
  fontSize: 2,
  px: 0,
  mx: 0,
  color: 'quote'
};

var Pre = _styledComponents2.default.pre([], function (props) {
  return {
    fontFamily: props.theme.monospace,
    textAlign: 'left',
    whiteSpace: 'pre-wrap'
  };
}, _styledSystem.fontSize, _styledSystem.space, _styledSystem.color, css('pre'));
Pre.propTypes = _extends({}, _styledSystem.fontSize.propTypes, _styledSystem.space.propTypes, _styledSystem.color.propTypes);
Pre.defaultProps = {
  fontSize: 1,
  m: 0,
  p: 2,
  color: 'pre',
  bg: 'preBackground'
};

var code = (0, _styledComponents.withTheme)(function (props) {
  var theme = props.theme;

  switch (props.className) {
    case 'language-notes':
      return _react2.default.createElement(
        _Notes2.default,
        null,
        _react2.default.createElement(_Mono2.default, _extends({}, props, { color: 'white' }))
      );
    default:
      if (theme.prism && theme.prism.style) {
        return _react2.default.createElement(_Code2.default, props);
      }
      return _react2.default.createElement(Pre, props);
  }
});

var inlineCode = _styledComponents2.default.code([], function (props) {
  return {
    fontFamily: props.theme.monospace
  };
}, _styledSystem.fontSize, _styledSystem.space, _styledSystem.color, css('code'));
inlineCode.propTypes = _extends({}, _styledSystem.fontSize.propTypes, _styledSystem.space.propTypes, _styledSystem.color.propTypes);
inlineCode.defaultProps = {
  color: 'code',
  bg: 'codeBackground'
};

var img = _styledComponents2.default.img([], {
  maxWidth: '100%',
  height: 'auto',
  objectFit: 'cover'
}, css('img'), css('image'));

var TableRoot = _styledComponents2.default.div([], {
  overflowX: 'auto'
});
var Table = _styledComponents2.default.table([], {
  width: '100%',
  borderCollapse: 'separate',
  borderSpacing: 0,
  '& td, & th': {
    textAlign: 'left',
    paddingRight: '.5em',
    paddingTop: '.25em',
    paddingBottom: '.25em',
    borderBottom: '1px solid',
    verticalAlign: 'top'
  }
}, css('table'));

var table = function table(props) {
  return _react2.default.createElement(
    TableRoot,
    null,
    _react2.default.createElement(Table, props)
  );
};

exports.default = {
  h1: h1,
  h2: h2,
  h3: h3,
  h4: h4,
  h5: h5,
  h6: h6,
  a: a,
  p: p,
  blockquote: blockquote,
  ul: ul,
  ol: ol,
  li: li,
  pre: function pre(props) {
    return props.children;
  },
  code: code,
  inlineCode: inlineCode,
  img: img,
  table: table
};