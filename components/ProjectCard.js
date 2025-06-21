//import liraries
import React, { Component, useContext, useEffect } from 'react';
import { View, Text, StyleSheet , Image} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { widthPercentageToDP as wp, 
    heightPercentageToDP as hp
 } from 'react-native-responsive-screen';
 import { ThemeContext } from '../ThemeProvider';
 import Icon from './Icon'
import Animated, { withSequence, withRepeat,runOnUI, useSharedValue, withSpring, useAnimatedStyle} from 'react-native-reanimated';
 
const ProjectCard = ({title, description, tools, uri}) => {
    const theme=useContext(ThemeContext);
    const styles=createStyles(theme)
    const scale=useSharedValue(1)
    const animatedBadge=useAnimatedStyle(()=>{

        return{
        transform:[{scale:scale.value}]

        }
    })
   useEffect(() => {
  runOnUI(() => {
    scale.value = withRepeat(
      withSequence(
        withSpring(1.01, { damping: 2 }),
        withSpring(1, { damping: 2 })
      ),
      -1,
      true
    );
  })();
}, []);
    return (
        <View style={styles.productCardWrapper}>
           
                                                            <LinearGradient style={styles.container} colors={['#6497b1', '#b3cde0']} 
                                                
                                                          start={{x:0, y:0}}
                                                          end={{x:1, y:1}}>
                                                            <Image source={uri} style={styles.image} 
                                                            //resizeMode='stretch'
                                                            />
                                                              <View style={styles.new}/>
                

                                                           
        
            <Text style={styles.title}>
                {title}
            </Text>
             <Text style={styles.description}>
                {description}
            </Text>
            <Icon name='tools' type='Entypo' color='black' size={wp(7)}/>
            <View style={styles.toolsContainer}>
                
            {
                tools.map((item, index)=>{
                    return(
                        <Animated.View style={[styles.toolTextView, animatedBadge]} key={index}>
                             <Text style={styles.toolText}>{item.title}</Text>
                        </Animated.View>
                       

                       
                    )
                })
            }
             </View>
       </LinearGradient>
        </View>
             
      
        
    );
};

// define your styles
const createStyles=(theme)=> StyleSheet.create({
    productCardWrapper:{
        borderRadius: wp(3),
        margin: wp(3),
        width: wp(90),
       
        //borderWidth:1,
        
        position: 'relative'
        //elevation: 3,
    },

    container: {
        padding: wp(3),
        //overflow: 'hidden',
        borderRadius: wp(2),
        alignItems: 'center',
        
        
    },
    new:{
         width: wp(90),
         borderRadius: wp(2),
         opacity: 0.5,
         //borderWidth:1,
         position: 'absolute',
         height: '100%',
         //top: 10,
         backgroundColor: 'transparent',
         transform: [{rotate: '-5deg'}],
         backgroundColor: '#b3cde0',
         zIndex:-1
    },
    title: {
        color: theme.text,
        fontSize: wp(6),
        fontFamily: 'Sansation-Bold',
    },
    description:{
        color: theme.subText,
        fontSize: wp(4),
        fontFamily: 'Sansation-Regular',
        marginBottom: hp(2)
    },
    toolTextView:{
        //borderWidth: 1,
        paddingVertical: wp(2),
        borderRadius: wp(15),
        margin: wp(1),
        backgroundColor: '#C1F2B0',
        paddingHorizontal: wp(3),
        //transform: [{rotate: withSequence('360deg', 1, false)}]
        elevation: 5
    },
    toolText: {
        fontSize: wp(3.5),
        color: theme.subText,
         fontFamily: 'Sansation-Italic'
    },
    toolsContainer:{
        //borderWidth: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center'
        //justifyContent: 'space-between'
    },
    image: {
        width: wp(40),
        height: wp(40),
        borderRadius: wp(20),
        //alignSelf: 'center',
        marginBottom: hp(1)
    }
});

//make this component available to the app
export default ProjectCard;
