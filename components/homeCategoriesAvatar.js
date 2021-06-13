import React from 'react';
import {StyleSheet, ScrollView, Text, View} from 'react-native';
import {Avatar} from 'react-native-elements';
import men from '../assets/men.jpeg';
import women from '../assets/women.jpeg';
import kids from '../assets/kids.jpeg';
import offers from '../assets/offers.png';
import newArrival from '../assets/newArrival.jpeg';

function HomeCategoriesAvatar() {
  return (
    <View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.horizontalScrollBar}>
        {/* men */}

        <View style={styles.categoryItems}>
          <View>
            <Avatar
              size="large"
              // icon={{name: 'user', type: 'font-awesome'}}
              rounded
              // onPress={console.log('view DP')}
              source={men}
            />
          </View>
          <Text>Men</Text>
        </View>

        {/* women */}

        <View style={styles.categoryItems}>
          <View>
            <Avatar
              size="large"
              icon={{name: 'user', type: 'font-awesome'}}
              rounded
              // onPress={console.log('view DP')}
              source={women}
            />
          </View>
          <Text>Women</Text>
        </View>

        {/* kids */}

        <View style={styles.categoryItems}>
          <View>
            <Avatar
              size="large"
              icon={{name: 'user', type: 'font-awesome'}}
              rounded
              // onPress={console.log('view DP')}
              source={kids}
            />
          </View>
          <Text>Kids</Text>
        </View>

        {/* offers */}

        <View style={styles.categoryItems}>
          <View>
            <Avatar
              size="large"
              icon={{name: 'user', type: 'font-awesome'}}
              rounded
              // onPress={console.log('view DP')}
              source={offers}
            />
          </View>
          <Text>Offers</Text>
        </View>

        {/* newArrival */}

        <View style={styles.categoryItems}>
          <View>
            <Avatar
              size="large"
              icon={{name: 'user', type: 'font-awesome'}}
              rounded
              // onPress={console.log('view DP')}
              source={newArrival}
            />
          </View>
          <Text>New Arrivals</Text>
        </View>
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
