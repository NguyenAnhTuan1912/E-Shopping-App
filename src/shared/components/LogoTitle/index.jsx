import { Image } from "react-native";

export function LogoTitle({ src }) {
    return (
        <Image source={{uri: src}} style={{ width: 50, height: 50, borderRadius: 10 }} />
    );
}