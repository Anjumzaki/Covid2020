import React from 'react';
import { View, ImageBackground, StyleSheet, Dimensions } from 'react-native';
import Logo from '../components/Logo';
import { assets } from '../assets';
import { Heading, FullWidthBtn } from '../components';

const windowWidth = Dimensions.get('window').width;

export default Home = () => (
    <View style={styles.container} >
        <ImageBackground source={assets.background} style={styles.image}>
            <View style={styles.subContainer}>
                <Logo />
                <Heading
                    heading="COVID-ALERT"
                    caption="Protect Yourself and Others"
                />
            </View>
            <View style={styles.subContainer}>

                <FullWidthBtn
                    label="Configurations"
                    onPress={() => navigation.navigate('Home')}
                />
                <FullWidthBtn
                    label="Monitoring"
                    onPress={() => navigation.navigate('Home')}
                />
                <FullWidthBtn
                    label="Information"
                    onPress={() => navigation.navigate('Home')}
                />

            </View>
            
        </ImageBackground>

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
        width: windowWidth,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center",
      alignItems: 'center'
    }
})