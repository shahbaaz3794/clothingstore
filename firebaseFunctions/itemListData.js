import firestore from '@react-native-firebase/firestore';

export async function firbaseGetItemListData(gender,categoryName) {
  try {
    var data = [];
    const array = firestore().collection(`${categoryName}`);
    const snapshot = await array.where('gender', '==', `${gender.toLowerCase()}`).get();
    if (snapshot.empty) {
      console.log('No matching documents.');
      return;
    }
    snapshot.forEach(doc => {
      data.push(doc.data());
    });
    return data;
  } catch (err) {
    throw err;
  }
}
