import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import MinMax from './components/Semana01/MinMax';
import MeuComponente from './components/Semana02/MeuComponente';
import DigiteSeuNome from './components/semana03/DigiteSeuNome.js';
import NumeroAleatorio from './components/semana03/NumeroAleatorio';
import BiscoitoSorte from './components/Semana05/BiscoitoSorte';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <MeuComponente />
      <MinMax min={10} max={22} />

      <DigiteSeuNome />
      <NumeroAleatorio min={1} max={60} /> */}

      <BiscoitoSorte />
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
