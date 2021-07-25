import { auth } from './index';

// users
function loginUser(data: any) {
  return auth.get(`users${data}`);
}

function signupUser(data: any) {
  return auth.post('users', data);
}

export { loginUser, signupUser };
