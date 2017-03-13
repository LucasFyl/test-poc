import React, {PropTypes} from 'react';
import Styletron from 'styletron';
import {StyletronProvider} from 'styletron-react';
import {StyledTemplate} from './style';

const styletron = new Styletron();

const Template = (props) => {
    const {active} = props;
    return (
        <StyletronProvider styletron={styletron}>
            <StyledTemplate active={active} />
        </StyletronProvider>
    );
};

Template.displayName = 'Template';
Template.propTypes = {
    active: PropTypes.bool
};

export default Template;
