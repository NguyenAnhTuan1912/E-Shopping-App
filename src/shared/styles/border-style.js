import { StyleSheet } from "react-native";

export const border_styles = StyleSheet.create({
    border: {
        borderWidth: 1,
        borderColor: 'black'
    },
    border_bottom: {
        borderBottomWidth: 1,
        borderBottomColor: 'black'
    },
    border_radius_n: (n) => ({ borderRadius: n })
});