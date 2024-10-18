import React from 'react';
import { FlatList, Text, View, TouchableOpacity } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import AppHeader from "../../../components/AppHeader";
import { styles } from "./styles";
import { categories } from "../../../data/categories";

export default function Home() {

    const renderCategoryItem = ({ item }) => {
        return (
            <TouchableOpacity style={styles.categoryBox}>
                <Ionicons name="car-sport-outline" size={24} color="black" />
                <Text style={styles.categoryText}>{item.category}</Text>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.container}> 
            <AppHeader title="Home" />

            {/* Render categories: Vehicle types */}
            <FlatList 
                style={styles.list} 
                data={categories} 
                renderItem={renderCategoryItem} 
                keyExtractor={(item) => String(item.id)} 
            />
        </View>
    );
}
