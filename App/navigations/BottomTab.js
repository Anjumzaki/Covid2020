import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screens/Home';
import Configurations from '../screens/Configurations';
import Contact from '../screens/Contact';
import Information from '../screens/Information';
import Monitoring from '../screens/Monitoring';
import { Image } from 'react-native';

import {
    assets
} from '../assets'

const Tab = createBottomTabNavigator();

export default BottomTab = () => (
    <Tab.Navigator initialRouteName="Home"
    screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
            let activeIcon, inactiveIcon;

            if(route.name == 'Home'){
                activeIcon = assets.home;
                inactiveIcon = assets.homeGray;
            }
            else if(route.name == 'Configurations'){
                activeIcon = assets.configurations;
                inactiveIcon = assets.configurationsGray;
            }
            else if(route.name == 'Monitoring'){
                activeIcon = assets.monitoring;
                inactiveIcon = assets.monitoringGray;
            }
            else if(route.name == 'Information'){
                activeIcon = assets.infohome;
                inactiveIcon = assets.infoGray;
            }
            else if(route.name == 'Contact'){
                activeIcon = assets.contact;
                inactiveIcon = assets.contactGray;
            }
          
            return <Image source={ color == '#8E8E8F' ? inactiveIcon : activeIcon} style={{width: size, height: size}} />
        }
      })}
    >
        <Tab.Screen name="Configurations" component={Configurations} options={{ tabBarLabel: 'CONFIGURATIONS' }}/>
        <Tab.Screen name="Monitoring" component={Monitoring} options={{ tabBarLabel: 'MONITORING' }} />
        <Tab.Screen name="Home" component={Home} options={{ tabBarLabel: 'HOME' }}/>
        <Tab.Screen name="Information" component={Information} options={{ tabBarLabel: 'INFORMATION' }} />
        <Tab.Screen name="Contact" component={Contact} options={{ tabBarLabel: 'CONTACT US' }} />
    </Tab.Navigator>
)