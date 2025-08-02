import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import FontAwesome6 from '@react-native-vector-icons/fontawesome6';

const Drawer = createDrawerNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
        <Drawer.Navigator initialRouteName='Home'>
            <Drawer.Screen 
            name='Home' 
            component={HomeScreen}
            options={{
              drawerIcon: ({ color, size }) => (
                <FontAwesome6 name="house" color={color} size={size} iconStyle="solid" />
              ),
            }}
            />
            <Drawer.Screen 
            name='Settings' 
            component={SettingsScreen}
            options={{
              drawerIcon(props) {
                return <FontAwesome6 name="gear" color={props.color} size={props.size} iconStyle="solid" />
              },
            }}
            />
            <Drawer.Screen 
            name='Profile' 
            component={ProfileScreen}
            options={{
              drawerIcon(props) {
                return <FontAwesome6 name="user" color={props.color} size={props.size} iconStyle="solid" />
              },
            }}
            />
        </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator;