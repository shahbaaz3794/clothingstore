import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import WishList from '../pages/wishList';
import Home from '../pages/home';
import Cart from '../pages/cart';
import Profile from '../pages/profile';
import BottomtabContent from '../components/bottomtabContent';

function BottomNavigation() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBar={props => <BottomtabContent {...props} />}>
      <Tab.Screen name="Home" component={Home} options={{headerShown: true}} />
      <Tab.Screen name="Wishlist" component={WishList} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

export default BottomNavigation;
