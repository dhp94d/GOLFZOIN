import { fbCretaeJoin } from '@/firebase/join';
import { getJoin, createJoin, getSelectJoin, getJoinAll } from '@/api/join';

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
    await createJoin(data);
  } else {
    await fbCretaeJoin(data);
  }
};
