// src/screens/auth/Signin.js
import React, { useState, useEffect, useContext } from 'react';
import { ScrollView, View, Alert, ActivityIndicator } from 'react-native';
import Button from '../../../components/Button';
import AuthHeader from '../../../components/AuthHeader';
import Input from '../../../components/Input';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import axios from "axios";
import { styles } from "./styles";
import { UserContext } from '../../../../App';

export default function Signin({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    // Get user and setUser from context
    const { user, setUser } = useContext(UserContext);

    const handleBackPress = () => {
        navigation.goBack();
    }

    const handleSignin = async () => {

        setLoading(true); 
        try {  
            const response = await axios.post(
                'http://10.242.154.96:5000/api/auth/signin', // local ip address
                { email, password },  
                { withCredentials: true }  
            );            

            const data = response.data;

            if(data.success) {
                // console.log(data);
                setUser(data?.user);
                Alert.alert('Success', 'You have signed in successfully');
                navigation.navigate('Profile'); 
            } else if(!data.success) {
                Alert.alert(data.error);
            }


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
                    <AuthHeader title="Signin" handleBackPress={handleBackPress} />
                    <Input
                        label="Email"
                        placeholder="example@gmail.com"
                        value={email}  // Controlled input for email
                        onChangeText={(v) => setEmail(v)}  // Update state directly
                    />
                    <Input
                        isPassword
                        label="Password"
                        placeholder="Password"
                        value={password}  // Controlled input for password
                        onChangeText={(v) => setPassword(v)}  // Update state directly
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
