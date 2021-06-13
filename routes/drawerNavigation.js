import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawerContent from '../components/drawerContent';
import BottomNavigation from './bottomNavigation';
import Categories from '../pages/categories';
import MyOrders from '../pages/myOrders';
import ContactUs from '../pages/contactUs';
import ItemList from '../pages/itemList';

const DrawerNavigation = () => {
  const Drawer = createDrawerNavigator();

  return (
    <>
      <Drawer.Navigator
        initialRouteName="Bottom Tab"
        drawerContent={props => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name="Bottom Tab" component={BottomNavigation} />
        <Drawer.Screen name="Categories" component={Categories} />
        <Drawer.Screen name="My Orders" component={MyOrders} />
        <Drawer.Screen name="Contact Us" component={ContactUs} />
      </Drawer.Navigator>
    </>
  );
};

export default DrawerNavigation;
