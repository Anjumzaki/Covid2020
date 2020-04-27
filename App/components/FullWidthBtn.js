import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default FullWidthBtn = ({onPress, label}) => {

    return(
        <TouchableOpacity style={styles.primaryBtn} onPress={onPress}>
            <Text style={styles.primaryBtnText}>{label}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    primaryBtn: {
        backgroundColor: '#535AFF',
        paddingVertical: 8,
        width: '70%',
        borderRadius: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 0,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginTop: 12,
        marginBottom: 10,
        alignItems: 'center'
    },
    primaryBtnText: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 20
    }
})