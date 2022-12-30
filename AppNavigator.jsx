import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// My styles, components
import { HomeScreen } from '@/screens/HomeScreen';
import { ProductsScreen } from '@/screens/ProductsScreen';
import { LogoTitle } from '@/shared/components/LogoTitle';

const Stack = createNativeStackNavigator();

const header_styles = {
    headerStyle: {
        backgroundColor: 'white',
        borderBottomWidth: 5,
        borderBottomColor: 'black'
    },
    headerTintColor: '#262626',
    headerTitleStyle: {
        fontWeight: 'regular',
    },
}

// Test
// Override header styles? - Yes
// Custom header title - Yes

export function AppNavigator() {
    return (
        <Stack.Navigator 
            screenOptions={{
                ...header_styles
            }}
            initialRouteName='HomeScreen'
        >
            {/* Home screen */}
            <Stack.Screen 
                name='HomeScreen'
                options={{
                    title: "Home"
                }}
            >
                {(props) => <HomeScreen {...props} />}
            </Stack.Screen>

            {/* Products screen */}
            <Stack.Screen
                name='ProductsScreen'
                options={{
                    title: "Products"
                }} 
            >
                {(props) => <ProductsScreen {...props} />}
            </Stack.Screen>
        </Stack.Navigator>
    );
}