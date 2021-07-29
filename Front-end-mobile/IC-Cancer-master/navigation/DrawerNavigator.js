import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import MydataScreen from '../src/screens/MydataScreen';
import BottomTabNavigator from './BottomTabNavigator';
import CustomDrawer from '../components/CustomDrawer';

const Drawer = createDrawerNavigator();
const initial_route = 'Root';

export default function DrawerNavigator(){
    return(
        <NavigationContainer independent={true}>
            <Drawer.Navigator 
                initialRouteName={initial_route}
                drawerContent={(props) => <CustomDrawer {...props} />}
            >
                <Drawer.Screen name="Home" component={BottomTabNavigator} />
                <Drawer.Screen name="Alterar Meus Dados" component={MydataScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}