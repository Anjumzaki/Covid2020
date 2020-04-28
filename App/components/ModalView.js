import React from 'react';
import { Modal, View, Text, StyleSheet, Dimensions } from 'react-native';
import { colors } from '../constants/theme';
import { PrimaryButton } from '../components';

const Height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;

export default ModalView = ({title, message, onClose, isModalVisible}) => (
    <Modal
        animationType="fade"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={onClose}
    >
        <View style={styles.container} />
        <View style={styles.wrapper}>
            <View style={styles.subContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.msg}>{message}</Text>
                <PrimaryButton
                    label="Ok"
                    onPress={onClose}
                />
            </View>
        </View>
    </Modal>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
        opacity: 0.2
    },
    wrapper: {
        position: 'absolute',
        width: Width,
        height: Height,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent'
    },
    subContainer: {
        width: '85%',
        backgroundColor: '#fff',
        borderRadius: 15,
        borderWidth: 2,
        borderColor: colors.primary,
        alignItems: 'center',
        padding: 10,
        alignSelf: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20
    },
    msg: {
        textAlign: 'center',
        fontWeight: 'bold',
        marginVertical: 10
    }
})