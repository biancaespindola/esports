import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface ButtonProps {
	title: string;
}

function Button(props: ButtonProps) {
	return (
		<TouchableOpacity>
			<Text>{props.title}</Text>
		</TouchableOpacity>
	);
}

export default function App() {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>
				o primeiro texto de um grande apricativo
			</Text>

			<Button title="aperte aqui"></Button>
			<Button title="ou aqui 1"></Button>
			<Button title="ou aqui 2"></Button>
			<Button title="ou aqui 3"></Button>

			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#e2b0e2',
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		color: '#fff',
		fontSize: 23,
	},
});
