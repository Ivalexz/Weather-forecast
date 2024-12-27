import {FlatList, StyleSheet, Text, View} from 'react-native';
import {useEffect, useState} from 'react';
import ForecastScreen from './screens/ForeCastScreen';
import MainScreen from './screens/MainScreen';
export default function App() {
	const [main, setMain]=useState(true);
	const [city, setCity] = useState("");

	const screen = main ? (
		<MainScreen setMain={setMain} setCity={setCity} />
	  ) : (
		<ForecastScreen city={city} setMain={setMain}/>
	  );

	return (
	  <View style={styles.container}>
        {screen}
	  </View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	}
});

