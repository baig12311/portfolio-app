import { StyleSheet } from "react-native";
const createStyles=(theme)=>StyleSheet.create({
    container:{
        flex:1, 
        //justifyContent: 'center',
        //alignItems: 'center',
        //backgroundColor: theme.background,
        //backgroundColor: 'Yellow'
    },
    textStyle:{
        fontSize: 30,
        color: theme.text
    },
    button:{
        backgroundColor: theme.button,
        padding: 15,
        borderWidth:2,
        borderColor: 'red',
        borderRadius: 50,
        transform:[{skewX: '20deg'}]
    },
    buttonText:{
        color: theme.background,
        fontSize: 15
    }
})
export default createStyles;