import { StyleSheet } from "react-native";
//import Colors from "../constants/colors";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
const createStyles=(theme)=>StyleSheet.create({
    container:{
         borderBottomWidth: 3,
      borderColor: theme.border, 
        alignItems: 'center',
        //marginBottom: hp(4),
          paddingVertical: hp(3)
        //padding: wp(3)
    },
    heading:{
        fontSize: wp(7),
        color: theme.text,
        //fontWeight: '500',
         fontFamily: 'Sansation-Bold'
    },
   


})
export default createStyles;