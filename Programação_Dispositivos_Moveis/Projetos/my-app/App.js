import { StyleSheet} from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
// import Router from './routes/Router';
import DrawerRoutes from './routes/DrawerRoutes';

export default function App() {
  return (
    <PaperProvider>
      {/* <Router /> */}
      <NavigationContainer>
        <DrawerRoutes />
      </NavigationContainer>
    </PaperProvider>
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
