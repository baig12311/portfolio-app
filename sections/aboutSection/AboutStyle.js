import { StyleSheet } from "react-native";
//import Colors from "../constants/colors";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
const createStyles=(theme)=>StyleSheet.create({
    container:{
        alignItems: 'center',
        borderBottomWidth: 3,
      borderColor: theme.border,  
        //marginBottom: hp(4),
        paddingVertical: hp(3)
    },
    heading:{
        fontSize: wp(7),
        color: theme.text,
         fontFamily: 'Sansation-Bold'
        //fontWeight: '500'
    },
    bio:{
        fontSize: wp(4.5),
        color: theme.subText,
        textAlign: 'center',
         fontFamily: 'Sansation-Regular'

},
image:{
    width: wp(70),
    height: hp(30),
    //borderWidth: 1
}


})
export default createStyles;