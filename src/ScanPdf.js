import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import ReactPDF from 'react-pdf';
import {css} from 'aphrodite';
import style from './style';
import {PDFJS} from 'pdfjs-dist';


class ScanPdf extends Component{
    static displayName = 'ScanPdf';

    static propTypes = {
        file: PropTypes.any
    }

    constructor(props){
        super(props);
        this.onScanPdf = (file) => this.scanPdf(file);
        this.onRenderPdf = (url, canvasContainer, options) => this.renderPdf(url, canvasContainer, options);
        this.state = {
            file: ''
        };
    }

    componentWillMount(){
        // console.log(this.state);
    }

    componentWillReceiveProps(nextProps){
        // console.log(nextProps);
        nextProps.file && (this.state.file !== nextProps.file) && this.scanPdf(nextProps.file);
    }

    scanPdf(file){
        // TODO: Mettre ici la logique pour récupérer l'url de this.props.file plutôt
        // que de devoir spécifier l'url en dur

        // If absolute URL from the remote server is provided, configure the CORS
        // header on that server.
        const url = '/01_Facture_Michael_Ponrajah.pdf';
        // The workerSrc property shall be specified.
        PDFJS.workerSrc = 'http://mozilla.github.io/pdf.js/build/pdf.worker.js';
        this.renderPdf(url, document.getElementById('pdfWrap'));
    }

    renderPdf(url, canvasContainer, options){
        options = options || {scale: 1};

        const renderPage = (page) => {
            const viewport = page.getViewport(1);
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            const cH = viewport.height.toFixed(2);
            const cW = viewport.width.toFixed(2);

            const renderContext = {
                canvasContext: ctx,
                viewport: viewport
            };

            canvas.height = cH;
            canvas.width = cW;
            canvas.width = viewport.width;
            canvasContainer.appendChild(canvas);
            page.render(renderContext);
        };

        const renderPages = (pdfDoc) => {
            for(let num = 1; num <= pdfDoc.numPages; num++){
                pdfDoc.getPage(num).then(renderPage);
            }
        };

        PDFJS.disableWorker = true;
        PDFJS.getDocument(url).then(renderPages);
    }

    render(){
        const {file} = this.props;
        return (
            <div id="pdfWrap"
                 className={css(style.wrapper)} />
        );
    }
}

export default ScanPdf;
