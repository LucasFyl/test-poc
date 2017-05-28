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

var _reactPdf = require('react-pdf');

var _reactPdf2 = _interopRequireDefault(_reactPdf);

var _aphrodite = require('aphrodite');

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

var _pdfjsDist = require('pdfjs-dist');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ScanPdf = function (_Component) {
    _inherits(ScanPdf, _Component);

    function ScanPdf(props) {
        _classCallCheck(this, ScanPdf);

        var _this = _possibleConstructorReturn(this, (ScanPdf.__proto__ || Object.getPrototypeOf(ScanPdf)).call(this, props));

        _this.onScanPdf = function (file) {
            return _this.scanPdf(file);
        };
        _this.onRenderPdf = function (url, canvasContainer, options) {
            return _this.renderPdf(url, canvasContainer, options);
        };
        _this.state = {
            file: ''
        };
        return _this;
    }

    _createClass(ScanPdf, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            // console.log(this.state);
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            // console.log(nextProps);
            nextProps.file && this.state.file !== nextProps.file && this.scanPdf(nextProps.file);
        }
    }, {
        key: 'scanPdf',
        value: function scanPdf(file) {
            // TODO: Mettre ici la logique pour récupérer l'url de this.props.file plutôt
            // que de devoir spécifier l'url en dur

            // If absolute URL from the remote server is provided, configure the CORS
            // header on that server.
            var url = '/01_Facture_Michael_Ponrajah.pdf';
            // The workerSrc property shall be specified.
            _pdfjsDist.PDFJS.workerSrc = 'http://mozilla.github.io/pdf.js/build/pdf.worker.js';
            this.renderPdf(url, document.getElementById('pdfWrap'));
        }
    }, {
        key: 'renderPdf',
        value: function renderPdf(url, canvasContainer, options) {
            options = options || { scale: 1 };

            var renderPage = function renderPage(page) {
                var viewport = page.getViewport(1);
                var canvas = document.createElement('canvas');
                var ctx = canvas.getContext('2d');
                var cH = viewport.height.toFixed(2);
                var cW = viewport.width.toFixed(2);

                var renderContext = {
                    canvasContext: ctx,
                    viewport: viewport
                };

                canvas.height = cH;
                canvas.width = cW;
                canvas.width = viewport.width;
                canvasContainer.appendChild(canvas);
                page.render(renderContext);
            };

            var renderPages = function renderPages(pdfDoc) {
                for (var num = 1; num <= pdfDoc.numPages; num++) {
                    pdfDoc.getPage(num).then(renderPage);
                }
            };

            _pdfjsDist.PDFJS.disableWorker = true;
            _pdfjsDist.PDFJS.getDocument(url).then(renderPages);
        }
    }, {
        key: 'render',
        value: function render() {
            var file = this.props.file;

            return _react2.default.createElement('div', { id: 'pdfWrap',
                className: (0, _aphrodite.css)(_style2.default.wrapper) });
        }
    }]);

    return ScanPdf;
}(_react.Component);

ScanPdf.displayName = 'ScanPdf';
ScanPdf.propTypes = {
    file: _propTypes2.default.any
};
exports.default = ScanPdf;