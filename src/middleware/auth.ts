import { signupUser } from '@/api/auth';
import { cretaeUser } from '@/firebase/auth';

interface userDTO {
  authType: string;
  email: string;
  name: string;
  profile: string;
  id: string;
  pw: string;
  nickname: string;
  address: string;
  p_number: string;
  hit: number;
  lat: number;
  lon: number;
  birth: string;
  gender: string;
}

export const createUser = (type: 'server' | 'firebase', data: userDTO) => {
  console.log('isOk');
  if (type === 'server') {
    signupUser(data);
  } else {
    cretaeUser(data);
  }
};
