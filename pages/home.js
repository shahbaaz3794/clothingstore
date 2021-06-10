import React from 'react';
import {StyleSheet, ScrollView, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import HomeHeader from '../components/homeHeader';
import HomeCategoriesAvatar from '../components/homeCategoriesAvatar';
import HomeCarousel from '../components/homeCarousel';
import HomeContent from '../components/homeContent';
import {carouselImages} from '../components/carouselData';

const Home = ({navigation}) => {
  return (
    <SafeAreaView>
      <HomeHeader navigation={navigation} />
      <ScrollView>
        <HomeCategoriesAvatar />
        <HomeCarousel
          data={carouselImages}
        />
        <Text style={styles.headers}>Top Trending</Text>
        <HomeContent />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headers: {
    fontSize: 25,
    color: '#808080',
    marginLeft: 10,
    marginTop: 15,
  },
});

export default Home;
