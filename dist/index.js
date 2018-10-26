'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.constants = exports.updaters = exports.themes = exports.theme = exports.components = exports.Code = exports.Appear = exports.Notes = exports.Image = exports.SlideDeck = exports.Head = exports.withSlide = exports.withDeck = undefined;

var _context = require('./context');

Object.defineProperty(exports, 'withDeck', {
  enumerable: true,
  get: function get() {
    return _context.withDeck;
  }
});
Object.defineProperty(exports, 'withSlide', {
  enumerable: true,
  get: function get() {
    return _context.withSlide;
  }
});

var _Head = require('./Head');

Object.defineProperty(exports, 'Head', {
  enumerable: true,
  get: function get() {
    return _Head.Head;
  }
});

var _SlideDeck = require('./SlideDeck');

Object.defineProperty(exports, 'SlideDeck', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_SlideDeck).default;
  }
});

var _Image = require('./Image');

Object.defineProperty(exports, 'Image', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Image).default;
  }
});

var _Notes = require('./Notes');

Object.defineProperty(exports, 'Notes', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Notes).default;
  }
});

var _Appear = require('./Appear');

Object.defineProperty(exports, 'Appear', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Appear).default;
  }
});

var _Code = require('./Code');

Object.defineProperty(exports, 'Code', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Code).default;
  }
});

var _components = require('./components');

Object.defineProperty(exports, 'components', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_components).default;
  }
});

var _themes2 = require('./themes');

Object.defineProperty(exports, 'theme', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_themes2).default;
  }
});

var _themes = _interopRequireWildcard(_themes2);

var _updaters2 = require('./updaters');

var _updaters = _interopRequireWildcard(_updaters2);

var _constants2 = require('./constants');

var _constants = _interopRequireWildcard(_constants2);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.themes = _themes;

// internals for third-party components

exports.updaters = _updaters;
exports.constants = _constants;