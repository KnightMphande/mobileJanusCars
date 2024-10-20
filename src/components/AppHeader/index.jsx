import { Image, Pressable, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export default function AppHeader({ title, handleSignout }) {

    return (
        <View style={[styles.container]}>
            <View style={styles.backNavContainer}>

                <Text style={styles.title}>{title}</Text>
            </View>

            <TouchableOpacity activeOpacity={0.75} style={styles.signoutContainer} onPress={handleSignout}>
                <Text style={styles.signoutText}>Signout</Text>
            </TouchableOpacity>

        </View>
    )
}