//import liraries
import React, { Component, useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ThemeContext } from '../../ThemeProvider';
import Animated, {FadeIn, FadeInLeft} from 'react-native-reanimated';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import createStyles from './IntroStyle';
import Icon from '../../components/Icon';
import useScrollFadeIn from '../../hooks/useScrollFadeIn'
import useScrollStaggeredItems from '../../hooks/useScrollStaggeredItems'
const Intro = ({scrollY}) => {
    const theme=useContext(ThemeContext);
    const styles=createStyles(theme)
    const{animatedStyle, onLayout, layoutY}=useScrollFadeIn(scrollY);
    const introStyle=useScrollStaggeredItems(scrollY, layoutY, 0)
     const imageStyle=useScrollStaggeredItems(scrollY, layoutY, 1)
      const nameStyle=useScrollStaggeredItems(scrollY, layoutY, 2)
       const titleStyle=useScrollStaggeredItems(scrollY, layoutY, 3)
    return (
        <Animated.View style={[styles.container, animatedStyle]} onLayout={onLayout}>

             <Animated.Text style={[styles.name, introStyle]}>
                MySelf
            </Animated.Text>
            <Animated.Image
            source={require('../../assets/dp.png')} 
            style={[styles.profilePic, imageStyle]}
            resizeMode='contain'
            />
            <Animated.Text style={[styles.name, nameStyle]}>
                Shaheer Baig
            </Animated.Text>
             <Animated.Text style={[styles.title, titleStyle]}>
                React Native Developer
            </Animated.Text>
            
        </Animated.View>
    );
};
export default Intro;
