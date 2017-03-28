'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.styles = undefined;

var _aphrodite = require('aphrodite');

var styles = _aphrodite.StyleSheet.create({
    default: {
        width: 100,
        height: 100
    },
    red: {
        backgroundColor: 'crimson'
    },
    blue: {
        backgroundColor: 'aqua'
    },
    hover: {
        ':hover': {
            backgroundColor: 'papayawhip'
        }
    },
    responsive: {
        '@media (max-width: 600px)': {
            backgroundColor: 'aquamarine'
        }
    }
});

exports.styles = styles;