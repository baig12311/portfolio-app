import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp,
    heightPercentageToDP as hp
 } from 'react-native-responsive-screen';

const createStyles = (theme) =>
  StyleSheet.create({
    container: {
      alignItems: 'center',
      //marginBottom: hp(4),
      borderBottomWidth: 3,
      borderColor: theme.border,
        paddingVertical: hp(3) 
    },
    heading: {
      fontSize: wp(7),
        color: theme.text,
        //fontWeight: '500', 
        fontFamily: 'Sansation-Bold'
    },
    skillCard: {
      paddingVertical: wp(2),
      paddingHorizontal: wp(3),
         flexDirection: 'row',
         alignItems: 'center',
               //borderWidth: 1,

         

    },
    cardWrapper:{
      borderWidth: 1,
      borderColor: theme.border,
      elevation: 3,
      borderRadius: wp(10),
      overflow: 'hidden',
      margin: wp(1)
      

     
    },
    icon: {
      width: wp(12),
      height: wp(12),
      resizeMode: 'contain',
      marginBottom: wp(2),
    },
    label: {
      //fontFamily: 'Poppins-Regular',
      fontSize: wp(5),
      color: theme.background,
      fontFamily: 'Sansation-Italic'
    },
    
    skillContainer:{
      //borderWidth:1,
      flexDirection: 'row',
      flexWrap: 'wrap'

    },
    image:{
      width: wp(6),
      height: wp(6),
      marginRight: wp(1)
    }
  });

export default createStyles;
