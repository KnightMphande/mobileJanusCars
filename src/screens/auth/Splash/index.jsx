import { Image, Text, View } from "react-native";
import { styles } from "./styles";

export default function Splash() {
    return (
        <View style={styles.container}>
            <Image resizeMode="contain" style={styles.image} source={require('../../../assets/car_keys.jpg')} />
            <Text style={styles.title}>Okay, Let's</Text>
            <Text style={[ styles.title,styles.highlight]}>Drive</Text>
        </View>
    );
}
