import { notLoggedAxios } from '@/api/server/index';
import { signupDTO, loginDTO } from '@/api/dto/authTypes';

const signup = async (data: signupDTO) => {
  const alreadyid = await isId(data.id);
  const alreadyNickName = await isNickname(data.nickname);
  if (alreadyid || alreadyNickName) {
    return [alreadyid || alreadyNickName];
  }
  return await notLoggedAxios.post(`api/auth/signup`, data);
};

const login = async (data: loginDTO) => {
  return await notLoggedAxios.post(`api/auth/signin`, data);
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
