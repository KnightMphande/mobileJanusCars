import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Splash from './src/screens/auth/Splash';
import Signup from './src/screens/auth/Signup';
import Signin from './src/screens/auth/Signin';
import Profile from './src/screens/app/Profile';
import Home from './src/screens/app/Home';
import Booking from './src/screens/app/Booking';

const Stack = createNativeStackNavigator();

function App() {

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash">
          <Stack.Screen
            name="Splash"
            component={Splash}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Signup"
            component={Signup}
            options={{ title: 'Sign Up', headerShown: false }}
          />
          <Stack.Screen
            name="Signin"
            component={Signin}
            options={{ title: 'Sign In', headerShown: false }}
          />
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{ title: 'Profile', headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: 'Home', headerShown: false }}
          />
          <Stack.Screen
            name="Booking"
            component={Booking}
            options={{ title: 'Booking', headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
