import React, {useState, useEffect} from 'react';
import {StyleSheet, ScrollView, Text, View, Dimensions} from 'react-native';
import {Image, Tile} from 'react-native-elements';
import {ActivityIndicator} from 'react-native';

const HomeContent = () => {
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

  const carouselImages = [
    {
      title: 'Winter Collection 50% off',
      url: 'https://i.ibb.co/Jx7xqf4/pexels-august-de-richelieu-4427816.jpg',
    },
    {
      title: 'Sneakers Upto 30% off',
      url: 'https://i.ibb.co/GV08J9f/pexels-pixabay-267202.jpg',
    },
    {
      title: 'Explore the new collection of denims',
      url: 'https://i.ibb.co/sK92ZhC/pexels-karolina-grabowska-4210860.jpg',
    },
    {
      title: 'Latest Spring collection',
      url: 'https://i.ibb.co/FDwNR9d/img1.jpg',
    },
    {
      title: 'Active Wears Upto 40% off',
      url: 'https://i.ibb.co/7G5qqGY/1.jpg',
    },
  ];

  return (
    <>
      {carouselImages.map((value, key) => (
        <View key={key} style={styles.container}>
          <Image
            source={{uri: `${value.url}`}}
            style={{width: dimension?.width, height: 250}}
            PlaceholderContent={<ActivityIndicator />}
          />
          <View
            style={{
              position: 'absolute',
              alignItems: 'center',
              backgroundColor: 'rgba(25, 25, 25, 0.7)',
              bottom: 20,
              height: 40,
              justifyContent: 'center',
              paddingHorizontal: 10,
            }}>
            <Text
              style={{color: '#fff', fontWeight: 'bold', fontSize: 15}}>
              {value.title}
            </Text>
          </View>
        </View>
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
});

export default HomeContent;
