import { auth, db } from '@/api/serverless/firesbaseinit';
import { saveAuthToCookie, saveUserToCookie } from '@/composable/cookies';
import { signupDTO, loginDTO } from '@/api/dto/authTypes';

const fbSignup = async (data: signupDTO) => {
  try {
    const { email, pw, ...user } = data;
    const alreadyid = await fbIsId(data.id);

    const alreadyNickName = await fbIsNickname(data.nickname);

    if (alreadyid.size > 0 || alreadyNickName.size > 0) {
      return [alreadyid.size > 0, alreadyNickName.size > 0];
    }
    await auth.createUserWithEmailAndPassword(email, pw);
    await db.collection('users').doc(email).set(user);

    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

const fbLogin = async (data: loginDTO) => {
  try {
    const res = await db.collection('users').doc(data.id).get();
    const userInfo = res.data();
    if (userInfo) {
      await auth.signInWithEmailAndPassword(data.id, data.pw);
      saveAuthToCookie(data.id);
      saveUserToCookie(JSON.stringify(userInfo));
      return true;
    }
    return false;
  } catch (error) {
    return false;
  }
};

const fbLogout = async () => {
  try {
    return await auth.signOut();
  } catch (error) {
    return false;
  }
};

const fbIsId = async (id: string) => {
  return await db.collection('users').where('id', '==', id).get();
};

const fbIsNickname = async (nickname: string) => {
  return await db.collection('users').where('nickname', '==', nickname).get();
};

export { fbSignup, fbLogin, fbLogout, fbIsId, fbIsNickname };
