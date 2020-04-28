import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { colors } from '../constants/theme';
import { PrimaryButton, SwitchBar, QuestionBox } from '../components';
import { CheckBox } from 'react-native-elements';
import auth from '@react-native-firebase/auth';


const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const onSignOut = () => {
    auth()
    .signOut()
    .then(() => console.log('User signed out!'));
}

export default Configurations = () => (
    <ScrollView>

    <View style={styles.container} >
        <View style={styles.subContainer}>
            <SwitchBar
                isEnabled={true}
                text='Activate Monitoring Track Button GPS'
                />
            <SwitchBar
                isEnabled={true}
                text='Bluetooth'
                />
        </View>
        <View style={styles.subContainer}>
            <Text style={styles.heading}>ANSWER US THESE</Text>
            <View style={styles.formView}>
                
            <Text style={styles.text}>Have you been tested positive for Virus?</Text>
            <View style={styles.checkBoxContainer} >
                <CheckBox
                    title='YES'
                    checkedIcon='circle'
                    uncheckedIcon='circle-o'
                    checked={true}
                    wrapperStyle={{
                        flexDirection: 'column-reverse',
                    }}
                    containerStyle={{
                        backgroundColor: '#f5f5f5',
                        borderWidth: 0
                    }}
                    textStyle={styles.text}
                    checkedColor={colors.danger}
                    />
                <CheckBox
                    title='NO'
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    checked={false}
                    wrapperStyle={{
                        flexDirection: 'column-reverse',
                    }}
                    containerStyle={{
                        backgroundColor: '#f5f5f5',
                        borderWidth: 0
                    }}
                    textStyle={styles.text}
                    checkedColor={colors.danger}
                    />
            </View>

            {/* Extras */}

            <Text style={styles.text}>

                At this moment, are you on quarantine{'\n'}
                from being exposed with people tested{'\n'}
                positive with corona-virus
            </Text>
            <View style={styles.checkBoxContainer} >
                <CheckBox
                    title='YES'
                    checkedIcon='circle'
                    uncheckedIcon='circle-o'
                    checked={true}
                    wrapperStyle={{
                        flexDirection: 'column-reverse',
                    }}
                    containerStyle={{
                        backgroundColor: '#f5f5f5',
                        borderWidth: 0
                    }}
                    textStyle={styles.text}
                    checkedColor={colors.danger}
                    />
                <CheckBox
                    title='NO'
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    checked={false}
                    wrapperStyle={{
                        flexDirection: 'column-reverse',
                    }}
                    containerStyle={{
                        backgroundColor: '#f5f5f5',
                        borderWidth: 0
                    }}
                    textStyle={styles.text}
                    checkedColor={colors.danger}
                    />
            </View>

            <Text style={styles.text}>Have you been close to a person with corona</Text>
            <View style={styles.checkBoxContainer} >
                <CheckBox
                    title='YES'
                    checkedIcon='circle'
                    uncheckedIcon='circle-o'
                    checked={true}
                    wrapperStyle={{
                        flexDirection: 'column-reverse',
                    }}
                    containerStyle={{
                        backgroundColor: '#f5f5f5',
                        borderWidth: 0
                    }}
                    textStyle={styles.text}
                    checkedColor={colors.danger}
                    />
                <CheckBox
                    title='NO'
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    checked={false}
                    wrapperStyle={{
                        flexDirection: 'column-reverse',
                    }}
                    containerStyle={{
                        backgroundColor: '#f5f5f5',
                        borderWidth: 0
                    }}
                    textStyle={styles.text}
                    checkedColor={colors.danger}
                    />
            </View>

            {/* Extras End */}

            </View>
        </View>
        <Text style={styles.heading}>Delete All Personal Data Information</Text>
        <PrimaryButton
            label="Delete"
            onPress={onSignOut}
        />
    </View>
    </ScrollView>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#ffffff',
        height: Height
    },
    subContainer: {
        width: Width,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: colors.light,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontWeight: 'bold',
        textAlign: 'center'
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10
    },
    formView: {
        width: '90%',
        borderRadius: 20,
        backgroundColor: '#f5f5f5',
        marginBottom: 20,
        alignItems: 'center',
        paddingVertical: 10
    },
    formText: {
        fontWeight: 'bold'
    },
    checkBoxContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
})