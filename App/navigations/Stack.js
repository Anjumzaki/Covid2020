import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignUp from '../screens/SignUp';
import SignIn from '../screens/SignIn';
import SignUpWithEmail from '../screens/SignUpWithEmail';

import BottomTab from './BottomTab';

const Stack = createStackNavigator();

export default StackNavigator = () => {
    return(
            <Stack.Navigator initialRouteName="SignUp">
                <Stack.Screen name="SignUp" component={SignUp} options={{headerShown: false}} />
                <Stack.Screen name="SignUpWithEmail" component={SignUpWithEmail} options={{headerShown: false}} />
                <Stack.Screen name="SignIn" component={SignIn} options={{headerShown: false}} />
                <Stack.Screen name="Home" component={BottomTab} options={{headerShown: false}} />
            </Stack.Navigator>
    )
}