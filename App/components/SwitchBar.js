import React from 'react';
import { View, Text, StyleSheet, Switch, Dimensions } from 'react-native';
import { colors } from '../constants/theme';

const Width = Dimensions.get('window').width;

export default SwitchBar = ({text, isEnabled}) => (
        <View style={styles.container}>
            <Text style={styles.text}>{text}</Text>
            <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isEnabled ? colors.primary : colors.light}
                ios_backgroundColor="#3e3e3e"
                value={isEnabled}
            />
        </View>
);

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: Width,
        paddingHorizontal: 15,
        paddingVertical: 5,
        backgroundColor: '#ffffff'
    },
    text: {
        fontWeight: 'bold'
    }
})