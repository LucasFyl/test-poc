import React, {Component, PropTypes} from 'react';
import Styletron from 'styletron';
import {StyletronProvider} from 'styletron-react';
import {StyledTemplate} from './style';

const styletron = new Styletron();

export default class Template extends Component{
    static displayName = 'Template';
    static propTypes = {
        active: PropTypes.bool
    };
    constructor(props){
        super(props);
    }
    render(){
        const {active} = this.props;

        return(
            <StyletronProvider styletron={styletron}>
                <StyledTemplate active={active}>

                </StyledTemplate>
            </StyletronProvider>
        );
    }
}