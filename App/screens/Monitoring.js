import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PrimaryButton } from '../components';
import { colors } from '../constants/theme';

export default Monitoring = () => (
    <View style={styles.container} >
        <View style={styles.subContainer}>
            <Text style={styles.text}>GPS AND BLUETOOTH{'\n'}ACTIVE</Text>
            <Text style={styles.caption}>Thanks for helping us stop spreading {'\n'}CORONA-VIRUS.</Text>
        </View>
        <View style={styles.subContainer}>
            <Text style={styles.text}>SHARE APP</Text>
            <Text style={styles.caption}>Help prevent others by sharing the app {'\n'}with friends and family.</Text>
            <PrimaryButton
                label="SHARE"
            />
        </View>
        <View style={styles.subContainer}>
            <Text style={styles.text}>DONATIONS</Text>
            <Text style={styles.caption}>
                You can make donations of 1 peso to thed esired {'\n'}
                amount, and these will be contributed to {'\n'}
                prevention institutions or families that have {'\n'}
                lost relatives due to the coronavirus.
            </Text>
            <PrimaryButton
                label="DONATE"
            />
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff'
    },
    subContainer: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: colors.light,
        borderBottomWidth: 1
    },
    text: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    caption: {
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})