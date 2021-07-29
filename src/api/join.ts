import { loginAxios, auth } from './index';

// users
function getJoin() {
  return auth.get('join');
}

function createJoin(data: any) {
  return auth.post('join', data);
}

export { getJoin, createJoin };
