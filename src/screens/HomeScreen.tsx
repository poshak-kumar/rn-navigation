import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen = ({navigation} : HomeProps) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Screen</Text>
      <Pressable onPress={() => navigation.navigate('Details', { someDetail: { id: '1', name: 'Sample Detail' } })}>
        <Text style={{ color: 'blue', marginTop: 20 }}>Go to Details</Text>
      </Pressable>
    </View>

   
  );
};

export default HomeScreen;