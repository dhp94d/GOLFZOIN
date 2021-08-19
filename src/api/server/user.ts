import { notLoggedAxios } from '@/api/server/index';
import { modifyUserDTO, addFollowDTO } from '@/api/dto/userTypes';

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

function findUser(keyword: string) {
  return notLoggedAxios.get(`/api/user/finduser?keyword=${keyword}`);
}

export { modifyUser, detailUser, addFollow, getFollow, getFollowing, findUser };
