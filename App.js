import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import { configureFonts, MD3DarkTheme as DarkTheme, PaperProvider } from 'react-native-paper';
import { useFonts } from 'expo-font';

import WelcomeScreen from './app/assets/screens/WelcomeScreen';
import TopTabPager from './app/assets/screens/TopTabPager';
import LogOlyAppBar from './app/assets/screens/LogOlyAppBar';

export default function App() {

  const [loaded] = useFonts({
    Montserrat: require('./app/assets/fonts/Montserrat-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }

  const fontConfig = {
    fontFamily: 'Montserrat',
  };

  const theme = {
    fonts: configureFonts({ config: fontConfig }),
    roundness: 1,
    colors: {
      ...DarkTheme.colors,
      // backgroundColor: '#e0e0e0',
      primary: '#e0e0e0',
      // secondary: '#696969',
      // tertiary: '#aaaaaa'
    },
  };

  return (
    // <PaperProvider>
    <PaperProvider theme={theme}>
      <LogOlyAppBar />
      {/* <NavigationContainer styles={styles.container}> */}
      <SafeAreaView style={{
        flex: 1,
        backgroundColor: '#888888',
        justifyContent: 'center',
      }}>
        {/* <LogOlyAppBar /> */}
        <TopTabPager />
      </SafeAreaView>
      {/* <WelcomeScreen /> */}
      {/* <SafeAreaView style={styles.container}>
          <View style={{ width: '100%' }}>
          </View>
        </SafeAreaView> */}
      {/* </NavigationContainer> */}
    </PaperProvider >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#cccccc',
    alignItems: 'center',
    // justifyContent: 'flex-start',
    // justifyContent: 'center',
    justifyContent: 'flex-end',
  },
});
