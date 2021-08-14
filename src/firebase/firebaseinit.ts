import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';

const config = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_FIREBASE_APP_ID,
};

const app = firebase.initializeApp(config);

export const auth = app.auth();

export const db = app.firestore();

export const storage = app.storage();

export async function getThumbnail(dealiName: any) {
  const { items } = await firebase
    .storage()
    .ref(`thumbnail/${dealiName}`)
    .listAll();
  let thumbnaills: any = [];
  items.map((i) => {
    const { fullPath } = i;
    thumbnaills.push({
      url: firebase.storage().ref(fullPath).getDownloadURL(),
      fullPath,
    });
  });
  return thumbnaills;
}

export async function getOneThumbnail(dealiName: any) {
  const url = await firebase
    .storage()
    .ref(`thumbnail/${dealiName}`)
    .getDownloadURL();

  return url;
}
// 파일 넣기
export const uploadFile = async (dealiName: any, file: any) => {
  const ref = await firebase
    .storage()
    .ref(`thumbnail/${dealiName}/${file.name + file.lastModified}`)
    .put(file)
    .on(
      'state_changed',
      (snapshot) => {
        console.log(snapshot);
      },
      (error) => {
        console.log(error);
      },
      () => {
        console.log('성공');
      }
    );
  console.log(ref);
  return;
};
// 파일 삭제
export function deleteFile(fullPath: any) {
  return firebase.storage().ref(fullPath).delete();
}
