import React, { useContext, useMemo } from 'react';
import { View, Text, Image } from 'react-native';
import Animated from 'react-native-reanimated';
import { ThemeContext } from '../../ThemeProvider';
import createStyles from './SkillsStyle';
import { LinearGradient } from 'expo-linear-gradient';
import useScrollFadeIn from '../../hooks/useScrollFadeIn';
import useScrollStaggeredItem from '../../hooks/useScrollStaggeredItems';

const skillsData = [
  { name: 'React Native', icon: require('../../assets/reactLogo.png') },
  { name: 'JavaScript', icon: require('../../assets/javascript.png') },
  { name: 'Firebase', icon: require('../../assets/firebase.png') },
  { name: 'Expo', icon: require('../../assets/reactLogo.png') },
];

const Skills = ({ scrollY }) => {
  const theme = useContext(ThemeContext);
  const styles = createStyles(theme);

  const { animatedStyle, layoutY, onLayout } = useScrollFadeIn(scrollY);

  // ✅ Compute all item animations at once (outside of render loop)
  const itemAnimations = useMemo(() => {
    return skillsData.map((_, index) =>
      useScrollStaggeredItem(scrollY, layoutY, index)
    );
  }, [scrollY, layoutY]);

  return (
    <Animated.View onLayout={onLayout} style={[styles.container, animatedStyle]}>
      <Text style={styles.heading}>Skills</Text>
      <View style={styles.skillContainer}>
        {skillsData.map((item, index) => (
          <Animated.View key={index} style={[styles.cardWrapper, itemAnimations[index]]}>
            <LinearGradient
              colors={['#6497b1', '#b3cde0']}
              style={styles.skillCard}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
            >
              <Image source={item.icon} style={styles.image} resizeMode="contain" />
              <Text style={styles.label}>{item.name}</Text>
            </LinearGradient>
          </Animated.View>
        ))}
      </View>
    </Animated.View>
  );
};

export default Skills;
