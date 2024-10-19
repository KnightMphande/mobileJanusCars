// src/screens/auth/Signin.js
import React, { useState, useContext } from 'react';
import { ScrollView, View, Alert, ActivityIndicator } from 'react-native';
import Button from '../../../components/Button';
import AuthHeader from '../../../components/AuthHeader';
import Input from '../../../components/Input';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import axios from "axios";
import { AuthContext } from '../../../context/AuthContext';
import { styles } from "./styles";
import Config from 'react-native-config';

export default function Signin({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const { login } = useContext(AuthContext);

    const handleSignin = async () => {
        setLoading(true); // Start the loading state
        try {
            console.log("Reached process to signin");
            const url = 'http://192.168.x.x:5000/api/auth/signin'
            
const response = await axios.post(
    Config.url, // Replace with your local IP
    { email, password },
    { withCredentials: true }
);

              
            const { token } = response.data;

            login(token); // Save the token and mark the user as authenticated
            Alert.alert('Success', 'You have signed in successfully');
            navigation.navigate('AppTabs'); // Redirect to the main app
        } catch (error) {
            // Check if we received a proper response from the server
            if (error.response) {
                Alert.alert('Error', error.response.data.message || 'Invalid email or password');
            } else {
                // Handle network errors or other unexpected issues
                Alert.alert('Error', 'Something went wrong. Please try again later.');
            }
            console.error('Signin failed:', error);
        } finally {
            setLoading(false); // End the loading state
        }
    };

    return (
        <SafeAreaProvider>
            <ScrollView>
                <View style={styles.container}>
                    <AuthHeader title="Signin" />
                    <Input
                        label="Email"
                        placeholder="example@gmail.com"
                        value={email}
                        onChangeText={setEmail}
                    />
                    <Input
                        isPassword
                        label="Password"
                        placeholder="Password"
                        value={password}
                        onChangeText={setPassword}
                    />
                    {loading ? (
                        <ActivityIndicator size="large" color="#0000ff" />
                    ) : (
                        <Button title="Signin" onPress={handleSignin} disabled={loading} />
                    )}
                </View>
            </ScrollView>
        </SafeAreaProvider>
    );
}
