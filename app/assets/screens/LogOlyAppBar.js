import * as React from 'react';

import { Image, View } from "react-native"
import { Appbar } from 'react-native-paper';
import { StatusBar } from 'react-native';

import { Text } from 'react-native-paper';

import { useFonts } from 'expo-font';

const LogOlyAppBar = () => {

  const [loaded] = useFonts({
    // Orbitron: require('./app/assets/fonts/Orbitron-Regular.ttf'),
    Orbitron: require('../fonts/Orbitron-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }

  const fontConfig = {
    fontFamily: 'Orbitron',
  };

  return (
    <Appbar.Header
      mode='small'
    // style={{ paddingTop: StatusBar.currentHeight }} // This should only work for Android. iOS has SafeAreaView that does not work with Android
    >
      {/* <Appbar.BackAction onPress={() => { }} /> */}
      <Appbar.Content title={
        <View style={{ padding: 6, flexDirection: 'row', gap: 12, alignItems: 'center' }}>
          <Image
            source={require('../icons/liftdevlog-logo-white-0.png')}
            style={{ width: 30, height: 26 }}
          />
          <Text variant="titleLarge" style={{ fontFamily: 'Orbitron' }}>
            LogOly
          </Text>
        </View>
      } />
      {/* <Appbar.Action icon="calendar" onPress={() => { }} />
    <Appbar.Action icon="magnify" onPress={() => { }} /> */}
    </Appbar.Header>
  );
};

export default LogOlyAppBar;