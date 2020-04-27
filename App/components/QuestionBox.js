import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CheckBox from 'react-native-elements';
import { colors } from '../constants/theme'

export default QuestionBox = () => (
    <>
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
    </>
);

const styles = StyleSheet.create({
    
    text: {
        fontWeight: 'bold'
    },
    checkBoxContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
})