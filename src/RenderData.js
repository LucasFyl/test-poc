import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {css} from 'aphrodite';
import style from './style';
import './stylesheet.css';
import RenderSvg from './RenderSvg';

class RenderData extends Component{
    static displayName = 'RenderData';

    static propTypes = {

    };

    constructor(props){
        super(props);
    }

    render(){
        console.log('--------', RenderSvg);
        console.log('********', RenderSvg.state);
        return (
            <div className={'dataWrap'}>
                {'Render data here'}
            </div>
        );
    }
}

export default RenderData;
