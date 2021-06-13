import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from '../pages/splash';
import Login from '../pages/login';
import SignUp from '../pages/signUp';
import DrawerNavigation from './drawerNavigation';
import ItemList from '../pages/itemList';
import ItemDescription from '../pages/itemDescription';

const Routes = () => {
  const Stack = createStackNavigator();
  return (
    <>
      <NavigationContainer independent={true} initialRouteName="Splash">
        <Stack.Navigator>
          <Stack.Screen
            name="Splash"
            component={Splash}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Drawer"
            component={DrawerNavigation}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ItemPage"
            component={ItemList}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ItemDescriptionPage"
            component={ItemDescription}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Routes;
