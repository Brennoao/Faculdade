import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import MinMax from './components/Semana01/MinMax';
import MeuComponente from './components/Semana02/MeuComponente';
import DigiteSeuNome from './components/semana03/DigiteSeuNome.js';
import NumeroAleatorio from './components/semana03/NumeroAleatorio';
import BiscoitoSorte from './components/Semana05/BiscoitoSorte';
import Profile from './components/Semana05/Profile';
import Cronometro from './components/Semana05/Cronometro';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <MeuComponente />
      <MinMax min={10} max={22} />

      <DigiteSeuNome />
      <NumeroAleatorio min={1} max={60} /> */}

      {/* <BiscoitoSorte /> */}
      {/* <Profile img="https://fakepersongenerator.com/Face/female/female2016102532723011.jpg" Nome="Brenno" Genero="Masculino" Cell="(61) 99656-5606" Email="brennoao@outlook.com"/> */}
      <Cronometro />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "black"
  },
});
