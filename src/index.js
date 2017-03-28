import React, {PropTypes} from 'react';
import {css} from 'aphrodite';
import {styles} from './styles';

const Template = (props) => {
    const {active} = props;
    return (
        <div className={css(
            styles.default,
            active ? styles.red : styles.blue,
            styles.hover,
            styles.responsive)
        } />
    );
};

Template.displayName = 'Template';
Template.propTypes = {
    active: PropTypes.bool
};

export default Template;
