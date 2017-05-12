import {StyleSheet} from 'aphrodite';

export default {
    reset: {
        display: 'inline-block',
        margin: '0',
        border: '0',
        padding: '0',
        width: 'auto',
        verticalAlign: 'middle',
        whiteSpace: 'normal',
        lineHeight: 'inherit',
        background: 'none',
        outline: 'none'
    },
    primary: {
        display: 'block',
        width: '200px',
        textAlign: 'center',
        padding: '10px 0',
        lineHeight: '18px',
        fontWeight: '600',
        fontSize: '14px',
        borderRadius: '2px',
        borderWidth: '1px',
        borderStyle: 'solid',
        cursor: 'pointer',
        fontFamily: 'Noto Sans, sans-serif',
        transition: 'all 0.25s ease-out',
        boxShadow: '0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)',
        ':hover': {
            transition: 'all 0.25s ease-out',
            backgroundColor: '#3cca85',
            borderColor: '#3cca85'
        },
        ':active': {
            transition: 'all 0.25s ease-out',
            borderStyle: 'solid',
            borderWidth: '1px',
            borderImageSource: 'linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.06))',
            borderImageSlice: '1',
            boxShadow: '0 0 6px 0 rgba(0, 0, 0, 0.12), 0 4px 8px 0 rgba(0, 0, 0, 0.24)'
        }
    },
    green: {
        background: '#3fd48b',
        color: 'white',
        borderColor: '#3fd48b',
        ':hover': {
            backgroundColor: '#3cca85',
            borderColor: '#3cca85'
        }
    },
    disabled: {
        borderColor: '#d4d4d4',
        backgroundColor: '#d4d4d4',
        cursor: 'no-drop',
        ':hover': {
            backgroundColor: '#d4d4d4',
            borderColor: '#d4d4d4'
        },
        ':active': {
            backgroundColor: '#d4d4d4',
            borderColor: '#d4d4d4',
            boxShadow: '0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)'
        }
    },
    white: {
        backgroundColor: 'white',
        color: '#8c8c8c',
        borderColor: 'white',
        ':hover': {
            backgroundColor: '#f3f3f3',
            borderColor: '#f3f3f3'
        },
        ':active': {
            backgroundColor: '#f3f3f3',
            border: '1px solid #f3f3f3',
            borderImageSource: 'linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.06))',
            borderImageSlice: '1',
            boxShadow: '0 0 6px 0 rgba(0, 0, 0, 0.12), 0 4px 8px 0 rgba(0, 0, 0, 0.24)'
        }
    },
    outline: {
        display: 'block',
        cursor: 'pointer',
        borderRadius: '3px',
        width: '154px',
        textAlign: 'center',
        textDecoration: 'none',
        fontSize: '14px',
        letterSpacing: '.5px',
        background: 'transparent',
        border: '1px solid #f0f0f0',
        margin: '0 auto',
        color: 'white',
        borderColor: 'white',
        transition: 'all 0.25s ease-out',
        ':hover': {
            color: '#162c45',
            backgroundColor: 'white',
            transition: 'all 0.25s ease-out'
        },
        ':active': {
            backgroundColor: 'white',
            color: '#162c45',
            opacity: '0.8'
        }
    },
    outlineDisabled: {
        borderColor: '#8c8c8c',
        color: '#8c8c8c',
        cursor: 'no-drop',
        ':hover': {
            borderColor: '#8c8c8c',
            backgroundColor: 'transparent',
            color: '#8c8c8c'
        },
        ':active': {
            border: '1px solid #8c8c8c'
        }
    },
    secondary: {
        position: 'relative',
        cursor: 'pointer',
        width: '154px',
        borderRadius: '2px',
        padding: '10px 0',
        fontSize: '14px',
        lineHeight: '20px',
        borderStyle: 'solid',
        borderWidth: '1px',
        transition: 'all 0.25s ease-out',
        ':active': {
            borderStyle: 'solid',
            borderWidth: '1px',
            borderImageSource: 'linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.06))',
            borderImageSlice: '1'
        },
        'hover': {
            backgroundColor: '#3cca85'
        }
    },
    icon: {
        marginRight: '8px',
        fontSize: '18px'
    },
    secondaryDisabled: {
        borderColor: '#d4d4d4',
        backgroundColor: '#d4d4d4',
        cursor: 'no-drop',
        ':hover': {
            borderColor: '#d4d4d4',
            backgroundColor: '#d4d4d4'
        },
        ':active': {
            backgroundColor: '#d4d4d4'
        }
    }
};
