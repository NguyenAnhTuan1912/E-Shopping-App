import { StyleSheet } from "react-native";

const button_default_style = {
    padding: 7
}

export const button_styles = StyleSheet.create({
    white: {
        ...button_default_style,
        backgroundColor: 'white'
    },
    darker_cyan: {
        ...button_default_style,
        backgroundColor: '#129fb8'
    }
});