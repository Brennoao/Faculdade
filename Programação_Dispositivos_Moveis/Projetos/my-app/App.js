import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Image  style={{width: 350, height: 350}} source={require('./assets/icon.png')}/>
        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    // height: 100
  },

});
