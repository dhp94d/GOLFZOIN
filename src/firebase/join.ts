import { db } from './firebaseinit';
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
    await db.collection(data.type).add(data);
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
    return joinList;
  } catch (error) {
    console.error(error);
  }
};
