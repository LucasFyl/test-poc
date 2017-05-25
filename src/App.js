import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {css} from 'aphrodite';
import style from './style';
import UploadPdf from './UploadPdf.js';
import './stylesheet.css';

class App extends Component{
    static displayName = 'App';

    static propTypes = {
        hasPdf: PropTypes.bool
    };

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className={'pageWrap'}>
                <UploadPdf />
            </div>
        );
    }
}

export default App;
