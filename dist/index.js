'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styletron = require('styletron');

var _styletron2 = _interopRequireDefault(_styletron);

var _styletronReact = require('styletron-react');

var _style = require('./style');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styletron = new _styletron2.default();

var Template = function (_Component) {
    _inherits(Template, _Component);

    function Template(props) {
        _classCallCheck(this, Template);

        return _possibleConstructorReturn(this, (Template.__proto__ || Object.getPrototypeOf(Template)).call(this, props));
    }

    _createClass(Template, [{
        key: 'render',
        value: function render() {
            var active = this.props.active;


            return _react2.default.createElement(
                _styletronReact.StyletronProvider,
                { styletron: styletron },
                _react2.default.createElement(_style.StyledTemplate, { active: active })
            );
        }
    }]);

    return Template;
}(_react.Component);

Template.displayName = 'Template';
Template.propTypes = {
    active: _react.PropTypes.bool
};
exports.default = Template;