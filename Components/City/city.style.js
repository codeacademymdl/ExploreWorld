import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    dimension: {
        width: 170,
        height: 160,
        borderRadius: 100,
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

    },
    main:{
        shadowRadius: 5,
        shadowOpacity: 0.6,
        shadowOffset:{
            width:5,
            height:30

        },
    }
});

