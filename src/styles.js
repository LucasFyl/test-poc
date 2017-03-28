import {StyleSheet} from 'aphrodite';

const styles = StyleSheet.create({
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

export {styles};
