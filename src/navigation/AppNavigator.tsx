import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerScreenProps } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import FontAwesome6 from '@react-native-vector-icons/fontawesome6';
import DetailsScreen from '../screens/DetailsScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Types for stack navigator
export type RootStackParamList = {
  Home: undefined;
  Details: {
    someDetail?: {
      id: string;
      name: string;
    }; // Example of passing params
  };
  Settings: undefined;
  Profile: undefined;
};

// Here Created stack and drawer navigators
const Drawer = createDrawerNavigator<RootStackParamList>();
const HomeStack = createNativeStackNavigator<RootStackParamList>();
const DetailsStack = createNativeStackNavigator<RootStackParamList>()

// Stack navigator for Home-related screens
const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <HomeStack.Screen name="Details" component={DetailsScreen} />
    </HomeStack.Navigator>
  );
};

// add DrawerScreenProps so you can read route.params
function DetailsStackNavigator({
  route,
  }: DrawerScreenProps<RootStackParamList, 'Details'>) {
    // this is what the drawer passed in
    const { someDetail } = route.params ?? {}

    return (
      <DetailsStack.Navigator>
        <DetailsStack.Screen
          name="Details"
          component={DetailsScreen}
          // now we forward it as the initial params for the inner stack
          initialParams={{ someDetail }}
          options={{ title: 'Detail Info' }}
        />
      </DetailsStack.Navigator>
    )
}

const AppNavigator = () => {
  return (
    <NavigationContainer>
        <Drawer.Navigator initialRouteName='Home'>
          <Drawer.Screen
            name="Home"
            component={HomeStackNavigator}
            options={{
              drawerIcon: ({ color, size }) => (
                <FontAwesome6 name="house" color={color} size={size} iconStyle="solid" />
              ),
            }}
          />
          <Drawer.Screen
              name="Details"
              component={DetailsStackNavigator}
              options={{
                drawerIcon: (props) => (
                  <FontAwesome6
                    name="circle-info"
                    color={props.color}
                    size={props.size}
                    iconStyle="solid"
                  />
                ),
              }}
              initialParams={
               { someDetail: { id: '1', name: 'Sample Detail from Drawer' } }
              }
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