import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {SafeAreaView} from 'react-native-safe-area-context';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Splash = ({navigation}) => {

  useEffect(() => {
    setTimeout(async() => {
      const currentUser = await AsyncStorage.getItem('currentUser');
      if (currentUser!==null) {
        navigation.replace('Drawer')
      } else{
        navigation.replace('Login')
      }
    }, 3000);
  }, []);

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View>
          <Fontisto
            name="shopify"
            style={{}}
            size={100}
            color="#fff"
          />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#05679E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  splashText: {
    color: '#fff',
    fontSize: 40,
  },
});

export default Splash;
