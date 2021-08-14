import { auth, db } from './firebaseinit';

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

export const cretaeUser = async (data: userDTO) => {
  try {
    const { email, pw, ...user } = data;
    await auth.createUserWithEmailAndPassword(email, pw);
    await db.collection('users').doc(email).set(user);
  } catch (error) {
    console.log('이미 존재하는 아이디입니다. email', error);
  }
};
