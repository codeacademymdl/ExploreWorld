import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    dimension: {
        width: 160,
        height: 160,
        borderRadius: 10,
        opacity:0.8
    },

    content: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    fontStyle:{
        opacity:1,
        color:"white",
        fontSize:30,
        fontWeight:"bold"

    }
});

