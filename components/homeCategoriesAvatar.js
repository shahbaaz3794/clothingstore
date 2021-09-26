import React, {useEffect} from 'react';
import {StyleSheet, ScrollView, Text, View} from 'react-native';
import {Avatar} from 'react-native-elements';
import {useAppDispatch} from '../redux/store';
import {useSelector} from 'react-redux';
import {getHomeCategories} from '../redux/slices/homeCategoriesSlice';

function HomeCategoriesAvatar() {
  const dispatch = useAppDispatch();

  const homeCategoriesData = useSelector(
    state => state.homeCategories.homeCategoriesArray,
  );

  useEffect(() => {
    dispatch(getHomeCategories());
  }, []);

  return (
    <View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.horizontalScrollBar}>
        {homeCategoriesData.length > 0 &&
          homeCategoriesData.map((category, index) => (
            <View key={index} style={styles.categoryItems}>
              <View>
                <Avatar
                  size="large"
                  overlayContainerStyle={{backgroundColor: 'darkgrey'}}
                  icon={{name: 'user', type: 'font-awesome'}}
                  rounded
                  // onPress={console.log('view DP')}
                  source={{uri: category.imageUrl}}
                />
              </View>
              <Text>{category.categoryName}</Text>
            </View>
          ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  horizontalScrollBar: {
    display: 'flex',
    flexDirection: 'row',
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 2,
  },
  categoryItems: {
    margin: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeCategoriesAvatar;
