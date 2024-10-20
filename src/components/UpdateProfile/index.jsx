import React, { useState } from 'react';
import { View, Text, TextInput, Modal, Image, TouchableOpacity, Alert, Pressable } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { styles } from './styles';
import Button from '../Button';

const UpdateProfileModal = ({ isVisible, onClose, onUpdate, userData }) => {
    // Initialize state with the provided user data
    const [names, setName] = useState(userData?.names || '');
    const [email, setEmail] = useState(userData?.email || '');
    const [phone, setPhone] = useState(userData?.phone || '');
    const [imageUri, setImageUri] = useState(userData?.logo_url ? `http://your-server.com/path-to-images/${userData.logo_url}` : null);

    const handleImagePicker = () => {
        launchImageLibrary({ mediaType: 'photo' }, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.error('ImagePicker Error: ', response.error);
            } else {
                setImageUri(response.assets[0].uri);
            }
        });
    };

    const handleUpdate = () => {
        if (!names || !email || !phone) {
            Alert.alert('Error', 'Please fill all fields');
            return;
        }

        // Call onUpdate with the updated profile data
        onUpdate({ names, email, phone, imageUri });
        onClose(); // Close the modal after updating
    };

    return (
        <Modal
            visible={isVisible}
            animationType="slide"
            transparent
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <Text style={styles.modalTitle}>Update Profile</Text>

                    <TextInput
                        style={styles.input}
                        placeholder="Name"
                        value={names}
                        onChangeText={setName}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Phone"
                        value={phone}
                        onChangeText={setPhone}
                        keyboardType="phone-pad"
                    />

                    <Button title="Pick Profile Photo" onPress={handleImagePicker} />

                    {/* Display the image preview if an image is selected or already exists */}
                    {imageUri && (
                        <Image
                            source={{ uri: imageUri }}
                            style={styles.imagePreview}
                        />
                    )}

                    <View style={styles.buttonContainer}>
                        <Pressable onPress={handleUpdate} style={styles.modalActionBtn}>
                            <Text style={styles.btnText}>Update</Text>
                        </Pressable>
                        <Pressable onPress={onClose} style={[styles.modalActionBtn, styles.redBtn]}>
                            <Text style={styles.btnText}>Cancel</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default UpdateProfileModal;
