import * as React from 'react';
import { AnimatedTabBarNavigator } from "react-native-animated-nav-tab-bar";
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../src/screens/HomeScreen';
import ReminderList from '../src/screens/ReminderList';
import ChatScreen from '../src/screens/ChatScreen';
import tab from './tab';
import styles from '../constants/Styles';
import LoginScreen from '../src/screens/LoginScreen';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Colors from '../constants/Colors';

const BottomTab = createMaterialBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });
  return (
    <BottomTab.Navigator
      initialRouteName={INITIAL_ROUTE_NAME}
      activeColor={Colors.white}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: Colors.secondary,
          tabBarIcon: ({ focused }) => (
            <TabBarIcon name="md-home" focused={focused}size={30} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Lembretes"
        component={ReminderList}
        options={{
          tabBarLabel: 'Lembretes',
          tabBarColor: Colors.blue,
          tabBarIcon: ({ focused }) => (
            <TabBarIcon name="md-mail-unread" focused={focused} size={30} />
          ),
        }}
      />
      <BottomTab.Screen
        name="M. de Saúde"
        component={HomeScreen}
        options={{
          tabBarLabel: 'M. de Saúde',
          tabBarColor: Colors.secondary,
          tabBarIcon: ({ focused }) => (
            <TabBarIcon name="md-pulse" focused={focused} size={30} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Canal Aberto"
        component={ChatScreen}
        options={{
          tabBarLabel: 'Canal Aberto',
          tabBarColor: Colors.blue,
          tabBarIcon: ({ focused }) => (
            <TabBarIcon name="ios-chatboxes" focused={focused} size={30} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}
/*
const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator 
      initialRouteName={INITIAL_ROUTE_NAME}
      tabBarComponent={{tab}}
      >
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-home" />,
        }}
      />
      <BottomTab.Screen
        name="Lembretes"
        component={ReminderList}
        options={{
          title: 'Lembretes',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-mail-unread" />,
        }}
      />
      <BottomTab.Screen
        name="M. de Saúde"
        component={HomeScreen}
        options={{
          title: 'M. de Saúde',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-pulse" />,
        }}
      />
      <BottomTab.Screen
        name="Canal Aberto"
        component={ChatScreen}
        options={{
          title: 'Canal Aberto',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-chatboxes" />,
        }}
      />
    </BottomTab.Navigator>
  );
}
*/
function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Meus Dados':
      return 'Meus Dados';
    case 'Lembretes':
      return 'Lembretes';
    case 'M. de Saúde':
      return 'Medidas de Saude';
    case 'Canal Aberto':
      return 'Canal Aberto';
  }
}
