'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.If = undefined;

var _lodash = require('lodash');

const If = exports.If = ({ condition, children }) => condition(condition) ? condition ? children : null : null;