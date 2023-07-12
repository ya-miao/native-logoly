import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { StatusBar } from 'react-native';


const Tab = createMaterialTopTabNavigator();

function TopTabPager() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Feed"
        screenOptions={{
          tabBarActiveTintColor: '#e91e63',
          tabBarLabelStyle: { fontSize: 12 },
          tabBarStyle: { backgroundColor: 'powderblue' },
        }}
        style={{ paddingTop: StatusBar.currentHeight }}
      >
        <Tab.Screen
          name="Feed"
          component={Feed}
          options={{ tabBarLabel: 'Home' }}
        />
        <Tab.Screen
          name="Notifications"
          component={Notifications}
          options={{ tabBarLabel: 'Updates' }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{ tabBarLabel: 'Profile' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default TopTabPager;

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