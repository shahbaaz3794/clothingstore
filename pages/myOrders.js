import React,{useState} from 'react';
import {Text, View, TouchableOpacity, FlatList, Dimensions} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import HomeHeader from '../components/homeHeader';
import {Image} from 'react-native-elements';

const MyOrders = ({navigation}) => {

  return (
    <SafeAreaView>
      <HomeHeader navigation={navigation} />
      <View style={{marginTop: 15, backgroundColor: '#fff'}}>
        <View style={{flexDirection: 'row', padding: 10}}>
          <Image
            style={{height: 150, width: 100, resizeMode: 'stretch'}}
            source={{
              uri: 'https://i.ibb.co/5cDjt6d/pexels-bogdan-glisik-1661471.jpg',
            }}
          />
          <View style={{padding: 10,flex:1}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent:'space-between'
              }}>
              <Text style={{fontWeight: 'bold', color: 'black', fontSize: 15}}>
                Title
              </Text>
            <Text style={{color: 'grey'}}>Order ID: 02938</Text>
            </View>
            <Text style={{fontSize: 13, color: '#808080', marginTop: 3}}>
              subTitle
            </Text>
            <View style={{flexDirection: 'row', marginTop: 7}}>
              <Text style={{fontWeight: 'bold', fontSize: 14}}>Size:</Text>
              <Text style={{fontWeight: 'bold', fontSize: 14}}>Qty:</Text>
            </View>
            <Text style={{marginTop: 7}}>₹ 5000</Text>
            <Text style={{fontSize: 13, color: '#808080', marginTop: 5}}>
              delivery details asbahs euabracka dabra andbnu dhrh with this tetsunbfhhsbdj jdh hjdj 
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            borderTopColor: 'lightgrey',
            borderTopWidth: 0.5,
          }}>
          <TouchableOpacity
            style={{
              flex: 1,
              alignItems: 'center',
              height: 30,
              justifyContent: 'center',
            }}>
            <Text style={{color: 'grey', fontWeight: 'bold'}}>
              CANCEL ORDER
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              alignItems: 'center',
              height: 30,
              justifyContent: 'center',
              borderLeftColor: 'lightgrey',
              borderLeftWidth: 0.5,
            }}>
            <Text style={{color: 'grey', fontWeight: 'bold'}}>RETURN</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MyOrders;
