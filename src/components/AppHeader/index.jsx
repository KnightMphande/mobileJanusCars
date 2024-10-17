import { Image, Pressable, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export default function AppHeader({ title, backPress }) {
    return (
        <View style={[styles.container]}>
            <View style={styles.backNavContainer}>
                <Pressable onPress={backPress} hitSlop={20}>
                    <Image style={styles.image} source={require('../../assets/auth_back.png')} />

                </Pressable>

                <Text style={styles.title}>{title}</Text>
            </View>

            <TouchableOpacity activeOpacity={0.75} style={styles.menu}>
                <Image style={[styles.image]} source={require('../../assets/menu_bar.png')} />
            </TouchableOpacity>

        </View>
    )
}