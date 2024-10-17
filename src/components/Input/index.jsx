import { Image, Pressable, Text, TextInput, View } from "react-native";
import { styles } from "./styles";
import { useState } from "react";

export default function Input({ label, placeholder, isPassword }) {
    const [isPsdVisible, setIsPsdVisible] = useState(false);

    const onShowOrHide = () => {
        setIsPsdVisible(!isPsdVisible)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.inputContainer}>
                <TextInput secureTextEntry={isPassword && !isPsdVisible} placeholder={placeholder} style={styles.input} />

                {
                    isPassword && (<Pressable onPress={onShowOrHide} style={styles.showOrHideBtn}>
                    <Text style={styles.btnTitle}>{isPsdVisible ? 'Hide' : 'Show'}</Text>
                </Pressable>)
                }
            </View>
        </View>
    )
}