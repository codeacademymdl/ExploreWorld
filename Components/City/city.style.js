import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    dimension: {
        width: 175,
        height: 200,
        borderRadius: 100,
        opacity:0.75
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
        fontSize:25,
        fontWeight:"bold"

    },
    date:{
        opacity:1,
        color:"white",
        fontSize:15,
        fontWeight:"bold",
        fontStyle:"italic"

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

