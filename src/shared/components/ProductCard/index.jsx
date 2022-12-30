import { View, Text, StyleSheet } from "react-native";

import { border_styles } from "@/shared/styles"; 

export function ProductCard(props) {
    return(
        <View style={styles.card}>
            <Text style={{fontSize: 16, fontWeight: '600'}}>{props.name}</Text>
            <Text>{props.price}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        ...border_styles.border,
        ...border_styles.border_radius_n(3),
        marginBottom: 16,
        padding: 12
    }
});