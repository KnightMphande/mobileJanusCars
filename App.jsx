import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View
} from 'react-native';
import Splash from './src/screens/auth/Splash';
import Signup from './src/screens/auth/Signup';
import Signin from './src/screens/auth/Signin';
import Profile from './src/screens/app/Profile';
import Home from './src/screens/app/Home';
import Booking from './src/screens/app/Booking';

function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          {/* <Splash /> */}
          {/* <Signup /> */}
          {/* <Signin /> */}
          {/* <Profile /> */}
          {/* <Home /> */}
          <Booking />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
