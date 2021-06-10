import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import HomeHeader from '../components/homeHeader';
import {categoryData} from '../components/categoriesData';

const Categories = ({navigation}) => {
  const [catState, setCatState] = useState({});
  const [subCatState, setSubCatState] = useState({});

  return (
    <ScrollView>
      <SafeAreaView style={styles.categoryContainer}>
      <HomeHeader navigation={navigation} />
        {categoryData?.map(item => {
          return (
            <>
              <TouchableOpacity
                onPress={()=>{setCatState({...catState,[item.gender]:catState[item.gender]===true?false:true})}}
                style={styles.categoryTitle}>
                <View style={styles.titleLeft}>
                  <Ionicons
                    style={{marginLeft: 5}}
                    name={item.genderIcon}
                    size={30}
                    color="grey"
                  />
                  <Text style={{fontSize:20,fontWeight:'bold',marginLeft:10}}>{item.gender}</Text>
                </View>
                <MaterialIcons
                  style={{marginRight: 8}}
                  name="keyboard-arrow-down"
                  size={15}
                  color="grey"
                />
              </TouchableOpacity>
              {item?.category?.map(value => {
                return (
                  <>
                    <TouchableOpacity
                      onPress={()=>setSubCatState({...subCatState,[value.catId]:subCatState[value.catId]===true?false:true})}
                      style={catState[item.gender]? styles.categoryContent:styles.catContentClose}>
                      <Text style={{marginLeft: 8}}>{value.catName}</Text>
                      <MaterialIcons
                        style={{marginRight: 8}}
                        name="keyboard-arrow-down"
                        size={15}
                        color="grey"
                      />
                    </TouchableOpacity>
                    {value?.subCategory?.map(val => {
                      return (
                        <TouchableOpacity
                          onPress={()=>navigation.navigate('ItemPage')}
                          style={catState[item.gender] && subCatState[value.catId]? styles.categorySubContent:styles.subCatClose}>
                          <Text style={{marginLeft: 8}}>{val.subCatName}</Text>
                        </TouchableOpacity>
                      );
                    })}
                  </>
                );
              })}
            </>
          );
        })}
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  categoryTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#efdfbb',
    height: 100,
    borderRadius: 10,
  },
  titleLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    backgroundColor: '#fff',
  },
  catContentClose:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 0,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    backgroundColor: '#fff',
  },
  categorySubContent: {
    justifyContent: 'center',
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
  },
  subCatClose:{
    justifyContent: 'center',
    height: 0,
  }
});

export default Categories;
