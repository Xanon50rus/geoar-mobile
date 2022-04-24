/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import { SafeAreaView, ScrollView, StatusBar, useColorScheme, View, Button, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from 'react-native-splash-screen';

import { Colors } from 'react-native/Libraries/NewAppScreen';

import { requestGeoPermission } from './src/helpers/permissions';

function HomeScreen({ navigation }: any) {
	const isDarkMode = useColorScheme() === 'dark';

	return (
		<SafeAreaView style={{flex: 1, backgroundColor: isDarkMode ? Colors.darker : Colors.lighter}}>
			<View
				style={{
					flex: 1,
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<Text>Home Screen</Text>
				<Button title="Go to Routes" onPress={() => navigation.navigate('Routes')} />
			</View>
		</SafeAreaView>
	);
}

function RoutesScreen() {
	const isDarkMode = useColorScheme() === 'dark';

	const backgroundStyle = {
		backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
	};

	return (
		<SafeAreaView style={backgroundStyle}>
			<ScrollView contentInsetAdjustmentBehavior="automatic" style={backgroundStyle}>
				<View
					style={{
						backgroundColor: isDarkMode ? Colors.black : Colors.white,
					}}
				>
					<Button title="Ljubljana" onPress={requestGeoPermission} />
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}

const Stack = createNativeStackNavigator();

const App = () => {
	useEffect(() => {
		SplashScreen.hide();
	}, []);

	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Home">
				<Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
				<Stack.Screen name="Routes" component={RoutesScreen} options={{ headerShown: false }} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;

