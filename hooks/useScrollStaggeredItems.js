//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useWindowDimensions } from 'react-native';
import { interpolate, useAnimatedStyle } from 'react-native-reanimated';
// create a component
const useScrollStaggeredItems = (scrollY, layoutY, index, delay=100) => {
    const {height: windowHeight}=useWindowDimensions(); 
    return useAnimatedStyle(()=>{
        const start=layoutY.value-windowHeight+index*delay;
        const end=layoutY.value+index*delay
        const opacity=interpolate(scrollY.value, [start, end], [0, 1])
        const translateY=interpolate(scrollY.value, [start, end], [20, 0])
        return{
            opacity, 
            transform:[{translateY}]
        }
    })
};
export default useScrollStaggeredItems;
