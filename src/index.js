import React, {Component, PropTypes} from 'react';

class Template extends Component{
    static displayName = 'Template';
    static propTypes = {};
    constructor(props){
        super(props);
    }
    render(){
        return <div>{'Template Component'}</div>;
    }
}

export default Template;
