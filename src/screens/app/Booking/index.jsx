import { View } from "react-native";
import AppHeader from "../../../components/AppHeader";
import { styles } from "./styles";

export default function Booking() {
    return (
        <View style={styles.container}> 
            <AppHeader title="Car Booking" />
        </View>
    )
}