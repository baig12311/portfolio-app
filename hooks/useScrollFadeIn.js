//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useWindowDimensions } from 'react-native';
import Animated, {interpolate, useAnimatedStyle, useSharedValue} from 'react-native-reanimated';
const useScrollFadeIn = (scrollY) => {
    const layoutY=useSharedValue(0)
    const {height: windowHeight}=useWindowDimensions()
    const onLayout=(e)=>{
        layoutY.value=e.nativeEvent.layout.y;
    }
    const animatedStyle=useAnimatedStyle(()=>{
        const start=layoutY.value-windowHeight
        const end=layoutY.value;
        const opacity=interpolate(scrollY.value, [start, end], [0, 1])
        const translateY=interpolate(scrollY.value, [start, end], [30, 0])
        return{
            opacity,
            transform:[{translateY}]
        }
    })
    return {animatedStyle, onLayout, layoutY}
};
export default useScrollFadeIn;
