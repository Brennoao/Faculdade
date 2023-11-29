import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import { PaperProvider } from 'react-native-paper';
import Routes from './routes/Routes';
import Toast from 'react-native-toast-message';
import { MenuRouter } from './routes/MenuRouter';

export default function App() {
  return (
    <PaperProvider >
      <NavigationContainer theme={DarkTheme}>
        {/* <Routes /> */}
        <MenuRouter />
      </NavigationContainer>
      <Toast />
    </PaperProvider>
  );
}
