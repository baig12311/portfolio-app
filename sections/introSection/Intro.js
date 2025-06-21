//import liraries
import React, { Component, useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ThemeContext } from '../../ThemeProvider';
import Animated, {FadeIn, FadeInLeft} from 'react-native-reanimated';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import createStyles from './IntroStyle';
import Icon from '../../components/Icon';
const Intro = () => {
    const theme=useContext(ThemeContext);
    const styles=createStyles(theme)
    return (
        <View style={styles.container}>

             <Animated.Text entering={FadeInLeft.duration(600)} style={styles.name}>
                MySelf
            </Animated.Text>
            <Animated.Image entering={FadeIn.delay(400)}
            source={require('../../assets/dp.png')} 
            style={styles.profilePic}
            resizeMode='contain'
            />
            <Animated.Text entering={FadeInLeft.duration(600)} style={styles.name}>
                Shaheer Baig
            </Animated.Text>
             <Animated.Text entering={FadeIn.delay(500)} style={styles.title}>
                React Native Developer
            </Animated.Text>
            
        </View>
    );
};
export default Intro;
