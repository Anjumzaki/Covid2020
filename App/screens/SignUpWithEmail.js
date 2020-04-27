import React from 'react'
import {
    View,
    TextInput,
    Text,
    StyleSheet,
    ImageBackground,
    TouchableOpacity,
    KeyboardAvoidingView,
    CheckBox,
    Dimensions,
    ScrollView
} from 'react-native'

import { assets } from '../assets/index';
import PrimaryInput from '../components/PrimaryInput';
import PrimaryButton from '../components/PrimaryButton';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default SignUpWithEmail = ({ navigation }) => {
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
                            />
                        <PrimaryInput
                            label="EMAIL ADDRESS"
                            />
                        <PrimaryInput
                            label="PHONE NUMBER"
                            />
                        <PrimaryInput
                            label="PASSWORD"
                            password={true}
                        />

                            <View style={styles.subContainer_1}>
                                <CheckBox />
                                <Text style={styles.label_1}>I accept the policy and terms</Text>
                            </View>

                        <PrimaryButton
                            label="Sign Up"
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