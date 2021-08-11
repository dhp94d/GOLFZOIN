import { auth } from './index';

// users
function getJoinAll(type: string) {
  return auth.get(`join?type=${type}`);
}
function getJoin(num: string) {
  console.log(num);
  return auth.get(`join${num ? `/${num}` : ''}`);
}

function getSelectJoin(type: string) {
  return auth.get(`join?type=${type}&_start=0&_end=8`);
}

function createJoin(data: any) {
  return auth.post('join', data);
}

export { getJoin, createJoin, getSelectJoin, getJoinAll };
