//import liraries
import React, { Component, useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import { ThemeContext } from '../../ThemeProvider';
import Animated, {FadeInUp} from 'react-native-reanimated';
import createStyles from './AboutStyle';
import useScrollFadeIn from '../../hooks/useScrollFadeIn'
import useScrollStaggeredItems from '../../hooks/useScrollStaggeredItems'
const About = ({scrollY}) => {
    const theme=useContext(ThemeContext);
    const styles=createStyles(theme)
    const{animatedStyle, onLayout, layoutY}=useScrollFadeIn(scrollY);
    const titleStyle=useScrollStaggeredItems(scrollY, layoutY, 0)
    const descriptionStyle=useScrollStaggeredItems(scrollY, layoutY, 1)
    return (
        <Animated.View style={[styles.container, animatedStyle]} onLayout={onLayout}>
            <Image source={require('../../assets/aboutcartoon.png')} 
            style={styles.image}
            resizeMode='cover'
            />
           <Animated.Text style={[styles.heading, titleStyle]}>
        About Me
      </Animated.Text>
      <Animated.Text style={[styles.bio, descriptionStyle]}>
        I'm a React Native developer with a passion for building beautiful and fast apps.
      </Animated.Text>
            
        </Animated.View>
    );
};
export default About;
