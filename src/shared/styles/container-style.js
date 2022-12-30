import { StyleSheet } from "react-native";

const container_default_style = {
    flex: 1
}

export const container_styles = StyleSheet.create({
    default: container_default_style,
    white: {
        ...container_default_style,
        backgroundColor: 'white'
    },
    center: {
        ...container_default_style,
        alignItems: "center",
        justifyContent: "center"
    }
});