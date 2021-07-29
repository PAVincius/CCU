import * as React from 'react';
import { AnimatedTabBarNavigator } from "react-native-animated-nav-tab-bar";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Colors from '../../constants/Colors';

import TabBarIcon from '../../components/TabBarIcon';
import tab from '../../navigation/tab';
import styles from '../../constants/Styles';
import PersonalInformation from '../../components/forms/PersonalInformation';
import Contact from '../../components/forms/Contact';
import Adress from '../../components/forms/Adress';
import AdressLab from '../../components/forms/AdressLab';

const MydataTab = createMaterialBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Info Pessoais';

export default function MydataScreen({ navigation, route }) {
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });
  return (
    <MydataTab.Navigator
      initialRouteName={INITIAL_ROUTE_NAME}
      activeColor={Colors.white}
    >
      <MydataTab.Screen
        name="Info Pessoais"
        component={PersonalInformation}
        options={{
          tabBarLabel: 'Info Pessoais',
          tabBarColor: Colors.secondary,
          tabBarIcon: ({ focused }) => (
            <TabBarIcon name="md-person" focused={focused}size={30} />
          ),
        }}
      />
      <MydataTab.Screen
        name="Endereco"
        component={Adress}
        options={{
          tabBarLabel: 'Endereço',
          tabBarColor: Colors.blue,
          tabBarIcon: ({ focused }) => (
            <TabBarIcon name="md-business" focused={focused} size={30} />
          ),
        }}
      />
      <MydataTab.Screen
        name="Contato"
        component={Contact}
        options={{
          tabBarLabel: 'Contato',
          tabBarColor: Colors.secondary,
          tabBarIcon: ({ focused }) => (
            <TabBarIcon name="md-call" focused={focused} size={30} />
          ),
        }}
      />
      <MydataTab.Screen
        name="Laboratório"
        component={AdressLab}
        options={{
          tabBarLabel: 'Laboratótio',
          tabBarColor: Colors.blue,
          tabBarIcon: ({ focused }) => (
            <TabBarIcon name="md-flask" focused={focused} size={30} />
          ),
        }}
      />
    </MydataTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Info Pessoais':
      return 'Info Pessoais';
    case 'Endereco':
      return 'Endereco';
    case 'Contato':
      return 'Contato';
    case 'Laboratório':
      return 'Laboratório';
  }
}
