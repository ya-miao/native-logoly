import { Button, Surface, Text, Tooltip, TouchableRipple } from "react-native-paper"
import { TouchableOpacity, View } from "react-native"
import { useFonts } from 'expo-font';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ProgramsTab = () => {

  const [loaded] = useFonts({
    Orbitron: require('../fonts/Orbitron-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={{ padding: 15, flexDirection: 'column', gap: 15 }}>
      <TouchableOpacity>
        {/* <Button mode='outlined */}
        <Button mode='outlined' labelStyle={{ fontFamily: 'Orbitron' }}>
          Single Session Mode
        </Button>
      </TouchableOpacity>
      <TouchableOpacity>
        {/* <Button icon='plus' mode='outlined'> */}
        <Button icon='plus' mode='outlined' labelStyle={{ fontFamily: 'Orbitron' }}>
          Create New Program
        </Button>
      </TouchableOpacity>
      <Surface style={{ padding: 15 }}>
        <Text>
          Test Check
        </Text>
      </Surface>
    </View>
  )
}

export default ProgramsTab;