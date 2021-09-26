import React, {useEffect} from 'react';
import {StyleSheet, ScrollView, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import HomeHeader from '../components/homeHeader';
import HomeCategoriesAvatar from '../components/homeCategoriesAvatar';
import HomeCarousel from '../components/homeCarousel';
import HomeContent from '../components/homeContent';
import {FlatListSlider} from 'react-native-flatlist-slider';
import {getCarouselImages} from '../redux/slices/carouselImagesSlice';
import {useAppDispatch} from '../redux/store';
import {useSelector} from 'react-redux';

const Home = ({navigation}) => {
  const dispatch = useAppDispatch();

  const carouselData = useSelector(state => state?.carouselImages?.imageArray);

  useEffect(() => {
    dispatch(getCarouselImages());
  }, []);

  return (
    <SafeAreaView>
      <HomeHeader navigation={navigation} />
      <ScrollView>
        <HomeCategoriesAvatar />
        {carouselData.length > 0 ? (
          <FlatListSlider
            data={carouselData}
            height={250}
            autoscroll={true}
            timer={10000}
            loop={true}
            onPress={item => alert(JSON.stringify(item))}
            contentContainerStyle={{paddingBottom: 15}}
            indicatorContainerStyle={{position: 'absolute', bottom: 0}}
            indicatorActiveColor={'#05679E'}
            indicatorInActiveColor={'lightblue'}
            indicatorActiveWidth={15}
            animation
          />
        ): <View style={{height:250, backgroundColor: "lightgrey"}}>

          </View>}
        {/* <HomeCarousel
          data={carouselImages}
        /> */}
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
