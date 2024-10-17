import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export default function Button({ title, onPress }) {

    return (
        <TouchableOpacity activeOpacity={0.75} onPress={onPress} style={styles.container}>
            <Text style={styles.title}>{ title }</Text>
        </TouchableOpacity>
    )
}