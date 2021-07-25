import { auth } from './index';

// users
function loginUser(data: any) {
  return auth.get(data);
}

function signupUser(data: any) {
  return auth.post(data);
}

export { loginUser, signupUser };
