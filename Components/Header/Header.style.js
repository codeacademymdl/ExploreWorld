import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    main: {

        justifyContent: "center",
        flexDirection: "row",
        shadowRadius: 30,
        shadowOpacity: 1.0,
        shadowOffset:{
            width:5,
            height:10

        },
        borderWidth:10,
        borderColor:"white",
        borderTopWidth:0,
        borderLeftWidth:0,
        borderRightWidth:0,
        height: 40,     
        backgroundColor: "white"
    },
    content: {
        fontSize: 20,
    }
});

