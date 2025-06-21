import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp,
    heightPercentageToDP as hp
 } from "react-native-responsive-screen";
const createStyles=(theme)=>StyleSheet.create({
    container: {
        flex:1,
        //paddingVertical: hp(5),
        backgroundColor: theme.background
    },
    header:{
        flexDirection: 'row',
        //borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: hp(1.5),
        backgroundColor: theme.accent,
        paddingHorizontal:wp(4)
    },
    scrollContainer:{
        paddingHorizontal: wp(4),
        paddingVertical: hp(2),
    },
    textHeader:{
        fontSize: wp(6),
        fontWeight: '600',
        color: 'white',
        fontFamily: 'Sansation-Bold'
    },
    container1:{
        width: wp(70),
        height: wp(70),
        borderRadius: wp(40),
        //borderWidth: 1,
        position: 'absolute',
        top: hp(20),
        left: wp(85),
        backgroundColor: 'grey',
        transform: [{scaleY: 1.3}, {rotate: '-10deg'}],
        zIndex: -1,
        opacity: 0.2

    },
    subContainer1:{
         width: wp(70),
        height: wp(70),
        borderRadius: wp(40),
        //borderWidth: 1,
        position: 'absolute',
        backgroundColor: 'yellow',
        bottom: -90,
         transform: [{scaleY: 1.1}],
         zIndex: -2
        //top: wp(34),
        //left: 20
    }
})
export default createStyles