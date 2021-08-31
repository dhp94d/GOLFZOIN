import { db } from '@/api/serverless/firesbaseinit';
import { fbDetailUser } from '@/api/serverless/user';
import { getAuthFromCookie } from '@/composable/cookies';
import { registOnlineDTO, registOfflineDTO } from '@/api/dto/JoinTypes';
import store from '@/store';

const fbMyJoinList = async (userid: string) => {
  try {
    store.commit('loading/startSpinner');

    const joinList: any = [];
    const res = await db
      .collection('users')
      .doc(userid)
      .collection('joinlist')
      .orderBy('date')
      .get();
    res.forEach((join) => {
      joinList.push({ ...join.data(), roomNo: join.id });
    });
    store.commit('loading/endSpinner');
    return joinList;
  } catch (e) {
    console.error(e);
  }
};

const fbDetailJoin = async (roomNo: string) => {
  try {
    store.commit('loading/startSpinner');

    const joinData = await db.collection('join').doc(roomNo).get();
    store.commit('loading/endSpinner');
    return joinData.data();
  } catch (e) {
    console.error(e);
  }
};

const fbRegistJoin = async (data: registOnlineDTO | registOfflineDTO) => {
  try {
    store.commit('loading/startSpinner');

    const res = await db.collection('join').add(data);
    const userData = await fbDetailUser(getAuthFromCookie());
    await db
      .collection('join')
      .doc(res.id)
      .update({ members: [userData], roomNo: res.id });
    await db
      .collection('users')
      .doc(data.hostid)
      .collection('joinlist')
      .doc(res.id)
      .set(data);
    store.commit('loading/endSpinner');
  } catch (e) {
    console.error(e);
  }
};

const fbCancelJoin = async (roomNo: string) => {
  try {
    store.commit('loading/startSpinner');

    const res = await db.collection('join').doc(roomNo).delete();
    store.commit('loading/endSpinner');
    return res;
  } catch (e) {
    console.error(e);
  }
};

const fbMainOfflineList = async () => {
  try {
    store.commit('loading/startSpinner');

    const joinList: any = [];
    const res = await db
      .collection('join')
      .where('type', '==', 'offline')
      .limit(7)
      .get();
    res.forEach((join) => joinList.push(join.data()));
    store.commit('loading/endSpinner');
    return joinList;
  } catch (e) {
    console.error(e);
  }
};

const fbMainOnlineList = async () => {
  try {
    store.commit('loading/startSpinner');

    const joinList: any = [];
    const res = await db
      .collection('join')
      .where('type', '==', 'online')
      .limit(7)
      .get();

    res.forEach((join) => joinList.push(join.data()));
    store.commit('loading/endSpinner');
    return joinList;
  } catch (e) {
    console.error(e);
  }
};

const fbOfflineJoinList = async (data: any) => {
  try {
    store.commit('loading/startSpinner');

    const joinList: any = [];
    const res = await db
      .collection('join')
      .where('type', '==', 'offline')
      .get();
    res.forEach((join) => joinList.push(join.data()));
    if (!data.count && data.date === '' && !data.hit) {
      store.commit('loading/endSpinner');
      return joinList;
    }

    let searchJoinList = joinList.filter((join: any) => {
      let sum = 0;
      if (join.date < data.date) return false;
      if (join.totalcount - join.members.length < data.count) return false;
      if (!!data.hit) {
        sum = join.members.reduce((acc: any, cur: any) => {
          return acc + Number(cur.hit);
        }, 0);
        sum = sum / join.members.length;
      }
      if (!!data.hit && sum > Number(data.hit)) return false;
      return true;
    });
    store.commit('loading/endSpinner');
    return searchJoinList;
  } catch (e) {
    console.error(e);
  }
};

const fbOnlineJoinList = async (data: any) => {
  try {
    store.commit('loading/startSpinner');

    const joinList: any = [];
    const res = await db.collection('join').where('type', '==', 'online').get();
    res.forEach((join) => joinList.push(join.data()));

    if (!data.pNumber && !data.follow && data.data === '') {
      store.commit('loading/endSpinner');
      return joinList;
    }

    const searchJoinList = joinList.filter((join: any) => {
      if (join.date < data.date) return false;
      if (!join.title.includes(data.data)) {
        if (!join.body.includes(data.data)) {
          return false;
        }
      }
      if (join.totalcount - join.members.length < data.pNumber) return false;
      return true;
    });
    store.commit('loading/endSpinner');
    return searchJoinList;
  } catch (e) {
    console.error(e);
  }
};

export {
  fbMyJoinList,
  fbDetailJoin,
  fbRegistJoin,
  fbCancelJoin,
  fbMainOfflineList,
  fbMainOnlineList,
  fbOfflineJoinList,
  fbOnlineJoinList,
};
