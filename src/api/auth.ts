import { notLoggedAxios } from './index';

function signup(type: string) {
  return notLoggedAxios.post(`api/auth/signup`);
}

function login(type: string) {
  return notLoggedAxios.post(`api/auth/signin`);
}

function logout(type: string) {
  return notLoggedAxios.get(`api/auth/logout`);
}

function isId(id: string) {
  return notLoggedAxios.get(`api/auth/id/${id}`);
}

function isNickname(nickname: string) {
  return notLoggedAxios.get(`api/auth/nickname/${nickname}`);
}
