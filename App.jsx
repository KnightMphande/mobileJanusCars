import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons'; 
import Splash from './src/screens/auth/Splash';
import Signup from './src/screens/auth/Signup';
import Signin from './src/screens/auth/Signin';
import Profile from './src/screens/app/Profile';
import Home from './src/screens/app/Home';
import Booking from './src/screens/app/Booking';
import { colors } from './src/utils/colors';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Booking') {
            iconName = focused ? 'calendar' : 'calendar-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }

          // Return the Ionicons component
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: colors.dakGreen,
        tabBarInactiveTintColor: colors.default,
        tabBarStyle: { borderTopColor: colors.dakGreen }
      })}
    >
      <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Tab.Screen name="Booking" component={Booking} options={{ title: 'Booking', headerShown: false }} />
      <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}

function ProfileTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          } else if (route.name === 'Booking') {
            iconName = focused ? 'calendar' : 'calendar-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
      <Tab.Screen name="Booking" component={Booking} options={{ title: 'Booking', headerShown: false }} />
    </Tab.Navigator>
  );
}

function App() {
  const [isSignedIn, setIsSignedIn] = useState(true); 

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash">
          {isSignedIn ? (
            <>
              <Stack.Screen name="HomeTabs" component={HomeTabs} options={{ headerShown: false }} />
              <Stack.Screen name="ProfileTabs" component={ProfileTabs} options={{ headerShown: false }} />
            </>
          ) : (
            <>
              <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
              <Stack.Screen name="Signup" component={Signup} options={{ title: 'Sign Up', headerShown: false }} />
              <Stack.Screen name="Signin" component={Signin} options={{ title: 'Sign In', headerShown: false }} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
