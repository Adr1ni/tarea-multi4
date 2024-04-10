import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 24 }}>Home Screen</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate('Details')}
                style={{ marginTop: 20, padding: 10, backgroundColor: 'lightblue', borderRadius: 5 }}
            >
                <Text>Ir al Details Screen</Text>
            </TouchableOpacity>
        </View>
    );
}

export default HomeScreen;
