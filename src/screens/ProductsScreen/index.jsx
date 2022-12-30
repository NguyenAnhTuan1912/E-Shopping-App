import { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { Dimensions } from 'react-native';

// My styles, components
import { container_styles, button_styles, text_styles, border_styles } from '@/shared/styles';
import { NavBar } from '@/shared/components/NavBar';
import { ProductCard } from '@/shared/components/ProductCard';

// My utils, libraries

export function ProductsScreen({ navigation, route }) {
    const { text, count = 1 } = route.params;
    const [products, setProducts] = useState([]);
    const newParams = {
        text: `Navigate to Products ${count + 1} times.`,
        count: count + 1,
    };
    const newParamsToHome = {
        result: `You have navigated to Products ${count} times`
    }

    const getProducts = async () => {
        console.log('Requesting...');
        const resoponse = await fetch("http://192.168.0.55:8000/api/v1.0/products");
        const products = await resoponse.json();
        console.log('Request done!');
        setProducts(products);
    }
    
    useEffect(() => {
        getProducts().catch(err => console.log(err));
    }, []);

    return (
        <View style={container_styles.default}>
            <NavBar
                styles={{ 
                    button: {...button_styles.white, ...border_styles.border, ...border_styles.border_radius_n(3), marginRight: 10},
                    text: text_styles.black
                }}
                routeInformations={[
                    {
                        routeName: 'HomeScreen',
                        name: 'Home',
                        params: {...newParamsToHome},
                        action: 'navigate'
                    },
                    {
                        name: 'Go to the first screen',
                        action: 'popToTop'
                    },
                    {
                        routeName: 'ProductsScreen',
                        name: 'Products',
                        params: {...newParams},
                        action: 'push'
                    },
                ]}
            />

            <View style={{...container_styles.default, ...container_styles.white, ...container_styles.center}}>
                <FlatList
                    data={products}
                    style={{width: Dimensions.get('window').width, paddingLeft: 12, paddingRight: 12}}
                    renderItem={({item}) => <ProductCard {...item} />}
                />
            </View>
        </View>
    );
}