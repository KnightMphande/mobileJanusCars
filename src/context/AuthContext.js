// src/context/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [authToken, setAuthToken] = useState(null);
    const [isLoading, setIsLoading] = useState(true); // Loading state for splash screen

    // Check if user is already authenticated
    useEffect(() => {
        const checkAuthStatus = async () => {
            const token = await AsyncStorage.getItem('access_token');
            if (token) {
                setAuthToken(token);
            }
            setIsLoading(false); // Finished checking auth status
        };

        checkAuthStatus();
    }, []);

    // Update token and store it in AsyncStorage
    const login = async (token) => {
        setAuthToken(token);
        await AsyncStorage.setItem('access_token', token);
    };

    // Logout function to clear the authentication state
    const logout = async () => {
        setAuthToken(null);
        await AsyncStorage.removeItem('access_token');
    };

    return (
        <AuthContext.Provider value={{ authToken, login, logout, isLoading }}>
            {children}
        </AuthContext.Provider>
    );
};
