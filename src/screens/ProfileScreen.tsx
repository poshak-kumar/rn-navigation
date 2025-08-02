import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { RootStackParamList } from '../navigation/AppNavigator';

type ProfileProps = DrawerScreenProps<RootStackParamList, 'Profile'>;

const ProfileScreen = ({navigation} : ProfileProps) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile Screen</Text>
      <Pressable onPress={() => navigation.navigate('Settings')}>
        <Text style={{ color: 'blue', marginTop: 20 }}>
          Go to Settings
        </Text>
      </Pressable>
    </View>
  );
};

export default ProfileScreen;