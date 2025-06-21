//import liraries
import React, { Component, useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import { ThemeContext } from '../../ThemeProvider';
import Animated, {FadeInUp} from 'react-native-reanimated';
import createStyles from './AboutStyle';
const About = () => {
    const theme=useContext(ThemeContext);
    const styles=createStyles(theme)
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/aboutcartoon.png')} 
            style={styles.image}
            resizeMode='cover'
            />
           <Animated.Text entering={FadeInUp.duration(600)} style={styles.heading}>
        About Me
      </Animated.Text>
      <Animated.Text entering={FadeInUp.delay(600)} style={styles.bio}>
        I'm a React Native developer with a passion for building beautiful and fast apps.
      </Animated.Text>
            
        </View>
    );
};
export default About;
