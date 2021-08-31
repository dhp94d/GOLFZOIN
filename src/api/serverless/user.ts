import store from '@/store';
import { modifyUserDTO, addFollowDTO } from '@/api/dto/userTypes';
import { db } from '@/api/serverless/firesbaseinit';
import { getAuthFromCookie } from '@/composable/cookies';

const fbModifyUser = async (data: modifyUserDTO) => {
  try {
    store.commit('loading/startSpinner');
    await db.collection('users').doc(getAuthFromCookie()).update(data);
    store.commit('loading/endSpinner');
  } catch (e) {
    console.error(e);
  }
};

const fbDetailUser = async (userId: string) => {
  try {
    store.commit('loading/startSpinner');

    let isFollowing = false;
    const res = await db.collection('users').doc(userId).get();
    const userData = res.data();
    const following = await fbGetFollowing(getAuthFromCookie());
    following?.forEach((user: any) => {
      if (user.id === userData?.id) {
        isFollowing = true;
      }
    });
    store.commit('loading/endSpinner');
    return { ...userData, isFollowing: isFollowing };
  } catch (e) {
    console.error(e);
  }
};

const fbAddFollow = async (data: addFollowDTO) => {
  store.commit('loading/startSpinner');

  const { userid, targetid } = data;
  try {
    const targetInfo: any = await fbDetailUser(targetid);
    const userInfo: any = await fbDetailUser(userid);
    await db
      .collection('users')
      .doc(userid)
      .collection('following')
      .doc(targetid)
      .set(targetInfo);
    await db
      .collection('users')
      .doc(targetid)
      .collection('follower')
      .doc(userid)
      .set(userInfo);
    store.commit('loading/endSpinner');
    return true;
  } catch (e) {
    console.error(e);
  }
};

const fbDelFollow = async (data: addFollowDTO) => {
  store.commit('loading/startSpinner');

  const { userid, targetid } = data;
  try {
    await db
      .collection('users')
      .doc(userid)
      .collection('following')
      .doc(targetid)
      .delete();
    await db
      .collection('users')
      .doc(targetid)
      .collection('follower')
      .doc(userid)
      .delete();
    store.commit('loading/endSpinner');
    return true;
  } catch (e) {
    console.error(e);
  }
};

const fbGetFollowing = async (userId: string) => {
  store.commit('loading/startSpinner');

  try {
    const userList: Array<object> = [];
    const users = await db
      .collection('users')
      .doc(userId)
      .collection('following')
      .get();
    users.forEach((user) => {
      userList.push(user.data());
    });
    store.commit('loading/endSpinner');
    return userList;
  } catch (e) {
    console.error(e);
  }
};

const fbGetFollower = async (userId: string) => {
  store.commit('loading/startSpinner');

  try {
    const userList: Array<object> = [];
    const users = await db
      .collection('users')
      .doc(userId)
      .collection('follower')
      .get();
    users.forEach((user) => {
      userList.push(user.data());
    });
    store.commit('loading/endSpinner');
    return userList;
  } catch (e) {
    console.error(e);
  }
};

const fbFindUser = async (keyword: string, userid: string) => {
  store.commit('loading/startSpinner');

  try {
    const userList: Array<object> = [];
    const users = await db.collection('users').get();
    users.forEach((user) => {
      const userInfo = user.data();
      if (userInfo.id === getAuthFromCookie()) {
        return;
      }
      if (
        userInfo.name.includes(keyword) ||
        userInfo.id.includes(keyword) ||
        userInfo.nickname.includes(keyword)
      ) {
        userList.push(userInfo);
      }
    });
    store.commit('loading/endSpinner');
    return userList;
  } catch (e) {
    console.error(e);
  }
};

export {
  fbModifyUser,
  fbDetailUser,
  fbAddFollow,
  fbGetFollower,
  fbGetFollowing,
  fbFindUser,
  fbDelFollow,
};
