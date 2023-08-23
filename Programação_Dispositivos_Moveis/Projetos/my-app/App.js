import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import MinMax from './components/MinMax';
import MeuComponente from './components/MeuComponente'

export default function App() {
  return (
    <View style={styles.container}>
      <MeuComponente />
      <MinMax min={10} max={22} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
