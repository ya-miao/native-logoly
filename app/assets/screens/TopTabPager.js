import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import { Text, View } from 'react-native';
import { View } from 'react-native';
import { Text, Tooltip } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { useTheme } from 'react-native-paper';

import ProgramsTab from '../tabs/ProgramsTab';
import ProgressTab from '../tabs/ProgressTab';
import ReviewTab from '../tabs/ReviewTab';
import ScheduleTab from '../tabs/ScheduleTab';
import StatsTab from '../tabs/StatsTab';
import AccountTab from '../tabs/AccountTab';

import {
  DarkTheme
} from '@react-navigation/native';

import { StatusBar } from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialTopTabNavigator();

const theme = {
  // ...DefaultTheme,
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: '#696969',
    // text: '#ffffff'
    primary: '#9a4747',
  },
};

function TopTabPager() {
  return (
    <NavigationContainer theme={theme}>
      <Tab.Navigator
        initialRouteName="Programs"
        screenOptions={{
          // tabBarInactiveTintColor: "#696969",
          tabBarLabelStyle: { fontSize: 12 },
          // tabBarActiveTintColor: '#e91e63',
          // tabBarStyle: { backgroundColor: '#101010' },
        }}
      // style={{ paddingTop: StatusBar.currentHeiapp/assets/tabs/ProgramsTab copy 4.jsght }} // This should only work for Android. iOS has SafeAreaView that does not work with Android
      >
        <Tab.Screen
          name="Programs"
          // component={Programs}
          component={ProgramsTab}
          options={{
            tabBarLabel: 'Programs',
            tabBarShowLabel: false,
            // tabBarShowLabel: true,
            tabBarIcon: ({ color }) => (
              <Tooltip title="Selected Camera">
                <MaterialCommunityIcons name="dumbbell" color={color} size={26} />
              </Tooltip>
            )
          }}
        />
        <Tab.Screen
          name="Progress"
          component={ProgressTab}
          options={{
            tabBarLabel: 'Progress',
            tabBarShowLabel: false,
            // tabBarShowLabel: true,
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="chart-line-variant" color={color} size={26} />
            )
          }}
        />
        <Tab.Screen
          name="Review"
          component={ReviewTab}
          options={{
            tabBarLabel: 'Review',
            tabBarShowLabel: false,
            // tabBarShowLabel: true,
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="clipboard-text" color={color} size={26} />
            )
          }}
        />
        <Tab.Screen
          name="Schedule"
          component={ScheduleTab}
          options={{
            tabBarLabel: 'Schedule',
            tabBarShowLabel: false,
            // tabBarShowLabel: true,
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="calendar-blank-outline" color={color} size={26} />
            )
          }}
        />
        <Tab.Screen
          name="Stats"
          component={Stats}
          options={{
            tabBarLabel: 'Stats',
            tabBarShowLabel: false,
            // tabBarShowLabel: true,
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account" color={color} size={26} />
            )
          }}
        />
        <Tab.Screen
          name="Account"
          component={Account}
          options={{
            tabBarLabel: 'Account',
            tabBarShowLabel: false,
            // tabBarShowLabel: true,
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="cog" color={color} size={26} />
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default TopTabPager;

const Programs = () => {
  return (
    <View>
      <Text color='#ffffff'>
        Programs
      </Text>
    </View>
  )
};

const Progress = () => {
  return (
    <View>
      <Text>
        Progress
      </Text>
    </View>
  )
};

const Review = () => {
  return (
    <View>
      <Text>
        Review
      </Text>
    </View>
  )
};

const Schedule = () => {
  return (
    <View>
      <Text>
        Schedule
      </Text>
    </View>
  )
};

const Stats = () => {
  return (
    <View>
      <Text>
        Stats
      </Text>
    </View>
  )
};

const Account = () => {
  return (
    <View>
      <Text>
        Account
      </Text>
    </View>
  )
};