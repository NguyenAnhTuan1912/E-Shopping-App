import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { AppNavigator } from './AppNavigator';

import { navigationRef } from '@/shared/utils/navigation-utils';

export default function App() {
	return (
		<NavigationContainer ref={navigationRef} >
			<StatusBar
				barStyle='dark-content'
			/>
			<AppNavigator></AppNavigator>
		</NavigationContainer>
	);
}
