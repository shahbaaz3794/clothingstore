import firestore from '@react-native-firebase/firestore';

export async function firbaseGetCategories() {
  try {
    var data = [];
    const array = await firestore().collection('categoryData');
    const snapshot = await array.get();
    snapshot.forEach(doc => {
      data.push(doc.data());
    });
    return data;
  } catch (err) {
    throw err;
  }
}
