import { signupUser } from '@/api/auth';
import {
  fbCretaeUser,
  fbLoginUser,
  fbIsLoggedIn,
  fbLogout,
} from '@/firebase/auth';
import { getUserFromCookie } from '@/composable/cookies';
import { useAuth } from '@/composable/auth';

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

interface LoginDataDTO {
  email: string;
  pw: string;
}

export const createUser = (type: 'server' | 'firebase', data: userDTO) => {
  if (type === 'server') {
    signupUser(data);
    return true;
  } else {
    fbCretaeUser(data);
    return true;
  }
};

export const loginUser = (type: 'server' | 'firebase', data: LoginDataDTO) => {
  if (type === 'server') {
    return true;
  } else {
    fbLoginUser(data);
    return true;
  }
};

export const isLoggedin = (type: 'server' | 'firebase') => {
  if (type === 'server') {
    const { authToken } = useAuth();
    console.log(authToken.value);
    return !!getUserFromCookie();
  } else {
    fbIsLoggedIn();
  }
};

export const logout = () => {
  fbLogout();
};
