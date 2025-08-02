import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import { DrawerScreenProps } from '@react-navigation/drawer';

type DetailsProps = NativeStackScreenProps<RootStackParamList, 'Details'>;

const DetailsScreen = ({route, navigation} : DetailsProps) => {

    // const {someDetail} =  route.params;

    // Safely access route.params, default to undefined if not available
    const someDetail = 'params' in route ? route.params?.someDetail : undefined;
    console.log('Details Screen Params:', someDetail);

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Details Screen</Text>
            {someDetail ? (
                <View style={{ marginTop: 20 }}>
                <Text style={{ fontWeight: 'bold' }}>Detail Information:</Text>
                <Text>This is Details passing through Home.</Text>
                <Text>Detail ID: {someDetail.id}, Name: {someDetail.name}</Text>
                </View>
            ) : (
                <View style={{ marginTop: 20 }}>
                <Text>No details provided.</Text>
                </View>
            )}

            <Pressable onPress={() => navigation.navigate('Home')}>
                <Text style={{ color: 'blue', marginTop: 20 }}>Go Back Home</Text>
            </Pressable>
        </View>
    );
};

export default DetailsScreen;