// src/App.js
import React, { useContext, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Splash from './src/screens/auth/Splash';
import Signup from './src/screens/auth/Signup';
import Signin from './src/screens/auth/Signin';
import Profile from './src/screens/app/Profile';
import Bookings from './src/screens/app/Booking';

const Stack = createNativeStackNavigator();

export const UserContext = React.createContext();


export default function App() {
    const [user, setUser] = useState();

    return (
        <SafeAreaProvider>
            <UserContext.Provider value={{ user, setUser }}>
                <NavigationContainer>
                    <Stack.Navigator initialRouteName="Splash">
                        <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
                        <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
                        <Stack.Screen name="Signup" component={Signup} options={{ title: 'Sign Up', headerShown: false }} />
                        <Stack.Screen name="Signin" component={Signin} options={{ title: 'Sign In', headerShown: false }} />
                        <Stack.Screen name="Bookings" component={Bookings} options={{ title: 'Bookings', headerShown: false }} />
                    </Stack.Navigator>
                </NavigationContainer>
            </UserContext.Provider>

        </SafeAreaProvider>
    );
}
