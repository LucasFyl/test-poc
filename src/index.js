import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {css} from 'aphrodite';
import style from './style';

class TemplateComponent extends Component{
    static displayName = 'TemplateComponent';

    static propTypes = {
        active: PropTypes.bool
    };

    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        const {active} = this.props;
        return (
            <div className={css(
            style.default,
            active ? style.red : style.blue,
            style.hover,
            style.responsive)
        } />
        );
    }
}

const Template = (props) => {
    const {active} = props;
    return (
        <div className={css(
            style.default,
            active ? style.red : style.blue,
            style.hover,
            style.responsive)
        } />
    );
};

Template.displayName = 'Template';
Template.propTypes = {
    active: PropTypes.bool
};

export default Template;
