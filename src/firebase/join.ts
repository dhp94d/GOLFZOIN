import { db } from './firebaseinit';

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