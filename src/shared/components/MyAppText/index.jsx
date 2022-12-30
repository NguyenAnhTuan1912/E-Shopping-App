import { Text } from "react-native";

export function MyAppText(props) {
    return (
        <Text>
            {props.children}
        </Text>
    );
}