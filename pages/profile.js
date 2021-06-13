import React, {useState, useRef} from 'react';
import {Image} from 'react-native-elements';
import {
  Text,
  View,
  Alert,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import {SafeAreaView} from 'react-native-safe-area-context';
import HomeHeader from '../components/homeHeader';
import {ListItem} from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ImagePicker from 'react-native-image-crop-picker';
import EditProfile from '../components/editProfile';

const Profile = ({navigation}) => {
  const [imageSource, setImageSource] = useState(null);
  const imageBSheet = useRef();
  const editNameBSheet = useRef();
  const editPhoneBSheet = useRef();
  const editGenderBSheet = useRef();
  const editBdayBSheet = useRef();

  const selectImage = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      mediaType: 'photo',
    }).then(image => {
      // console.log(image);
      setImageSource(image.path);
      imageBSheet.current.close();
    });
  };

  const captureImage = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 300,
      useFrontCamera: true,
      cropping: true,
      mediaType: 'photo',
    }).then(image => {
      // console.log(image);
      setImageSource(image.path);
      imageBSheet.current.close();
    });
  };

  return (
    <ScrollView>
      <SafeAreaView>
        <HomeHeader navigation={navigation} />
        <TouchableOpacity
          style={{
            height: 150,
            width: 150,
            backgroundColor: 'lightblue',
            alignSelf: 'center',
            marginTop: 10,
            borderRadius: 75,
          }}
          onPress={() => imageBSheet.current.open()}>
          {imageSource === null ? (
            <Image
              source={require('../assets/profilePic.png')}
              style={{height: 150, width: 150, borderRadius: 75}}
              resizeMode="cover"
            />
          ) : (
            <Image
              source={{uri: imageSource}}
              style={{height: 150, width: 150, borderRadius: 75}}
              resizeMode="cover"
            />
          )}
        </TouchableOpacity>
        <RBSheet
          ref={imageBSheet}
          closeOnPressBack={true}
          closeOnPressMask={true}
          height={180}
          customStyles={{
            wrapper: {
              backgroundColor: 'transparent',
            },
          }}>
          <View>
            <ListItem bottomDivider onPress={() => selectImage()}>
              <Ionicons size={20} name="ios-images-outline" />
              <ListItem.Content>
                <ListItem.Title>Choose from Images</ListItem.Title>
              </ListItem.Content>
            </ListItem>
            <ListItem bottomDivider onPress={() => captureImage()}>
              <Ionicons size={20} name="ios-camera-outline" />
              <ListItem.Content>
                <ListItem.Title>Click a photo</ListItem.Title>
              </ListItem.Content>
            </ListItem>
            <ListItem bottomDivider onPress={() => setImageSource(null)}>
              <Ionicons size={20} name="ios-person-remove-outline" />
              <ListItem.Content>
                <ListItem.Title>Remove Profile Photo</ListItem.Title>
              </ListItem.Content>
            </ListItem>
          </View>
        </RBSheet>
        <View
          style={{
            backgroundColor: '#fff',
            margin: 10,
            borderColor: 'lightgrey',
            borderWidth: 1,
            paddingBottom: 25,
            borderRadius: 10,
          }}>
          <View style={styles.fieldContainer}>
            <Text style={styles.fieldTitle}>Shahbaaz</Text>
            <Ionicons
              size={20}
              style={{fontWeight: '900', color: '#05679E', marginRight: 10}}
              name="md-pencil"
              onPress={() => editNameBSheet.current.open()}
            />
            <EditProfile
              editNameBSheet={editNameBSheet}
              fieldTitle={'Name'}
              fieldValue={'Shahbaaz'}
            />
          </View>
          <View style={styles.fieldContainer}>
            <Text style={styles.fieldTitle}>8986480098</Text>
            <Ionicons
              size={20}
              style={{fontWeight: '900', color: '#05679E', marginRight: 10}}
              name="md-pencil"
              onPress={() => editPhoneBSheet.current.open()}
            />
            <EditProfile
              editPhoneBSheet={editPhoneBSheet}
              fieldTitle={'Phone Number'}
              fieldValue={'8986480098'}
            />
          </View>
          <View style={styles.fieldContainer}>
            <Text style={styles.fieldTitle}>Email</Text>
            {/* <Ionicons
            size={20}
            style={{fontWeight: '900', color: '#05679E', marginRight: 10}}
            name="md-pencil"
          /> */}
          </View>
          <View style={styles.fieldContainer}>
            <Text style={styles.fieldTitle}>Gender</Text>
            <Ionicons
              size={20}
              style={{fontWeight: '900', color: '#05679E', marginRight: 10}}
              name="md-pencil"
              onPress={() => editGenderBSheet.current.open()}
            />
            <EditProfile
              editGenderBSheet={editGenderBSheet}
              fieldTitle={'Gender'}
              fieldValue={'Male'}
            />
          </View>
          <View style={styles.fieldContainer}>
            <Text style={styles.fieldTitle}>Birthday</Text>
            <Ionicons
              size={20}
              style={{fontWeight: '900', color: '#05679E', marginRight: 10}}
              name="md-pencil"
              onPress={() => editBdayBSheet.current.open()}
            />
            <EditProfile
              editBdayBSheet={editBdayBSheet}
              fieldTitle={'Birthday'}
              fieldValue={new Date('1995-07-03')}
            />
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: '#05679E',
              justifyContent: 'center',
              alignItems: 'center',
              height: 40,
              borderRadius: 10,
              width: 200,
              alignSelf: 'center',
              marginTop: 25,
            }}>
            <Text style={{color: '#fff'}}>Change Password</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  fieldContainer: {
    borderColor: 'lightblue',
    borderWidth: 2,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 25,
    marginHorizontal: 15,
    borderRadius: 10,
  },
  fieldTitle: {
    color: '#05679E',
    marginLeft: 10,
  },
});

export default Profile;
