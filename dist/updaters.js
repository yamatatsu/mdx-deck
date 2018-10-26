'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dec = exports.inc = exports.setSteps = exports.setNotes = exports.setMetadata = exports.toggleMode = exports.incrementStep = exports.decrementStep = exports.incrementIndex = exports.decrementIndex = exports.next = exports.previous = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _lodash = require('lodash.get');

var _lodash2 = _interopRequireDefault(_lodash);

var _constants = require('./constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var previous = exports.previous = function previous(state) {
  var steps = (0, _lodash2.default)(state, 'metadata[' + state.index + '].steps', 0);
  if (steps && state.step > 0) {
    return decrementStep(state);
  }
  return decrementIndex(state);
};

var next = exports.next = function next(state) {
  var steps = (0, _lodash2.default)(state, 'metadata[' + state.index + '].steps', 0);
  if (steps && state.step < steps) {
    return incrementStep(state);
  }
  return incrementIndex(state);
};

var decrementIndex = exports.decrementIndex = function decrementIndex(state) {
  return state.index > 0 ? {
    index: (state.index - 1) % state.length,
    step: (0, _lodash2.default)(state, 'metadata[' + (state.index - 1) + '].steps', 0)
  } : null;
};

var incrementIndex = exports.incrementIndex = function incrementIndex(state) {
  return state.index < state.length - 1 ? {
    index: (state.index + 1) % state.length,
    step: 0
  } : null;
};

var decrementStep = exports.decrementStep = function decrementStep(state) {
  return state.step > 0 ? {
    step: state.step - 1
  } : null;
};

var incrementStep = exports.incrementStep = function incrementStep(state) {
  return state.step < (0, _lodash2.default)(state, 'metadata[' + state.index + '].steps') ? { step: state.step + 1 } : null;
};

var toggleMode = exports.toggleMode = function toggleMode(key) {
  return function (state) {
    return {
      mode: state.mode === _constants.modes[key] ? _constants.modes.normal : _constants.modes[key]
    };
  };
};

var setMetadata = exports.setMetadata = function setMetadata(i, metadata) {
  return function (state) {
    return {
      metadata: _extends({}, state.metadata, _defineProperty({}, i, _extends({}, state.metadata[i] || {}, metadata)))
    };
  };
};

var setNotes = exports.setNotes = function setNotes(i, notes) {
  return setMetadata(i, { notes: notes });
};
var setSteps = exports.setSteps = function setSteps(i, steps) {
  return setMetadata(i, { steps: steps });
};

// shims
var inc = exports.inc = incrementIndex;
var dec = exports.dec = decrementIndex;