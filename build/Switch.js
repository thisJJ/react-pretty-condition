'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Case = exports.Switch = undefined;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Switch = exports.Switch = ({ value, children }) => {
  const renderElement = _react2.default.Children.map(children, child => {
    if (child.props.value === value) return child.props.children;
  });

  return !(0, _lodash.isEmpty)(renderElement) ? renderElement[0] : null;
};

Switch.propTypes = {
  children: _propTypes2.default.node,
  value: _propTypes2.default.node
};

const Case = exports.Case = ({ children }) => ({ children });

Case.propTypes = {
  children: _propTypes2.default.node,
  value: _propTypes2.default.node
};