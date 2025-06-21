//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, 
    heightPercentageToDP as hp } from 'react-native-responsive-screen';
const ToolsCard = ({tooltitle}) => {
    return (
        <View style={styles.container}>
            <Text>{tooltitle}</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
       borderWidth: 1,
       width: wp(10),
       height: wp(10),
       borderRadius: wp(5),
    },
});
export default ToolsCard;
