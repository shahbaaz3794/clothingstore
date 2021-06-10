import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {DrawerActions} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';

function HomeHeader({navigation}) {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.leftContainer}>
        <TouchableOpacity
          style={styles.drawerIconContainer}
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
          <Ionicons
            name="menu"
            size={27}
          />
        </TouchableOpacity>
        <Fontisto
          name="shopify"
          style={{marginLeft: 8}}
          size={27}
          color="#05679E"
        />
        <Text style={styles.headerText}>Clothing Store</Text>
      </View>
      <View style={styles.rightContainer}>
        <Ionicons name="search-outline" size={27} />
        <Ionicons
          style={{marginLeft: 10}}
          name="notifications-outline"
          size={27}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'lightblue',
    paddingTop: 10,
    paddingBottom: 10,
  },
  leftContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 5,
  },
  rightContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 5,
  },
});

export default HomeHeader;
