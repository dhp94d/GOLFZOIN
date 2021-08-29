import { db } from '@/api/serverless/firesbaseinit';
import { fbDetailUser } from '@/api/serverless/user';
import { getAuthFromCookie } from '@/composable/cookies';
import { fbGetFollower } from '@/api/serverless/user';
import {
  onlineJoinListDTO,
  offlineJoinListDTO,
  registOnlineDTO,
  registOfflineDTO,
} from '@/api/dto/joinTypes';

const fbMyJoinList = async (userid: string) => {
  try {
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
    return joinList;
  } catch (e) {
    console.error(e);
  }
};

const fbDetailJoin = async (roomNo: string) => {
  try {
    const joinData = await db.collection('join').doc(roomNo).get();
    return joinData.data();
  } catch (e) {
    console.error(e);
  }
};

const fbRegistJoin = async (data: registOnlineDTO | registOfflineDTO) => {
  try {
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
  } catch (e) {
    console.error(e);
  }
};

const fbCancelJoin = async (roomNo: string) => {
  try {
    const res = await db.collection('join').doc(roomNo).delete();
    return res;
  } catch (e) {
    console.error(e);
  }
};

const fbMainOfflineList = async () => {
  try {
    const joinList: any = [];
    const res = await db
      .collection('join')
      .where('type', '==', 'offline')
      .limit(7)
      .get();
    res.forEach((join) => joinList.push(join.data()));
    return joinList;
  } catch (e) {
    console.error(e);
  }
};

const fbMainOnlineList = async () => {
  try {
    const joinList: any = [];
    const res = await db
      .collection('join')
      .where('type', '==', 'online')
      .limit(7)
      .get();

    res.forEach((join) => joinList.push(join.data()));
    return joinList;
  } catch (e) {
    console.error(e);
  }
};

const fbOfflineJoinList = async (data: any) => {
  try {
    const joinList: any = [];
    const res = await db
      .collection('join')
      .where('type', '==', 'offline')
      .get();
    res.forEach((join) => joinList.push(join.data()));
    console.log(joinList, data);
    if (!data.pNumber && !data.follow && data.data === '') {
      console.log('너 왜 안돼');
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
    return searchJoinList;
  } catch (e) {
    console.error(e);
  }
};

const fbOnlineJoinList = async (data: any) => {
  try {
    const joinList: any = [];
    const res = await db.collection('join').where('type', '==', 'online').get();
    res.forEach((join) => joinList.push(join.data()));

    if (!data.pNumber && !data.follow && data.data === '') {
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
