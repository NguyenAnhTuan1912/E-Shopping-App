import { View, Text, TouchableOpacity } from 'react-native';

// My styles, components
import { container_styles, button_styles, text_styles, border_styles } from '@/shared/styles';
import { NavBar } from '@/shared/components/NavBar';
import { LogoTitle } from '@/shared/components/LogoTitle';

// My utils, libraries

export function HomeScreen({ navigation, route }) {
    const newParams = {
        text: "Hello, welcome to Products."
    }

    return (
        <View style={container_styles.default}>
            <NavBar
                styles={{ 
                    button: {...button_styles.white, ...border_styles.border, ...border_styles.border_radius_n(3), marginRight: 10},
                    text: text_styles.black
                }}
                routeInformations={[{
                    routeName: 'ProductsScreen',
                    name: 'Products',
                    params: {...newParams}
                }]}
            />

            <View style={{...container_styles.white, ...container_styles.center}}>
                <LogoTitle src={"https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png"} />
                <Text>Home screen</Text>
                {route.params?.result && <Text>{route.params?.result}</Text>}
                <TouchableOpacity
                    style={{...button_styles.white, ...border_styles.border, ...border_styles.border_radius_n(3)}}
                    onPress={() =>  navigation.navigate("ProductsScreen", newParams)}
                >
                    <Text style={text_styles.black}>Go to Products</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}