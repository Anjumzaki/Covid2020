import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default Contact = () => (
    <View style={styles.container} >
        <Text>Contact</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff'
    }
})