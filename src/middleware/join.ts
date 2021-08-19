import { fbCretaeJoin } from '@/firebase/join';
import { fbGetLimitJoin } from '@/firebase/join';

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
export const mwCreateJoin = async (
  type: 'server' | 'firebase',
  data: joinDTO
) => {
  if (type === 'server') {
  } else {
    await fbCretaeJoin(data);
  }
};

export const mwGetLimitJoin = async (
  type: 'server' | 'firebase',
  joinType: 'online' | 'offline',
  limitNum: number
) => {
  if (type === 'server') {
  } else {
    return await fbGetLimitJoin(joinType, limitNum);
  }
};
