import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View, ActivityIndicator } from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { styled } from 'styled-components';

//Screens
import SplashScreen from './src/screens/SplashScreen';
import LoginScreen from './src/screens/LoginScreen';
import Terms from './src/screens/Terms';
import Reminder from './src/screens/Reminder';
import ReminderList from './src/screens/ReminderList';

import useCachedResources from './hooks/useCachedResources';
//import ThemeContext from './assets/context/ThemeContext';
import DrawerNavigator from './navigation/DrawerNavigator';
import { StoreProvider } from './src/store';
import { useStore } from './src/store';
import FirstAcess from './src/screens/FirstAcess';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#595cff',
  },
  fontSize: {
    ...DefaultTheme.fontSize,
    medium: 12,
    big: 12,
    giant: 30,
  },
  chatTime: {
    ...DefaultTheme.chatTime,
    medium: 12,
    big: 18,
    giant: 18,
  },
};

const Loading = () =>{
    styled(ActivityIndicator)`
      flex: 1;
      color: #43bc70;
    `
} 

const Router = () => {
  const [store] = useStore();

  if(!store.rehydrated) {
      return <Loading/>
  }

  return store.auth ? <DrawerNavigator/> : <LoginScreen/>
}

const Stack = createStackNavigator();

export default function App() {
  const isLoadingComplete = useCachedResources();
  //const themeHook = useState("light");

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <StoreProvider>
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
        <PaperProvider theme={theme}>
          <NavigationContainer>
            <Stack.Navigator initialRouteName={SplashScreen}>
              <Stack.Screen options={{headerShown: false}} name="SplashScreen" component={SplashScreen}/>
              <Stack.Screen options={{headerShown: false}} name="Terms" component={Terms}/>
              <Stack.Screen options={{headerShown: false}} name="Auth" component={Router} />
              <Stack.Screen options={{headerShown: false}} name="Reminder" component={Reminder} />
              <Stack.Screen options={{headerShown: false}} name="ReminderList" component={ReminderList} />
              <Stack.Screen options={{headerShown: false}} name="FirstAcess" component={FirstAcess} />
            </Stack.Navigator>
          </NavigationContainer>
        </PaperProvider>
      </View>
      </StoreProvider>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
