import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import { PaperProvider } from 'react-native-paper';

import WelcomeScreen from './app/assets/screens/WelcomeScreen';
import TopTabPager from './app/assets/screens/TopTabPager';

export default function App() {
  return (
    <PaperProvider>
      {/* <NavigationContainer styles={styles.container}> */}
      <SafeAreaView style={{ flex: 1 }}>
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
