import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const navbar_style = StyleSheet.create({
    horizontal: {
        flex: 0.1,
        alignItems: 'center',
        flexDirection: 'row',
        paddingLeft: 12,
        paddingRight: 12,
        backgroundColor: 'white',
        
    }
});

export function NavBar({ styles, routeInformations = []}) {
    const navigation = useNavigation();
    const onNavigateHandle = (routeName, params, action = 'navigate') => {
        return function() {
            if(action === 'popToTop') {
                navigation[action]();
                return;
            }
            if(!params) navigation[action](routeName);
            else navigation[action](routeName, params);
        }
    }

    return (
        <View style={navbar_style.horizontal}>
            {routeInformations.map(routeInformation => (
                <TouchableOpacity
                    key={routeInformation.name}
                    style={styles.button}
                    onPress={onNavigateHandle(routeInformation.routeName, routeInformation.params , routeInformation.action)}
                >
                    <Text style={styles.text}>{routeInformation.name}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
}