import { db } from '@/api/serverless/firesbaseinit';
import { saveAuthToCookie } from '@/composable/cookies';
import {
  onlineJoinListDTO,
  offlineJoinListDTO,
  registOnlineDTO,
  registOfflineDTO,
} from '@/api/dto/joinTypes';

const fbMyJoinList = async (userid: string) => {
  try {
  } catch (e) {
    console.error(e);
  }
};

const fbDetailJoin = async (roomNo: string) => {
  try {
  } catch (e) {
    console.error(e);
  }
};

const fbRegistJoin = async (data: registOnlineDTO | registOfflineDTO) => {
  try {
    const res = await db.collection(data.type).add(data);
    await db
      .collection('chat')
      .doc(res.id)
      .collection('data')
      .doc('roominfo')
      .set({
        title: data.title,
        hostid: data.hostid,
        participants: [data.hostid],
      });
  } catch (e) {
    console.error(e);
  }
};

const fbCancelJoin = async (roomNo: string) => {
  try {
  } catch (e) {
    console.error(e);
  }
};

const fbMainOfflineList = async () => {
  try {
  } catch (e) {
    console.error(e);
  }
};

const fbMainOnlineList = async () => {
  try {
  } catch (e) {
    console.error(e);
  }
};

const fbOfflineJoinList = async (data: offlineJoinListDTO) => {
  try {
  } catch (e) {
    console.error(e);
  }
};

const fbOnlineJoinList = async (data: onlineJoinListDTO) => {
  try {
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
