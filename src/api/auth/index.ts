import { notLoggedAxios } from '@/api/index';
import { signupDTO, loginDTO } from './types';

function signup(data: signupDTO) {
  return notLoggedAxios.post(`api/auth/signup`, data);
}

function login(data: loginDTO) {
  return notLoggedAxios.post(`api/auth/signin`, data);
}

function logout() {
  return notLoggedAxios.get(`api/auth/logout`);
}

function isId(id: string) {
  return notLoggedAxios.get(`api/auth/id/${id}`);
}

function isNickname(nickname: string) {
  return notLoggedAxios.get(`api/auth/nickname/${nickname}`);
}

export { signup, login, logout, isId, isNickname };
