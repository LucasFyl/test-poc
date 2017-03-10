'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.StyledTemplate = undefined;

var _styletronReact = require('styletron-react');

var StyledTemplate = (0, _styletronReact.styled)('div', function (props) {
    return {
        backgroundColor: props.active ? 'blue' : 'red',
        height: '50px',
        width: '50px'
    };
});

exports.StyledTemplate = StyledTemplate;