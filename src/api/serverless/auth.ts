import { auth, db } from '@/api/serverless/firesbaseinit';
import {
  saveAuthToCookie,
  saveUserToCookie,
  getUserFromCookie,
} from '@/composable/cookies';
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
    const res = await auth.signInWithEmailAndPassword(data.id, data.pw);
    if (res.user?.email) {
      saveUserToCookie(res.user?.email);
      saveAuthToCookie(res.user?.email);
    }
    return true;
  } catch (error) {
    return false;
  }
};

const fbLogout = async () => {
  try {
    await auth.signOut();
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

// export const fbGetUserJoinList = async () => {
//   try {
//     const joinList: any = [];
//     const res = await db
//       .collection('users')
//       .doc(getUserFromCookie())
//       .collection('Joinlist')
//       .where('date', '>=', `${dayjs().format('YYYY-MM-DD')}`)
//       .orderBy('date');

//     await res.onSnapshot(async (snapshot) => {
//       await snapshot.docChanges().forEach(async (change) => {
//         let doc = change.doc;
//         let name = await fbIsName(doc.data().hostid);

//         joinList.push({
//           id: doc.id,
//           date: doc.data().date,
//           hostid: doc.data().hostid,
//           hostname: name,
//           time: doc.data().time,
//           title: doc.data().title,
//           totalcount: doc.data().totalcount,
//           type: doc.data().type,
//         });
//       });
//     });
//     return joinList;
//   } catch (error) {
//     console.error(error);
//   }
// };

// export const fbAddJoinName = async (id: string, data: any) => {
//   try {
//     await db
//       .collection('users')
//       .doc(getUserFromCookie())
//       .collection('Joinlist')
//       .doc(id)
//       .set(data);
//   } catch (error) {
//     console.error(error);
//   }
// };

// export const fbIsLoggedIn = async () => {
//   let username: string | null = '';
//   await auth.onAuthStateChanged((user) => {
//     if (user) {
//       saveUserToCookie(user.email + '');
//       saveAuthToCookie(user.email + '');
//       username = user.email;
//     }
//     return false;
//   });
//   return username;
// };

// export const fbIsName = async (id: string) => {
//   const res = await db
//     .collection('users')
//     .doc(id)
//     .collection('data')
//     .doc('userinfo')
//     .get();
//   return res.data()?.nickname;
// };

// export const fbGetUserInfo = async () => {
//   const email = await fbIsLoggedIn();
//   const res = await db
//     .collection('users')
//     .doc(email)
//     .collection('data')
//     .doc('userinfo')
//     .get();
//   return res.data();
// };

// export const fbUpdateInfo = async (data: any) => {
//   const email = await fbIsLoggedIn();
//   await db
//     .collection('users')
//     .doc(email)
//     .collection('data')
//     .doc('userinfo')
//     .update(data);
// };
