import React, { useContext } from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import Animated, { FadeInUp } from 'react-native-reanimated';
import { ThemeContext } from '../../ThemeProvider';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import createStyles from './SkillsStyle';
import { LinearGradient } from 'expo-linear-gradient';
const skillsData = [
  { name: 'React Native', icon: require('../../assets/reactLogo.png')},
  { name: 'JavaScript', icon: require('../../assets/javascript.png')},
  { name: 'Firebase', icon: require('../../assets/firebase.png')},
  { name: 'Expo', icon: require('../../assets/reactLogo.png')},
];

const Skills = () => {
  const theme = useContext(ThemeContext);
  const styles = createStyles(theme);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Skills</Text>
      <View style={styles.skillContainer}>
{
        skillsData.map((item, index)=>{
            return(

                <Animated.View key={index} entering={FadeInUp.duration(600).delay(index*200)} style={styles.cardWrapper}>
                                                  <LinearGradient colors={['#6497b1', '#b3cde0']} 
                                                  style={styles.skillCard}
                                                  start={{x:0, y:0}}
                                                  end={{x:1, y:1}}>
                                                    <Image source={item.icon} style={styles.image} resizeMode='contain'/>
                                      <Text style={styles.label}>{item.name}</Text>
                                                                        </LinearGradient>


                </Animated.View>

            )
        })
      }

      </View>
      
     

      
    </View>
  );
};

export default Skills;
