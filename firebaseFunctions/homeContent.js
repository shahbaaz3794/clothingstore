import firestore from '@react-native-firebase/firestore';

export async function firbaseGetHomeContent() {
  try {
    var data = [];
    const array = await firestore().collection('homeContent');
    const snapshot = await array.get();
    snapshot.forEach(doc => {
      data.push(doc.data());
    });
    return data;
  } catch (err) {
    throw err;
  }
}
