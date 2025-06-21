//import liraries
import React, { Component, useContext, useState, useEffect} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import * as Font from "expo-font";

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from "react-native-responsive-screen";
import createStyles from './NewStyle';
import Icon from '../components/Icon';
import Intro from '../sections/introSection/Intro';
import About from '../sections/aboutSection/About';
import Skills from '../sections/skillsSection/Skills';
import { ThemeContext } from '../ThemeProvider';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import ToggleSwitch from '../components/ToggleSwitch';
import Projects from '../sections/projectSection/Projects';
const Index = () => {
    const theme = useContext(ThemeContext);
    const styles = createStyles(theme);
    const[fontsLoaded, setFontsLoaded]=useState(false);

    useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
       
          "Sansation-Bold": require("../assets/fonts/Sansation-Bold.ttf"),
        "Sansation-BoldItalic": require("../assets/fonts/Sansation-BoldItalic.ttf"),
        "Sansation-Regular": require("../assets/fonts/Sansation-Regular.ttf"),
         "Sansation-Italic": require("../assets/fonts/Sansation-Italic.ttf"),
        });
      setFontsLoaded(true);
    }
    loadFonts();
  }, []);

   if (!fontsLoaded) return null;
    return (
        <SafeAreaView style={styles.container}>
            <LinearGradient style={styles.header} colors={['#6497b1', '#b3cde0']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
            >
                <Text style={styles.textHeader}>
                   ReactFolio
                </Text>
                <ToggleSwitch/>
                {/* <TouchableOpacity onPress={theme.toggleTheme}>
                    <Icon name={theme.mode === 'light' ? 'dark-mode' : 'light-up'}
                        type={theme.mode === 'light' ? 'MaterialIcons' : 'Entypo'}
                        color={theme.mode === 'light' ? '#1F2937' : 'orange'}
                        size={wp(8)} />


                </TouchableOpacity> */}
            </LinearGradient>
            <View style={styles.container1}>
                  <View style={styles.subContainer1}>
                
            </View>
            </View>
           

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
              
                     <Intro />
              
                 
                     <About />
                
                 
                     <Skills />
                     <Projects/>
                

               
               
                
               

            </ScrollView>
        </SafeAreaView>

    );
};
export default Index;
