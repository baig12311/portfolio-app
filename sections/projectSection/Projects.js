//import liraries
import React, { Component, useCallback, useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ThemeContext } from '../../ThemeProvider';
import createStyles from './ProjectStyle';
import ProjectDetail from '../../data/projectsData';
import ProjectCard from '../../components/ProjectCard';
const Projects = () => {
    const theme=useContext(ThemeContext)
    const styles=createStyles(theme)
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Projects</Text>
            {
                ProjectDetail.map((item, index)=>{
                    return(
                        <ProjectCard key ={index} title={item.name} description={item.description} tools={item.tools} uri={item.image}/>
                    )
                })
            }
        </View>
    );
};
export default Projects;
