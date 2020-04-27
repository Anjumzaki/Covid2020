import React from 'react'
import { View, Image, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native'
import { assets } from '../assets/index';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconCircle from 'react-native-vector-icons/Entypo';
import { Heading, Logo } from '../components';

export default SignUp = ({ navigation }) => {
    return(
        <View style={styles.container}>
            <ImageBackground source={assets.background} style={styles.image}>
                <View style={styles.subContainer}>
                    <Logo/>
                </View>
                <View style={styles.subContainer}>
                    <Heading
                        heading="SIGN UP"
                        caption="It's easier to sign up now"
                    />

                    <TouchableOpacity style={styles.primaryBtn}>
                        <Icon name="facebook" size={20} color="#fff" />
                        <Text style={styles.primaryBtnText}>Continue With Facebook</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.secondaryBtn} onPress={() => navigation.navigate('SignUpWithEmail')}>
                        <Text style={styles.secondaryBtnText}>I'll use email or password</Text>
                    </TouchableOpacity>

                    <View style={styles.iconView}>
                        <TouchableOpacity>
                            <IconCircle name="twitter-with-circle" size={30} color="#55ABEE" style={styles.iconBtn} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Icon name="google-plus-official" size={33} color="#CD2F25"  style={styles.iconBtn}/>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <IconCircle name="linkedin-with-circle" size={30} color="#0974B3"  style={styles.iconBtn}/>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.iconView}>
                        <Text style={styles.caption}>Already have account? </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                            <Text style={styles.login}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column"
    },
    subContainer: {
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
    caption: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#C5C5C5'
    },
    primaryBtn: {
        backgroundColor: '#535AFF',
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 30,
        flexDirection: 'row',
        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 0,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        marginTop: 12
    },
    primaryBtnText: {
        color: '#ffffff',
        fontWeight: 'bold',
        marginLeft: 10
    },
    secondaryBtn: {
        backgroundColor: '#ffffff',
        borderColor: '#ACACAC',
        borderWidth: 3,
        paddingVertical: 5,
        paddingHorizontal: 30,
        borderRadius: 30,
        marginTop: 12
    },
    secondaryBtnText: {
        color: '#ACACAC',
        fontWeight: 'bold'
    },
    iconView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15
    },
    iconBtn: {
        marginHorizontal: 5
    },
    login: {
        color: '#535AFF',
        textDecorationLine: 'underline',
        fontWeight: 'bold'
    }
  });