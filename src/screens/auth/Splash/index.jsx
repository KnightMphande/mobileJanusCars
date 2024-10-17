import { Image, Text, View } from "react-native";
import { styles } from "./styles";
import Button from "../../../components/Button";

export default function Splash() {

    const handlePress = () => {
        console.log("Button clicked.");
        
    }

    return (
        <View style={styles.container}>
            <Image resizeMode="contain" style={styles.image} source={require('../../../assets/car_keys.png')} />

            <View style={styles.containerTitle}>
                <Text style={styles.title}>Okay, Let's</Text>
                <Text style={[styles.title, styles.highlight]}>Drive</Text>
            </View>

            <Button onPress={handlePress} title="Signup" />
            <Button onPress={handlePress} title="Signin" />
        </View>
    );
}
