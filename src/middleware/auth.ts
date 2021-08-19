import { signupUser } from '@/api/auth';
import {
  fbCretaeUser,
  fbLoginUser,
  fbIsLoggedIn,
  fbLogout,
  fbGetUserInfo,
  fbUpdateInfo,
  fbGetUserJoinList,
} from '@/firebase/auth';
import { getUserFromCookie, deleteCookie } from '@/composable/cookies';

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

export const createUser = async (
  type: 'server' | 'firebase',
  data: userDTO
) => {
  if (type === 'server') {
    signupUser(data);
    return true;
  } else {
    await fbCretaeUser(data);
    return true;
  }
};

export const loginUser = async (
  type: 'server' | 'firebase',
  data: LoginDataDTO
) => {
  if (type === 'server') {
    return true;
  } else {
    await fbLoginUser(data);

    return true;
  }
};

export const getUserJoinList = async (type: 'server' | 'firebase') => {
  if (type === 'server') {
    return true;
  } else {
    return await fbGetUserJoinList();
  }
};

export const isLoggedin = async (type: 'server' | 'firebase') => {
  if (type === 'server') {
    return !!getUserFromCookie();
  } else {
    return await fbIsLoggedIn();
  }
};

export const logout = async (type: 'server' | 'firebase') => {
  if (type === 'server') {
  } else {
    const res = await fbLogout();
    console.log(res);
    deleteCookie('til_auth');
    deleteCookie('til_user');
  }
};

export const getUserInfo = async (type: 'server' | 'firebase') => {
  if (type === 'server') {
  } else {
    const res = await fbGetUserInfo();
    return res;
  }
};

export const updateInfo = async (type: 'server' | 'firebase', data: object) => {
  if (type === 'server') {
  } else {
    await fbUpdateInfo(data);
  }
};
