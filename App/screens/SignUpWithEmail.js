import React, {useState} from 'react'
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    KeyboardAvoidingView,
    CheckBox,
    Dimensions,
    ScrollView,
    Alert
} from 'react-native';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import AsyncStorage from '@react-native-community/async-storage';

import { assets } from '../assets/index';
import PrimaryInput from '../components/PrimaryInput';
import PrimaryButton from '../components/PrimaryButton';

const windowWidth = Dimensions.get('window').width;

export default SignUpWithEmail = ({ navigation }) => {

    //States
    const [ Username, setUsername ] = useState('');
    const [ Email, setEmail ] = useState('');
    const [ PhoneNo, setPhoneNo ] = useState('');
    const [ Password, setPassword ] = useState('');
    const [ Agreement, setAgreement ] = useState(false);

    //Custom Functions
    const onSignUp = () => {

        auth()
        .createUserWithEmailAndPassword(Email, Password)
        .then(async (res) => {
            const { uid } = res.user;
            
            try {
                //Save uid to async
                await AsyncStorage.setItem('@UID', res.user.uid);

                //Database
                database()
                .ref(`users/${uid}`)
                .set({
                    Username,
                    PhoneNo,
                    Agreement
                })
                .then(() => console.log('Data set.'))
                .catch( e => console.log(e));

                resetForm();
                navigation.navigate('Home');
              } catch (e) {
                onError(
                    'Error',
                    'Something went wrong!'
                )
              }
            
        })
        .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
                  onError(
                    "User Exist",
                    "That email address is already in use!"
                  );
            }

            if (error.code === 'auth/invalid-email') {
                onError(
                    "Invalid Email",
                    "That email address is invalid!"
                )
            }

            console.error(error);
        });
    }

    const resetForm = () => {
        setUsername('');
        setEmail('');
        setPhoneNo('');
        setPassword('');
    }

    const onError = (title, desc) => {
        Alert.alert(
            title,
            desc,
            [
              { text: "OK" }
            ],
            { cancelable: false }
          );
    }

    return(
        
        <KeyboardAvoidingView style={{flex: 1}} behavior={Platform.OS == "ios" ? "padding" : "height"}>
            <ScrollView>
            <View style={styles.container}>
                <ImageBackground source={assets.background} style={styles.image}>
                    <View style={styles.subContainer}>
                        <View style={styles.circle}>
                            <Text style={styles.logo}>LOGO</Text>
                        </View>
                    </View>
                    <View style={styles.subContainer}>

                        <PrimaryInput
                            label="USERNAME"
                            value={ Username }
                            onChange= {(e) => setUsername(e)}
                            />
                        <PrimaryInput
                            label="EMAIL ADDRESS"
                            value={ Email }
                            onChange= {(e) => setEmail(e)}
                            />
                        <PrimaryInput
                            label="PHONE NUMBER"
                            value={ PhoneNo }
                            onChange= {(e) => setPhoneNo(e)}
                            />
                        <PrimaryInput
                            label="PASSWORD"
                            password={true}
                            value={ Password }
                            onChange= {(e) => setPassword(e)}
                        />

                            <View style={styles.subContainer_1}>
                                <CheckBox
                                    value={Agreement}
                                    onValueChange={() => setAgreement(true)}
                                />
                                <Text style={styles.label_1}>I accept the policy and terms</Text>
                            </View>

                        <PrimaryButton
                            label="Sign Up"
                            onPress={onSignUp}
                        />

                    </View>
                    
                </ImageBackground>
            </View>
</ScrollView>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        width: windowWidth,
        backgroundColor: '#ffffff'
    },
    subContainer: {
        width: windowWidth,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20
    },
    image: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center",
      alignItems: 'center'
    },
    logo: {
      color: '#ffffff',
      fontSize: 30,
      fontWeight: "bold"
    },
    circle: {
        width: 180,
        height: 180,
        borderRadius: 90,
        backgroundColor: '#535AFF',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '20%'
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    caption: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#C5C5C5'
    },
    iconView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15
    },
    login: {
        color: '#535AFF',
        textDecorationLine: 'underline',
        fontWeight: 'bold'
    },
    subContainer_1: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 10,
        width: 300
    },
    label_1: {
        color: '#ACACAC',
        fontWeight: 'bold'
    }
  });