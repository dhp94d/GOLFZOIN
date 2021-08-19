import { notLoggedAxios } from '@/api/index';
import { modifyUserDTO, addFollowDTO } from './types';

function modifyUser(data: modifyUserDTO) {
  return notLoggedAxios.patch(`api/user/modifyuser`, data);
}

function detailUser(userId: string) {
  return notLoggedAxios.get(`api/user/detail/${userId}`);
}

function addFollow(data: addFollowDTO) {
  return notLoggedAxios.post(`api/user/addfollow`, data);
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
