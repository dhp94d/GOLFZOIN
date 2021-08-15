import { auth } from './index';
// users
function loginUser(data: any) {
  return auth.get(`users${data}`);
}

function signupUser(data: any) {
  return auth.post('users', data);
}

function patchUser(query: string, data: any) {
  return auth.patch(`users/${query}`, data);
}

export { loginUser, signupUser, patchUser };
