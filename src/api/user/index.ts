import { notLoggedAxios } from '@/api/index';

function modifyUser(type: string) {
  return notLoggedAxios.post(`api/user/modifyuser`);
}

function detailUser(userId: string) {
  return notLoggedAxios.post(`api/user/detail/${userId}`);
}

function addFollow(type: string) {
  return notLoggedAxios.get(`api/user/addfollow`);
}

function getFollow(userId: string) {
  return notLoggedAxios.get(`api/user/follower?id=${userId}`);
}

function getFollowing(userId: string) {
  return notLoggedAxios.get(`api/user/following?id=${userId}`);
}

function findUser(userId: string, nickname: string) {
  return notLoggedAxios.get(
    `/api/user/finduser?id=${userId}&nickname=${nickname}`
  );
}

export { modifyUser, detailUser, addFollow, getFollow, getFollowing, findUser };
