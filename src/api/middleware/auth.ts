import { signup, login, logout, isId, isNickname } from '@/api/server/auth';
import {
  fbSignup,
  fbLogin,
  fbLogout,
  fbIsId,
  fbIsNickname,
} from '@/api/serverless/auth';
import { signupDTO, loginDTO } from '@/api/dto/authTypes';
import { apiCallDTO } from '@/api/dto/commonType';

const mwSignup = (type: 'server' | 'serverless', data: signupDTO) => {
  if (type === 'server') {
    return signup(data);
  } else {
    return fbSignup(data);
  }
};

const mwLogin = async (type: 'server' | 'serverless', data: loginDTO) => {};

const mwLogout = async (type: 'server' | 'serverless') => {};

const mwIsId = async (type: 'server' | 'serverless', id: string) => {};

const mwIsNickname = async (
  type: 'server' | 'serverless',
  nickname: string
) => {};

export { mwSignup, mwLogin, mwLogout, mwIsId, mwIsNickname };
