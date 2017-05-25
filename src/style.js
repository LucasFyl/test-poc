import {StyleSheet} from 'aphrodite';

export default StyleSheet.create({
    outerWrap: {
        width: '100%',
        maxWidth: '80vw',
        height: '100%',
        minHeight: '150vh',
        margin: '0 auto',
        overflow: 'auto',
        position: 'relative'
    },
    userWrap: {
        display: 'inline-block',
        width: '49%',
        height: '100%',
        minHeight: '100vh',
        overflow: 'auto',
        position: 'relative',
        left: 0,
        float: 'left'
    },
    previewWrap: {
        display: 'inline-block',
        width: '50%',
        height: '100%',
        minHeight: '100vh',
        overflow: 'auto',
        position: 'relative',
        right: 0, top: 0,
        borderLeft: '1px solid black'
    },
    wrapper: {
        boxShadow: '0 1px 3px #444',
        fontSize: '1px',
        lineHeight: 1,
        display: 'inline-block',
        position: 'absolute'
    },
    span: {
        position: 'absolute',
        cursor: 'text',
        whiteSpace: 'pre',
        transformOrigin: 'left bottom',
        color: 'transparent',
        background: 'red',
        opacity: '.5'
    }
});
