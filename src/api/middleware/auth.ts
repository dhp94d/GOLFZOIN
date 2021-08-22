import { signup, login, logout } from '@/api/server/auth';
import { fbSignup, fbLogin, fbLogout } from '@/api/serverless/auth';
import { signupDTO, loginDTO } from '@/api/dto/authTypes';

const mwSignup = (type: 'server' | 'serverless', data: signupDTO) => {
  if (type === 'server') {
    return signup(data);
  } else {
    return fbSignup(data);
  }
};

const mwLogin = async (type: 'server' | 'serverless', data: loginDTO) => {
  if (type === 'server') {
    return login(data);
  } else {
    return fbLogin(data);
  }
};

const mwLogout = async (type: 'server' | 'serverless') => {
  if (type === 'server') {
    return logout();
  } else {
    return fbLogout();
  }
};

const mwIsId = async (type: 'server' | 'serverless', id: string) => {};

const mwIsNickname = async (
  type: 'server' | 'serverless',
  nickname: string
) => {};

export { mwSignup, mwLogin, mwLogout, mwIsId, mwIsNickname };
