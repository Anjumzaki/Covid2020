import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

export default PrimaryInput = ({ onChange, value, label, password }) => {
    
    return(
        <View style={styles.inputView}>
            
            <Text style={styles.label}>{label}</Text>
            
            <TextInput
                style={styles.input}
                value={value}
                onChangeText={onChange}
                secureTextEntry= { password ? true : false }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    inputView: {
        width: 300,
        height: 50,
        borderRadius: 15,
        borderColor: '#ACACAC',
        borderWidth: 3,
        position: 'relative',
        marginBottom: 20,
        backgroundColor: '#ffffff',
    },
    label: {
        position: 'absolute',
        color: '#ACACAC',
        fontWeight: 'bold',
        top: -12,
        left: 20,
        backgroundColor: '#ffffff',
        paddingHorizontal: 5
    },
    input: {
        flex: 1,
        paddingHorizontal: 10
    }
})