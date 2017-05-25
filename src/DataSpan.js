import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import {css, StyleSheet} from 'aphrodite';
import style from './style';

class DataSpan extends Component{
    static displayName = 'DataSpan';

    static propTypes = {
        customStyle: PropTypes.object,
        textContent: PropTypes.string
    }

    constructor(props){
        super(props);
    }

    render(){
        const {customStyle, textContent} = this.props;
        const spanStyle = StyleSheet.create({
            position: {
                display: 'block',
                position: 'absolute',
                left: `${customStyle.left}`,
                top: `${customStyle.top}`,
                transform: `${customStyle.transform}`,
                fontSize: `${customStyle.fontSize}`,
                width: `${customStyle.width}px`,
                height: `1em`,
                background: 'red',
                opacity: '.5'
            }
        });
        return (
            <span data-text={textContent}
                  className={css(spanStyle.position)} />
        );
    }
}

export default DataSpan;
