import { auth, db } from './firebaseinit';
import { saveAuthToCookie, saveUserToCookie } from '@/composable/cookies';

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
    await db.collection('users').doc(email).set(user);
    saveUserToCookie(email);
    saveAuthToCookie(email);
  } catch (error) {
    console.error(error);
  }
};

export const fbLoginUser = async (data: { email: string; pw: string }) => {
  try {
    const res = await auth.signInWithEmailAndPassword(data.email, data.pw);
    console.log(res.user?.email);
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

export const fbLogout = async () => {
  await auth.signOut();
};

export const fbGetUserInfo = async () => {
  const email = await fbIsLoggedIn();
  const res = await db.collection('users').doc(email).get();
  return res.data();
};

export const fbUpdateInfo = async (data: any) => {
  const email = await fbIsLoggedIn();
  await db.collection('users').doc(email).update(data);
};
