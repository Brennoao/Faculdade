import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { ActivityIndicator, MD2Colors } from 'react-native-paper';
import Cronometro from './components/Semana05/Cronometro'

export default function App() {
  return (
    <View style={styles.container}>
      <Cronometro />
      {/* <ActivityIndicator animating={true} color={MD2Colors.red800} /> */}
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
