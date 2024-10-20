import { Image, Pressable, Text, View } from "react-native";
import { styles } from "./styles";

export default function AuthHeader({ title, handleBackPress }) {

    return (
        <View style={styles.container}>
            <Pressable onPress={handleBackPress} hitSlop={20}>
                <Image style={styles.image} source={require('../../assets/auth_back.png')} />

            </Pressable>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}