import { Image, Pressable, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export default function AuthHeader({ title, backPress }) {
    return (
        <View style={styles.container}>
            <Pressable onPress={backPress} hitSlop={20}>
                <Image style={styles.image} source={require('../../assets/auth_back.png')} />

            </Pressable>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}