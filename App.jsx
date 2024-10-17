import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View
} from 'react-native';
import Splash from './src/screens/auth/Splash';
import Signup from './src/screens/auth/Signup';
import Signin from './src/screens/auth/Signin';

function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          {/* <Splash /> */}
          {/* <Signup /> */}
          <Signin />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
