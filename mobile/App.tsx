
import { StyleSheet, View } from 'react-native';
import { NativeBaseProvider, Center, StatusBar} from "native-base";
import {useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold} from '@expo-google-fonts/roboto';
import {THEME} from './src/styles/theme'

import { Loading } from './src/components/Loading';

import { SignIn } from './src/screens/SignIn';

export default function App() {
  
  const [fontsLoaded ] = useFonts({Roboto_400Regular, Roboto_500Medium, Roboto_700Bold});


  return (
    <NativeBaseProvider theme={THEME}>
    <Center flex={1} bgColor='gray.900'>

      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
      
      {
        fontsLoaded? <SignIn/> : <Loading/>
      }

    </Center>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color:'#fff',
    fontSize: 24
  }
});
