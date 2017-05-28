import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {css} from 'aphrodite';
import style from './style';
// import App from './App';
import {Provider} from 'react-redux';
import UploadPdf from './UploadPdf.js';
import stylesheet from './stylesheet.css';
import configureStore from './store/configure-store';

const store = configureStore();

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
            <Provider store={store}>
                <UploadPdf />
            </Provider>
        );
    }
}

export default App;
