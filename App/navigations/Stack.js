import React, { useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View, ActivityIndicator } from 'react-native';
import auth from '@react-native-firebase/auth';

import SignUp from '../screens/SignUp';
import SignIn from '../screens/SignIn';
import SignUpWithEmail from '../screens/SignUpWithEmail';

import BottomTab from './BottomTab';

const Stack = createStackNavigator();

export default StackNavigator = () => {

    // Set an initializing state whilst Firebase connects
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();

    // Handle user state changes
    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) setInitializing(false);
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);

    if (initializing) return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <ActivityIndicator size="large" color="#0000ff" />
        </View>
    );

    return(
            <Stack.Navigator initialRouteName="SignUp">
                {
                    !user ? (
                        <>
                        <Stack.Screen name="SignUp" component={SignUp} options={{headerShown: false}} />
                        <Stack.Screen name="SignUpWithEmail" component={SignUpWithEmail} options={{headerShown: false}} />
                        <Stack.Screen name="SignIn" component={SignIn} options={{headerShown: false}} />
                        </>
                    ) : (
                        <Stack.Screen name="Home" component={BottomTab} options={{headerShown: false}} />
                    )
                }
            </Stack.Navigator>
    )
}