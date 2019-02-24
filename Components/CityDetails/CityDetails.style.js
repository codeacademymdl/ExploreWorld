import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    main: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: "white",
        justifyContent: "center",

    },
    heading1: {
        fontSize: 15,
        color: "blue",
        marginLeft: 10
    },
    heading2: {
        fontSize: 20,
        color: "black",
        paddingTop: 10,
        marginLeft: 10
    },
    divide: {

        flex: 1,
        marginTop: 20,
        // backgroundColor: "white",  
        // borderBottomColor: 'grey',
        // borderBottomWidth: 6,
        justifyContent: 'flex-end',

    },
    image: {
        width: '95%',
        height: 200,
        borderRadius: 10,

    },
    imgView: {
        flex: 1,
        shadowRadius: 10,
        shadowOpacity: 1,
        shadowOffset: {
            width: 5,
            height: 20
        },
        paddingTop: 30,

        alignItems: "center",
        shadowColor: 'grey'
    },
    box: {
        borderBottomWidth: 2,
        borderBottomColor: '#f5f5f6',
        // borderTopWidth:1,
        marginTop: 10,
    },
    button: {

       
        backgroundColor: '#f5f5f6',
        padding: 10,
        height:40,
        width:80,
        borderRadius:30,
        alignItems: 'center',

    },

    tags:{
        flex: 1,
        flexDirection: 'row',
        justifyContent:"space-evenly",
        marginBottom:10,
        
      
        

    }


});

