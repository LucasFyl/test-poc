import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import ReactPDF from 'react-pdf';
import RenderSvg from './RenderSvg.js';
import ScanPdf from './ScanPdf.js';
import RenderData from './RenderData.js';
import {css, StyleSheet} from 'aphrodite';
import style from './style';
import { connect } from 'react-redux'
import * as actions from './actions/actions'


class UploadPdf extends Component{
    static displayName = 'UploadPdf';

    constructor(props){
        super(props);
        this.onFileChange = (event) => this.fileChange(event);
        this.state = {
            file: ''
        };
    }

    fileChange(event){
        this.setState({
            file: event.target.files[0]
        });
    }

    render(){
        const {file} = this.state;
        console.log('props', this.props.fileStore);
        return (
            <div className={css(style.outerWrap)}>
                <div id="container_upload"
                         className={css(style.userWrap)}>
                    <label htmlFor="file">{'Load from file:'}</label>
                    <input type="file"
                           onChange={(event) => this.fileChange(event)} />
                    <RenderData />
                </div>
                <div id="container_preview"
                     className={css(style.previewWrap)}>
                    <ScanPdf file={file} />
                    <RenderSvg file={file} />
                </div>
            </div>
        );
    }
}

export default connect(state => ({ fileStore: state.fileStore }), { ...actions })(UploadPdf)
