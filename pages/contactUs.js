import React from 'react';
import {Text, View, TouchableOpacity, FlatList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import HomeHeader from '../components/homeHeader';

const ContactUs = ({navigation}) => {
  return (
    <SafeAreaView>
      <HomeHeader navigation={navigation} />
    </SafeAreaView>
  );
};

export default ContactUs;
