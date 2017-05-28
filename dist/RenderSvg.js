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

var _DataSpan = require('./DataSpan');

var _DataSpan2 = _interopRequireDefault(_DataSpan);

var _reactSelectable = require('react-selectable');

var _pdfjsDist = require('pdfjs-dist');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SelectableComponent = (0, _reactSelectable.createSelectable)(_DataSpan2.default);

var RenderSvg = function (_Component) {
    _inherits(RenderSvg, _Component);

    function RenderSvg(props) {
        _classCallCheck(this, RenderSvg);

        var _this = _possibleConstructorReturn(this, (RenderSvg.__proto__ || Object.getPrototypeOf(RenderSvg)).call(this, props));

        _this.onGetPages = function (file) {
            return _this.getPages(file);
        };
        _this.onExtractTextData = function (ctx, page) {
            return _this.extractTextData(ctx, page);
        };
        _this.onHandleSelection = function (selectedKeys) {
            return _this.handleSelection(selectedKeys);
        };
        _this.state = {
            file: '',
            dataSpans: [],
            selectedKeys: []
        };
        return _this;
    }

    _createClass(RenderSvg, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            return nextProps.file && this.state.file !== nextProps.file && this.getPages(nextProps.file);
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            this.state.file !== prevState.file && this.getPages(this.state.file);
        }
    }, {
        key: 'handleSelection',
        value: function handleSelection(selectedKeys) {
            console.log(selectedKeys);
            this.setState({ selectedKeys: selectedKeys });
        }
    }, {
        key: 'extractTextData',
        value: function extractTextData(ctx, page) {
            var _this2 = this;

            var dataSpan = [];
            var viewport = page.getViewport(1);
            var pageContainer = document.getElementById('svgWrap');
            pageContainer.style.width = viewport.width + 'px';
            pageContainer.style.height = viewport.height + 'px';
            // document.getElementById('container_preview').appendChild(pageContainer);

            page.getTextContent({ normalizeWhitespace: true }).then(function (textContent) {
                textContent.items.forEach(function (textItem) {
                    var tx = _pdfjsDist.PDFJS.Util.transform(_pdfjsDist.PDFJS.Util.transform(viewport.transform, textItem.transform), [1, 0, 0, -1, 0, 0]);
                    var style = textContent.styles[textItem.fontName];

                    // adjust for font ascent/descent
                    var fontSize = Math.sqrt(tx[2] * tx[2] + tx[3] * tx[3]);
                    if (style.ascent) {
                        tx[5] -= fontSize * style.ascent;
                    } else if (style.descent) {
                        tx[5] -= fontSize * (1 + style.descent);
                    } else {
                        tx[5] -= fontSize / 2;
                    }

                    // adjust for rendered width
                    if (textItem.width > 0) {
                        ctx.font = tx[0] + 'px ' + style.fontFamily;

                        var width = ctx.measureText(textItem.str).width;
                        if (width > 0) {
                            tx[0] = textItem.width * viewport.scale / width;
                        }
                    }

                    var item = {
                        textContent: textItem.str,
                        style: {
                            fontFamily: style.fontFamily,
                            fontSize: fontSize + 'px',
                            transform: 'scaleX(' + tx[0] + ')',
                            left: tx[4] + 'px',
                            top: tx[5] + 'px',
                            width: '' + textItem.width * viewport.scale,
                            height: '' + textItem.height
                        }
                    };
                    dataSpan.push(item);
                });
                _this2.setState({ dataSpans: dataSpan });
            });
        }
    }, {
        key: 'getPages',
        value: function getPages(file) {
            var _this3 = this;

            _pdfjsDist.PDFJS.getDocument('/' + file.name).then(function (pdf) {
                var ctx = document.createElement('canvas').getContext('2d', { alpha: false });
                for (var i = 1; i <= pdf.numPages; i++) {
                    pdf.getPage(i).then(function (page) {
                        _this3.extractTextData(ctx, page);
                    });
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this4 = this;

            var datas = !!this.state.dataSpans && this.state.dataSpans;

            return _react2.default.createElement(
                'div',
                { id: 'svgWrap',
                    className: (0, _aphrodite.css)(_style2.default.wrapper) },
                _react2.default.createElement(
                    _reactSelectable.SelectableGroup,
                    { onSelection: this.onHandleSelection,
                        className: (0, _aphrodite.css)(_style2.default.wrapper),
                        fixedPosition: Boolean(true),
                        style: { width: '100%', height: '100%' } },
                    datas.map(function (value, index) {
                        var selected = _this4.state.selectedKeys.indexOf(value.id) > -1;
                        return _react2.default.createElement(SelectableComponent, { key: index,
                            selected: selected,
                            selectableKey: value.textContent,
                            customStyle: value.style,
                            textContent: value.textContent });
                    })
                )
            );
        }
    }]);

    return RenderSvg;
}(_react.Component);

RenderSvg.displayName = 'RenderSvg';
RenderSvg.propTypes = {
    file: _propTypes2.default.any
};
exports.default = RenderSvg;