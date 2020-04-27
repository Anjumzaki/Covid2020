import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    TouchableOpacity,
    KeyboardAvoidingView,
    CheckBox,
    Dimensions
} from 'react-native';

import { assets } from '../assets/index';
import PrimaryInput from '../components/PrimaryInput';
import PrimaryButton from '../components/PrimaryButton';
import Logo from '../components/Logo';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default SignIn = ({ navigation }) => {
    return(
        <KeyboardAvoidingView style={{flex: 1}} behavior={Platform.OS == "ios" ? "padding" : "position"}>
            <View style={styles.container}>
                <ImageBackground source={assets.background} style={styles.image}>
                    <View style={styles.subContainer}>
                        <Logo />
                    </View>
                    <View style={styles.subContainer}>

                        <PrimaryInput
                            label="EMAIL ADDRESS"
                        />
                        <PrimaryInput
                            label="PASSWORD"
                            password={true}
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
                            onPress={() => navigation.navigate('Home')}
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
    )
}

const styles = StyleSheet.create({
    container: {
      width: windowWidth,
      height: windowHeight
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