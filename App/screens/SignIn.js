import React, {useState, useEffect} from 'react'
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    TouchableOpacity,
    KeyboardAvoidingView,
    CheckBox,
    Dimensions,
    Alert
} from 'react-native';

import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-community/async-storage';

import { assets } from '../assets';
import { PrimaryInput, PrimaryButton, Logo, Activity } from '../components';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default SignIn = ({ navigation }) => {

    const [ Email, setEmail ] = useState('');
    const [ Password, setPassword ] = useState('');
    const [ isLoading, setLoading ] = useState(false);

    //Custom Functions
    const onSignIn = () => {
        if(!Email || !Password) return null;

        setLoading(true);

        auth()
        .signInWithEmailAndPassword( Email, Password )
        .then(async (res) => {
            const { uid } = res.user;
            try {
                //Save uid to async
                await AsyncStorage.setItem('@uid', uid);
                navigation.navigate('Home');
              } catch (e) {
                onError(
                    "Error",
                    "User ID can\'t be saved!"
                )
              }
            
        })
        .catch(error => {
            if (error.code === 'auth/user-not-found') {
                  onError(
                    "User Not Found",
                    "Email address doesn\'t exist!"
                  );
            }

            else if( error.code === 'auth/wrong-password'){
                onError(
                    "Incorrect Password",
                    "Your provided password is incorrect!"
                );
                setPassword('');
            }

            else {
                onError(
                    "Error",
                    error.code
                );
            }
            
        });

        setLoading(false)
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

        if(isLoading) return <Activity />

        if (!isLoading) return(
            <KeyboardAvoidingView style={{flex: 1}} behavior={Platform.OS == "ios" ? "padding" : "position"}>
                <View style={styles.container}>
                    <ImageBackground source={assets.background} style={styles.image}>
                        <View style={styles.subContainer}>
                            <Logo />
                        </View>
                        <View style={styles.subContainer}>

                            <PrimaryInput
                                label="EMAIL ADDRESS"
                                value={Email}
                                onChange={e => setEmail(e)}
                            />
                            <PrimaryInput
                                label="PASSWORD"
                                password={true}
                                value={Password}
                                onChange={ e => setPassword(e) }
                            />

                            <View style={styles.subContainer_1}>
                                <View style={styles.subContainer_2}>
                                    <CheckBox />
                                    <Text style={styles.label_1}>Remember me</Text>
                                </View>
                                <View style={styles.subContainer_2}>
                                    <Text style={styles.label_1}>Forgot Password?</Text>
                                </View>
                            </View>

                            <PrimaryButton
                                label="Sign In"
                                onPress={onSignIn}
                            />

                            <View style={styles.iconView}>
                                <Text style={styles.caption}>Don't have account? </Text>
                                <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                                    <Text style={styles.login}>SignUp</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        
                    </ImageBackground>
                </View>
            </KeyboardAvoidingView>
        );
    }

const styles = StyleSheet.create({
    container: {
      width: windowWidth,
      height: windowHeight,
      backgroundColor: '#ffffff',
      paddingBottom: 10
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
        paddingBottom: 10,
        width: 300,
        justifyContent: 'space-between'
    },
    label_1: {
        color: '#ACACAC',
        fontWeight: 'bold'
    },
    subContainer_2: {
        flexDirection: 'row',
        alignItems: 'center'
    }
  });