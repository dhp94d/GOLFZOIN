import { db } from './firebaseinit';
import { fbAddJoinName } from '@/firebase/auth';
import dayjs from 'dayjs';
interface joinDTO {
  type: string;
  hostid: string;
  date: string;
  time: string;
  totalcount: number;
  pw: string;
  place: string;
  lat: number;
  lon: number;
  title: string;
  body: string;
  thumbnail: string;
}

export const fbCretaeJoin = async (data: joinDTO) => {
  try {
    const res = await db
      .collection('join')
      .doc(data.type)
      .collection('joinData')
      .add(data);
    await db
      .collection('join')
      .doc(data.type)
      .collection('userList')
      .doc(res.id)
      .set({ hostid: data.hostid, userlist: [] });
    await db
      .collection('join')
      .doc(data.type)
      .collection('chatRoom')
      .doc(res.id)
      .set({});
    await fbAddJoinName(res.id, {
      type: data.type,
      hostid: data.hostid,
      title: data.title,
      time: data.time,
      date: data.date,
      totalcount: data.totalcount,
    });
  } catch (error) {
    console.error(error);
  }
};

export const fbGetLimitJoin = async (
  type: 'online' | 'offline',
  limitNum: number
) => {
  const joinList: any = [];
  try {
    const res = await db
      .collection(type)
      .where('date', '>=', `${dayjs().format('YYYY-MM-DD')}`)
      .orderBy('date')
      .limit(limitNum)
      .get();
    res.forEach((join) => {
      const data = { ...join.data(), id: join.id };
      joinList.push(data);
    });
    console.log(joinList);
    return joinList;
  } catch (error) {
    console.error(error);
  }
};
