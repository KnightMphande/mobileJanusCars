// src/App.js
import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AuthProvider, AuthContext } from './src/context/AuthContext';
import Splash from './src/screens/auth/Splash';
import Signup from './src/screens/auth/Signup';
import Signin from './src/screens/auth/Signin';
import AppTabs from './src/navigation/AppTabs'; 

const Stack = createNativeStackNavigator();

function AppNavigator() {
    const { authToken, isLoading } = useContext(AuthContext);

    // Show splash screen while checking auth status
    if (isLoading) {
        return <Splash />;
    }

    return (
        <Stack.Navigator initialRouteName="Splash">
            {authToken ? (
                // User is logged in
                <Stack.Screen name="AppTabs" component={AppTabs} options={{ headerShown: false }} />
            ) : (
                // User is not logged in
                <>
                    <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
                    <Stack.Screen name="Signup" component={Signup} options={{ title: 'Sign Up', headerShown: false }} />
                    <Stack.Screen name="Signin" component={Signin} options={{ title: 'Sign In', headerShown: false }} />
                </>
            )}
        </Stack.Navigator>
    );
}

export default function App() {
    return (
        <SafeAreaProvider>
            <AuthProvider>
                <NavigationContainer>
                    <AppNavigator />
                </NavigationContainer>
            </AuthProvider>
        </SafeAreaProvider>
    );
}
