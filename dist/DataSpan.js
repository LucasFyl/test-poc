'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _aphrodite = require('aphrodite');

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DataSpan = function (_Component) {
    _inherits(DataSpan, _Component);

    function DataSpan(props) {
        _classCallCheck(this, DataSpan);

        return _possibleConstructorReturn(this, (DataSpan.__proto__ || Object.getPrototypeOf(DataSpan)).call(this, props));
    }

    _createClass(DataSpan, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                customStyle = _props.customStyle,
                textContent = _props.textContent;

            var spanStyle = _aphrodite.StyleSheet.create({
                position: {
                    display: 'block',
                    position: 'absolute',
                    left: '' + customStyle.left,
                    top: '' + customStyle.top,
                    transform: '' + customStyle.transform,
                    fontSize: '' + customStyle.fontSize,
                    width: customStyle.width + 'px',
                    height: '1em',
                    background: 'red',
                    opacity: '.5'
                }
            });
            return _react2.default.createElement('span', { 'data-text': textContent,
                className: (0, _aphrodite.css)(spanStyle.position) });
        }
    }]);

    return DataSpan;
}(_react.Component);

DataSpan.displayName = 'DataSpan';
DataSpan.propTypes = {
    customStyle: _propTypes2.default.object,
    textContent: _propTypes2.default.string
};
exports.default = DataSpan;