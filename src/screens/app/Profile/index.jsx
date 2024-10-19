// src/screens/Profile.js
import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import AppHeader from '../../../components/AppHeader';
import axios from "../../../utils/axiosConfig"
import { styles } from './styles';

export default function Profile() {
    const [profile, setProfile] = useState({
        name: '',
        phone: '',
        email: '',
        imageUrl: 'https://via.placeholder.com/150',
    });

    useEffect(() => {
        axios.get('/profile')
            .then(response => {
                setProfile(response.data);
            })
            .catch(error => {
                console.error('Failed to fetch profile data:', error);
            });
    }, []);

    return (
        <View style={styles.container}>
            <AppHeader title="Profile" />
            <Image
                source={{ uri: profile.imageUrl }}
                style={styles.profileImage}
            />
            <Text>Name: {profile.name}</Text>
            <Text>Phone: {profile.phone}</Text>
            <Text>Email: {profile.email}</Text>
        </View>
    );
}
