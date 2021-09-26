import React, {useState, useEffect} from 'react';
import {StyleSheet, ScrollView, Text, View, Dimensions} from 'react-native';
import {Image, Tile} from 'react-native-elements';
import {ActivityIndicator} from 'react-native';
import {useAppDispatch} from '../redux/store';
import {useSelector} from 'react-redux';
import {getHomeContent} from '../redux/slices/homeContentSlice';

const HomeContent = () => {
  const [dimension, setDimension] = useState(Dimensions.get('window'));
  const dispatch = useAppDispatch();

  const homeContentData = useSelector(
    state => state.homeContent.homeContentArray,
  );

  useEffect(() => {
    dispatch(getHomeContent());
  }, []);

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
    <>
      {homeContentData.length > 0 &&
        homeContentData.map((content, index) => (
          <View key={index} style={styles.container}>
            <Image
              source={{uri: `${content.imageUrl}`}}
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
              <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 15}}>
                {content.title}
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
