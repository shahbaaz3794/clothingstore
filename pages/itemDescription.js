import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  FlatList,
} from 'react-native';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import {FlatListSlider} from 'react-native-flatlist-slider';
import ItemHeader from '../components/itemHeader';
import Icon from 'react-native-vector-icons/Ionicons';
import {itemSize} from '../components/cartData';

const ItemDescription = ({navigation}) => {
  const [selectedSize, setSelectedSize] = useState('');
  const insets = useSafeAreaInsets();

  const images = [
    {image: 'https://i.ibb.co/wdSdxkm/shirt1.webp'},
    {image: 'https://i.ibb.co/ryyWXVh/shirt2.webp'},
    {image: 'https://i.ibb.co/2crFKMm/shirt3.webp'},
    {image: 'https://i.ibb.co/1bZxvqj/shirt4.webp'},
  ];

  return (
    <>
      <ScrollView>
        <SafeAreaView>
          <ItemHeader navigation={navigation} />
          <View>
            <Icon
              name="ios-share-social-outline"
              size={30}
              color="black"
              style={{position: 'absolute', top: 10, right: 10, zIndex: 99}}
            />
            <FlatListSlider
              data={images}
              height={500}
              autoscroll={false}
              onPress={item => alert(JSON.stringify(item))}
              contentContainerStyle={{paddingBottom: 15}}
              indicatorContainerStyle={{position: 'absolute', bottom: 0}}
              indicatorActiveColor={'#05679E'}
              indicatorInActiveColor={'lightblue'}
              indicatorActiveWidth={15}
              loop={true}
              animation
            />
          </View>
          <View>
            <View style={{margin: 10}}>
              <Text
                style={{fontWeight: 'bold', color: '#696969', fontSize: 16}}>
                D-Brand
              </Text>
              <Text style={{fontSize: 14, color: '#808080'}}>
                Men Solid Black Polo T-Shirt
              </Text>
              <Text style={{}}>₹ 1500</Text>
            </View>
          </View>
          <View
            style={{
              borderTopColor: 'lightgrey',
              borderTopWidth: 1,
              borderBottomColor: 'lightgrey',
              borderBottomWidth: 1,
            }}>
            <View style={{marginHorizontal: 10, marginVertical: 15}}>
              <Text
                style={{fontWeight: 'bold', color: '#696969', fontSize: 14}}>
                Select Size
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 15,
                }}>
                {itemSize.map((item, index) => {
                  return (
                    <TouchableOpacity
                      key={index}
                      style={
                        selectedSize === item
                          ? {
                              borderRadius: 25,
                              borderColor: '#05679E',
                              borderWidth: 1,
                              height: 40,
                              minWidth: 40,
                              justifyContent: 'center',
                              alignItems: 'center',
                              backgroundColor: '#05679E',
                            }
                          : {
                              borderRadius: 25,
                              borderColor: 'grey',
                              borderWidth: 1,
                              height: 40,
                              minWidth: 40,
                              justifyContent: 'center',
                              alignItems: 'center',
                            }
                      }
                      onPress={() => setSelectedSize(item)}>
                      <Text
                        style={
                          selectedSize === item
                            ? {color: '#fff', paddingHorizontal: 10}
                            : {paddingHorizontal: 10}
                        }>
                        {item}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>
          </View>
          <View style={{borderBottomColor: 'lightgrey', borderBottomWidth: 1, marginBottom:60}}>
            <View style={{marginHorizontal: 10, marginVertical: 15}}>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: '#696969',
                  fontSize: 14,
                  marginBottom: 5,
                }}>
                Product Description
              </Text>
              <Text style={{fontSize: 14, color: '#808080'}}>
                Black color solid T-Shirt, has a polo collar neck,short sleeves
              </Text>
              <Text style={{fontSize: 14, color: '#808080'}}>100% cotton</Text>
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
      <View
        style={{
          flexDirection: 'row',
          position: 'absolute',
          bottom: 0,
          paddingBottom: insets.bottom,
          paddingTop: 10,
          backgroundColor: '#fff',
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: '#fff',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            height: 50,
            marginLeft: 10,
            marginRight: 5,
            borderRadius: 10,
            borderColor: '#05679E',
            borderWidth: 1,
          }}>
          <Text>Add to Wishlist</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: '#05679E',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            height: 50,
            marginLeft: 5,
            marginRight: 10,
            borderRadius: 10,
          }}>
          <Text style={{color: '#fff'}}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default ItemDescription;
