import React, { useState } from 'react';
import { ScrollView, View, Alert, ActivityIndicator, SafeAreaView } from 'react-native';
import Button from '../../../components/Button';
import AuthHeader from '../../../components/AuthHeader';
import Input from '../../../components/Input';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import axios from "axios";
import { styles } from "./styles";

export default function Signup({ navigation }) {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        password: '',
        street: '',
        city: '',
        province: '',
        zipCode: '',
        country: '',
        licenseNumber: '',
        issueDate: '',
        expiryDate: ''
    });
    const [loading, setLoading] = useState(false);

    const handleBackPress = () => {
        navigation.goBack();
    };

    const handleChange = (key, value) => {
        setFormData({ ...formData, [key]: value });
    };

    const handleSignup = async () => {
        setLoading(true);
        console.log(formData);
        
        try {
            const response = await axios.post(
                'http://10.242.154.96:5000/api/auth/signup', // local IP address
                formData,
                { withCredentials: true }
            );

            const data = response.data;

            if (data.success) {
                Alert.alert('Success', 'You have signed up successfully');
                navigation.navigate('Signin'); // Navigate to Signin screen
            } else {
                Alert.alert('Error', data.error || 'Signup failed');
            }
        } catch (error) {
            if (error.response) {
                Alert.alert('Error', error.response.data.message || 'Signup failed');
            } else {
                Alert.alert('Error', 'Something went wrong. Please try again later.');
            }
            console.error('Signup failed:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView
                    contentContainerStyle={{ flexGrow: 1 }}
                    keyboardShouldPersistTaps="handled"
                >
                    <View style={styles.container}>
                        <AuthHeader title="Signup" handleBackPress={handleBackPress} />
                        <Input
                            label="First Name"
                            placeholder="First Name"
                            value={formData.firstName}
                            onChangeText={(value) => handleChange('firstName', value)}
                        />
                        <Input
                            label="Last Name"
                            placeholder="Last Name"
                            value={formData.lastName}
                            onChangeText={(value) => handleChange('lastName', value)}
                        />
                        <Input
                            label="Phone"
                            placeholder="Phone Number"
                            value={formData.phone}
                            onChangeText={(value) => handleChange('phone', value)}
                        />
                        <Input
                            label="Email"
                            placeholder="example@gmail.com"
                            value={formData.email}
                            onChangeText={(value) => handleChange('email', value)}
                        />
                        <Input
                            isPassword
                            label="Password"
                            placeholder="Password"
                            value={formData.password}
                            onChangeText={(value) => handleChange('password', value)}
                        />
                        <Input
                            label="Street"
                            placeholder="Street Address"
                            value={formData.street}
                            onChangeText={(value) => handleChange('street', value)}
                        />
                        <Input
                            label="City"
                            placeholder="City"
                            value={formData.city}
                            onChangeText={(value) => handleChange('city', value)}
                        />
                        <Input
                            label="Province"
                            placeholder="Province"
                            value={formData.province}
                            onChangeText={(value) => handleChange('province', value)}
                        />
                        <Input
                            label="Zip Code"
                            placeholder="Zip Code"
                            value={formData.zipCode}
                            onChangeText={(value) => handleChange('zipCode', value)}
                        />
                        <Input
                            label="Country"
                            placeholder="Country"
                            value={formData.country}
                            onChangeText={(value) => handleChange('country', value)}
                        />
                        <Input
                            label="License Number"
                            placeholder="License Number"
                            value={formData.licenseNumber}
                            onChangeText={(value) => handleChange('licenseNumber', value)}
                        />
                        <Input
                            label="Issue Date"
                            placeholder="Issue Date"
                            value={formData.issueDate}
                            onChangeText={(value) => handleChange('issueDate', value)}
                            type="date"
                        />
                        <Input
                            label="Expiry Date"
                            placeholder="Expiry Date"
                            value={formData.expiryDate}
                            onChangeText={(value) => handleChange('expiryDate', value)}
                            type="date"
                        />

                        {loading ? (
                            <ActivityIndicator size="large" color="#0000ff" />
                        ) : (
                            <Button title="Signup" onPress={handleSignup} disabled={loading} />
                        )}
                    </View>
                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}
