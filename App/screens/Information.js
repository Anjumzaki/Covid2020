import React, { useState } from 'react';
import { View, ImageBackground, StyleSheet, Dimensions, ScrollView } from 'react-native';
import Logo from '../components/Logo';
import { assets } from '../assets';
import { Heading, FullWidthBtn, ModalView } from '../components';

const windowWidth = Dimensions.get('window').width;

export default Information = () => {

    const [isModalVisible, setModalVisible] = useState(false);
    const [ title, setTitle ] = useState('');
    const [ message, setMessage ] = useState('');

    return (
        <ScrollView>
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

                    <ModalView
                        isModalVisible={isModalVisible}
                        onClose={() => setModalVisible(false)}
                        title={title}
                        message={message}
                    />

                    <FullWidthBtn
                        label="Terms and Conditions"
                        onPress={() => {
                            setTitle('Terms and Conditions');
                            setMessage('terms and Conditions will display here.');
                            setModalVisible(true);
                        }}
                        />
                    <FullWidthBtn
                        label="How Does Covid App Work?"
                        onPress={() => {
                            setTitle('How COVID-ALERT App Works');
                            setMessage('How app work will display here.');
                            setModalVisible(true);
                        }}
                        />
                    <FullWidthBtn
                        label="Purpose of Donations?"
                        onPress={() => {
                            setTitle('Donations');
                            setMessage("You can make donations of 1 peso to the desired amount, and these will be contributed to preventation institutions of families that have lost relatives due to the virus-crown.");
                            setModalVisible(true);
                        }}
                        />
                    <FullWidthBtn
                        label="OMS"
                        onPress={() => navigation.navigate('Home')}
                        />
                    <FullWidthBtn
                        label="Contact Us"
                        onPress={() => navigation.navigate('Home')}
                        />
                    <FullWidthBtn
                        label="Rate Us"
                        onPress={() => navigation.navigate('Home')}
                        />

                </View>
                
            </ImageBackground>

        </View>
    </ScrollView>
    )
};

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