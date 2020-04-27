import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native'

export default Logo = () => (
        <View style={styles.circle}>
            <Text style={styles.logo}>LOGO</Text>
        </View>
);

const styles = StyleSheet.create({
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
          marginTop: '30%'
      },
})