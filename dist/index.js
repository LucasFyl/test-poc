'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _aphrodite = require('aphrodite');

var _styles = require('./styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Template = function Template(props) {
    var active = props.active;

    return _react2.default.createElement('div', { className: (0, _aphrodite.css)(_styles.styles.default, props.active ? _styles.styles.red : _styles.styles.blue, _styles.styles.hover, _styles.styles.responsive) });
};

Template.displayName = 'Template';
Template.propTypes = {
    active: _react.PropTypes.bool
};

exports.default = Template;