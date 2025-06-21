//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import Icon from './Icon';
import { useContext } from 'react';
import { ThemeContext } from '../ThemeProvider';
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
const ToggleSwitch = () => {
    const theme = useContext(ThemeContext);
    const progress = useSharedValue(0);
    const [isOnDark, setIsOnDark] = useState(false);
    const leftKnob = wp(-1)
    const rightKnob = wp(14) - wp(7)
    const animatedStyleToggle = useAnimatedStyle(() => {
        return {
            left: interpolate(progress.value, [0, 1], [leftKnob, rightKnob])
        }
    })
    const animatedStyleIcon = useAnimatedStyle(() => {
        return {
            left: interpolate(progress.value, [0, 1], [25, 0])
        }
    })
    const handleSwitch = () => {
        const newValue = progress.value === 0 ? 1 : 0;
        theme.toggleTheme();
        progress.value = withTiming(newValue, { duration: 250 });
        setIsOnDark(newValue === 1);
    }
    return (
        <TouchableOpacity style={[styles.container, { backgroundColor: isOnDark ? '#3D8361' : '#C1F2B0', borderColor: isOnDark ? '#C1F2B0' : '#3D8361' }]} onPress={handleSwitch}>
            <Animated.View style={[styles.child, animatedStyleToggle, { backgroundColor: isOnDark ? '#C1F2B0' : '#3D8361' }]} />
            <Animated.View style={[styles.iconContainer, animatedStyleIcon]}>
                <Icon name={isOnDark ? 'light-up' : 'dark-mode'}
                    type={isOnDark ? 'Entypo' : 'MaterialIcons'}
                    color={isOnDark ? 'orange' : '#111827'}
                    size={wp(5)} />
            </Animated.View>
        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    container: {
        width: wp(14),
        height: hp(4),
        borderWidth: 1,
        position: 'relative',
        borderRadius: wp(5),
    },
    child: {
        position: 'absolute',
        width: wp(8),
        height: wp(8),
        borderRadius: wp(4),
        backgroundColor: '#b4b4b4',
        //bottom: 0,
        top: -1,
    },
    iconContainer: {
        position: 'absolute',
        height: '100%',
        width: wp(7),
        justifyContent: 'center',
        alignItems: 'center',
    }
});
export default ToggleSwitch;
