import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Text, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { NavigationContainer } from '@react-navigation/native';

const Tab = createMaterialBottomTabNavigator();

function WelcomeScreen() {
  return (
    <View>
      <Text>
        Test
      </Text>
    </View>
    // <NavigationContainer>
    //   <Tab.Navigator
    //     initialRouteName="Feed"
    //     activeColor="#e91e63"
    //     barStyle={{ backgroundColor: 'tomato' }}
    //   >
    //     <Tab.Screen
    //       name="Feed"
    //       component={Feed}
    //       options={{
    //         tabBarLabel: 'Home',
    //         tabBarIcon: ({ color }) => (
    //           <MaterialCommunityIcons name="home" color={color} size={26} />
    //         ),
    //       }}
    //     />
    //     <Tab.Screen
    //       name="Notifications"
    //       component={Notifications}
    //       options={{
    //         tabBarLabel: 'Updates',
    //         tabBarIcon: ({ color }) => (
    //           <MaterialCommunityIcons name="bell" color={color} size={26} />
    //         ),
    //       }}
    //     />
    //     <Tab.Screen
    //       name="Profile"
    //       component={Profile}
    //       options={{
    //         tabBarLabel: 'Profile',
    //         tabBarIcon: ({ color }) => (
    //           <MaterialCommunityIcons name="account" color={color} size={26} />
    //         ),
    //       }}
    //     />
    //   </Tab.Navigator>
    // </NavigationContainer>
  );
}

const Feed = () => {
  return (
    <View>
      <Text>
        Feed
      </Text>
    </View>
  )
};

const Notifications = () => {
  return (
    <View>
      <Text>
        Notifications
      </Text>
    </View>
  )
};

const Profile = () => {
  return (
    <View>
      <Text>
        Profile
      </Text>
    </View>
  )
};


export default WelcomeScreen;