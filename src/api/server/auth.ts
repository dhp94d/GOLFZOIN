import { notLoggedAxios } from '@/api/server/index';
import { signupDTO, loginDTO } from '@/api/dto/authTypes';
import { saveAuthToCookie, saveUserToCookie } from '@/composable/cookies';

const signup = async (data: signupDTO) => {
  const alreadyid = await isId(data.id);
  const alreadyNickName = await isNickname(data.nickname);
  if (alreadyid || alreadyNickName) {
    return [alreadyid || alreadyNickName];
  }
  return await notLoggedAxios.post(`api/auth/signup`, data);
};

const login = async (data: loginDTO) => {
  const res = await notLoggedAxios.post(`api/auth/signin`, data);
  if (res) {
    saveAuthToCookie(data.id);
    saveUserToCookie(JSON.stringify(res));
  }
  return;
};

const logout = async () => {
  return await notLoggedAxios.get(`api/auth/logout`);
};

const isId = async (id: string) => {
  return await notLoggedAxios.get(`api/auth/id/${id}`);
};

const isNickname = async (nickname: string) => {
  return await notLoggedAxios.get(`api/auth/nickname/${nickname}`);
};

export { signup, login, logout, isId, isNickname };
