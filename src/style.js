import {styled} from 'styletron-react';

const StyledTemplate = styled('div', (props) => ({
    backgroundColor: props.active ? 'blue' : 'red',
    height: '50px',
    width: '50px'
}));

export {StyledTemplate};