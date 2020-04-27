import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { colors } from '../constants/theme';

export default Heading = ({heading, caption, color}) => (
    <>
        <Text style={styles.text}>{heading}</Text>
        <Text style={styles.caption}>{caption}</Text>
    </>
);

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    caption: {
        fontSize: 15,
        fontWeight: 'bold'
    }
})