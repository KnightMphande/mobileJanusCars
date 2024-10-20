import { Image, Pressable, Text, TextInput, View } from "react-native";
import { styles } from "./styles";
import { useState } from "react";

export default function Input({ label, placeholder, isPassword, value, onChangeText }) {
    const [isPsdVisible, setIsPsdVisible] = useState(false);

    const onShowOrHide = () => {
        setIsPsdVisible(!isPsdVisible);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    secureTextEntry={isPassword && !isPsdVisible} // Toggle password visibility
                    placeholder={placeholder}
                    style={styles.input}
                    value={value} // Bind the input value
                    onChangeText={onChangeText} // Update the state in the parent component
                />
                {
                    isPassword && (
                        <Pressable onPress={onShowOrHide} style={styles.showOrHideBtn}>
                            <Text style={styles.btnTitle}>{isPsdVisible ? 'Hide' : 'Show'}</Text>
                        </Pressable>
                    )
                }
            </View>
        </View>
    );
}
