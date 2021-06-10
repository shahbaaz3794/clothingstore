import React, {useState} from 'react';
import {
  Text,
  View,
  Alert,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import DatePicker from 'react-native-date-picker';

const EditProfile = ({
  editNameBSheet,
  editPhoneBSheet,
  editGenderBSheet,
  editBdayBSheet,
  fieldValue,
  fieldTitle,
}) => {

  const [fieldVal, setfieldVal] = useState(fieldValue);
  // const [date, setDate] = useState(new Date())

  console.log(fieldVal, 'dddd');

  return (
    <>
      <RBSheet
        ref={editNameBSheet || editPhoneBSheet || editGenderBSheet || editBdayBSheet}
        closeOnPressBack={true}
        closeOnPressMask={true}
        height={editBdayBSheet? 350 : 200}
        customStyles={{
          wrapper: {
            backgroundColor: 'transparent',
          },
        }}>
        <View style={{borderTopColor: 'lightblue', borderTopWidth: 2}}>
          {(editNameBSheet ||
            editPhoneBSheet) && 
              <TextInput
                onChangeText={text => setfieldVal(text)}
                value={fieldVal}
                placeholder={fieldTitle}
                keyboardType={
                  fieldTitle === 'Phone Number' ? 'phone-pad' : 'default'
                }
                placeholderTextColor="grey"
                autoCapitalize="none"
                style={{
                  height: 40,
                  borderColor: '#05679E',
                  borderWidth: 2,
                  marginTop: 25,
                  borderRadius: 10,
                  paddingHorizontal: 10,
                  color: '#05679E',
                  fontSize: 15,
                  marginHorizontal: 15,
                }}
              />
            }
          {editGenderBSheet && 
            <View
              style={{
                flexDirection: 'row',
                borderRadius: 10,
                alignSelf: 'center',
                marginTop: 25,
              }}>
              <TouchableOpacity
                style={
                  fieldVal === 'Male'
                    ? styles.genderButtonSelected
                    : styles.genderButton
                }
                onPress={() => setfieldVal('Male')}>
                <Text
                  style={
                    fieldVal === 'Male'
                      ? styles.genderTextSelected
                      : styles.genderText
                  }>
                  Male
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  fieldVal === 'Female'
                    ? styles.genderButtonSelected
                    : styles.genderButton
                }
                onPress={() => setfieldVal('Female')}>
                <Text
                  style={
                    fieldVal === 'Female'
                      ? styles.genderTextSelected
                      : styles.genderText
                  }>
                  Female
                </Text>
              </TouchableOpacity>
            </View>
          }
          {editBdayBSheet && 
            <View style={{alignItems:'center'}}>
              <DatePicker
                date={fieldVal}
                onDateChange={setfieldVal}
                mode="date"
                androidVariant="nativeAndroid"
              />
            </View>
          }
          <TouchableOpacity
            style={{
              backgroundColor: '#05679E',
              height: 40,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
              marginHorizontal: 15,
              marginTop: 15,
            }}>
            <Text style={{color: '#fff'}}>Done</Text>
          </TouchableOpacity>
        </View>
      </RBSheet>
    </>
  );
};

const styles = StyleSheet.create({
  genderButton: {
    backgroundColor: 'lightblue',
    width: 100,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  genderButtonSelected: {
    backgroundColor: '#05679E',
    width: 100,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  genderText: {
    color: '#05679E',
  },
  genderTextSelected: {
    color: '#fff',
  },
});

export default EditProfile;
