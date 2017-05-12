import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {css, StyleSheet} from 'aphrodite';
import merge from 'lodash.merge';
import defaultStyle from './style';

export default class Button extends Component{
    static displayName = 'Button';

    static propTypes = {
        children: PropTypes.any,
        style: PropTypes.object,
        disabled: PropTypes.bool,
        outline: PropTypes.bool,
        secondary: PropTypes.bool
    };

    static defaultProps = {
        style: {}
    };

    constructor(props){
        super(props);
    }

    render(){
        const {children, disabled, secondary, outline, style: customStyle} = this.props;
        const style = StyleSheet.create(merge(defaultStyle, customStyle));

        const btnStyle = [style.reset, style.primary];

        if(disabled) btnStyle.push(style.disabled);
        if(outline) btnStyle.push(style.outline);
        if(secondary) btnStyle.push(style.secondary);
        if(secondary && disabled) btnStyle.push(style.secondaryDisabled);

        return (
            <button className={css(...btnStyle)}>
                {children}
            </button>
        );
    }
}
