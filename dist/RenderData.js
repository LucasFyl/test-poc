'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _aphrodite = require('aphrodite');

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

require('./stylesheet.css');

var _RenderSvg = require('./RenderSvg');

var _RenderSvg2 = _interopRequireDefault(_RenderSvg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RenderData = function (_Component) {
    _inherits(RenderData, _Component);

    function RenderData(props) {
        _classCallCheck(this, RenderData);

        return _possibleConstructorReturn(this, (RenderData.__proto__ || Object.getPrototypeOf(RenderData)).call(this, props));
    }

    _createClass(RenderData, [{
        key: 'render',
        value: function render() {
            console.log('--------', _RenderSvg2.default);
            console.log('********', _RenderSvg2.default.state);
            return _react2.default.createElement(
                'div',
                { className: 'dataWrap' },
                'Render data here'
            );
        }
    }]);

    return RenderData;
}(_react.Component);

RenderData.displayName = 'RenderData';
RenderData.propTypes = {};
exports.default = RenderData;