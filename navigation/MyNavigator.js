import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import RegistroUsuariosScreen from '../screens/RegistroUsuariosScreen';
import AlbumScreen from '../screens/AlbumScreen';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
    );
}

const AlbumStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Album" component={AlbumScreen} />
        </Stack.Navigator>
    );
}

const RegistroUsuariosStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="RegistroUsuarios" component={RegistroUsuariosScreen} />
        </Stack.Navigator>
    );
}

const MyNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Home') {
                            iconName = focused ? 'home' : 'home-outline';
                        } else if (route.name === 'Details') {
                            iconName = focused ? 'information-circle' : 'information-circle-outline';
                        } else if (route.name === 'Album') {
                            iconName = focused ? 'albums' : 'albums-outline';
                        } else if (route.name === 'RegistroUsuarios') {
                            iconName = focused ? 'person' : 'person-outline';
                        }

                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                })}
            >
                <Tab.Screen name="Home" component={HomeStack} />
                <Tab.Screen name="Album" component={AlbumStack} />
                <Tab.Screen name="RegistroUsuarios" component={RegistroUsuariosStack} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default MyNavigator;
