import React, {useState, useEffect} from 'react';
import {Text, View, FlatList, TouchableOpacity, Dimensions} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import HomeHeader from '../components/homeHeader';
import {DATA} from '../components/wishListData';
import WishListItem from '../components/wishListItem';

const WishList = ({navigation}) => {
  const [dimension, setDimension] = useState(Dimensions.get('window'));

  const onChange = () => {
    setDimension(Dimensions.get('window'));
  };

  useEffect(() => {
    Dimensions.addEventListener('change', onChange);
    return () => {
      Dimensions.removeEventListener('change', onChange);
    };
  });

  return (
    <SafeAreaView>
      <HomeHeader navigation={navigation} />
      {dimension.width > dimension.height ? 
      <FlatList
        data={DATA}
        renderItem={({item}) => (
          <WishListItem item={item} columns={'3'} />
        )}
        numColumns={3}
        keyExtractor={(index) => 'wide' + index}
        key={'wide'}
      /> : 
      <FlatList
        data={DATA}
        renderItem={({item}) => (
          <WishListItem item={item} columns={'2'} />
        )}
        numColumns={2}
        keyExtractor={(index) => 'narrow' + index}
        key={'narrow'}
      />}
    </SafeAreaView>
  );
};

export default WishList;
