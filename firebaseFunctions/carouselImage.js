import firestore from '@react-native-firebase/firestore';

export async function firbaseGetCarouselImages() {
  try {
    var data = [];
    const array = await firestore().collection('carouselImages');
    const snapshot = await array.get();
    snapshot.forEach(doc => {
      data.push(doc.data());
    });
    return data;
  } catch (err) {
    throw err;
  }
}
