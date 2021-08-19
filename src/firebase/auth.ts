import { auth, db } from './firebaseinit';
import {
  saveAuthToCookie,
  saveUserToCookie,
  getUserFromCookie,
} from '@/composable/cookies';

import dayjs from 'dayjs';
interface userDTO {
  authType: string;
  email: string;
  name: string;
  profile: string;
  id: string;
  pw: string;
  nickname: string;
  address: string;
  p_number: string;
  hit: number;
  lat: number;
  lon: number;
  birth: string;
  gender: string;
}

export const fbCretaeUser = async (data: userDTO) => {
  try {
    const { email, pw, ...user } = data;
    await auth.createUserWithEmailAndPassword(email, pw);
    await db
      .collection('users')
      .doc(email)
      .collection('data')
      .doc('userinfo')
      .set(user);
    saveUserToCookie(email);
    saveAuthToCookie(email);
  } catch (error) {
    console.error(error);
  }
};

export const fbGetUserJoinList = async () => {
  try {
    const joinList: any = [];
    const res = await db
      .collection('users')
      .doc(getUserFromCookie())
      .collection('Joinlist')
      .where('date', '>=', `${dayjs().format('YYYY-MM-DD')}`)
      .orderBy('date');

    await res.onSnapshot(async (snapshot) => {
      await snapshot.docChanges().forEach(async (change) => {
        let doc = change.doc;
        let name = await fbIsName(doc.data().hostid);

        joinList.push({
          id: doc.id,
          date: doc.data().date,
          hostid: doc.data().hostid,
          hostname: name,
          time: doc.data().time,
          title: doc.data().title,
          totalcount: doc.data().totalcount,
          type: doc.data().type,
        });
      });
    });
    return joinList;
  } catch (error) {
    console.error(error);
  }
};

export const fbAddJoinName = async (id: string, data: any) => {
  try {
    await db
      .collection('users')
      .doc(getUserFromCookie())
      .collection('Joinlist')
      .doc(id)
      .set(data);
  } catch (error) {
    console.error(error);
  }
};

export const fbLoginUser = async (data: { email: string; pw: string }) => {
  try {
    const res = await auth.signInWithEmailAndPassword(data.email, data.pw);
    if (res.user?.email) {
      saveUserToCookie(res.user?.email);
      saveAuthToCookie(res.user?.email);
    }
  } catch (error) {
    console.error(error);
  }
};

export const fbIsLoggedIn = async () => {
  let username: string | null = '';
  await auth.onAuthStateChanged((user) => {
    if (user) {
      saveUserToCookie(user.email + '');
      saveAuthToCookie(user.email + '');
      username = user.email;
    }
    return false;
  });
  return username;
};

export const fbIsName = async (id: string) => {
  const res = await db
    .collection('users')
    .doc(id)
    .collection('data')
    .doc('userinfo')
    .get();
  return res.data()?.nickname;
};

export const fbLogout = async () => {
  await auth.signOut();
};

export const fbGetUserInfo = async () => {
  const email = await fbIsLoggedIn();
  const res = await db
    .collection('users')
    .doc(email)
    .collection('data')
    .doc('userinfo')
    .get();
  return res.data();
};

export const fbUpdateInfo = async (data: any) => {
  const email = await fbIsLoggedIn();
  await db
    .collection('users')
    .doc(email)
    .collection('data')
    .doc('userinfo')
    .update(data);
};
