import { notLoggedAxios } from '@/api/server/index';
import { modifyUserDTO, addFollowDTO } from '@/api/dto/userTypes';

const modifyUser = async (data: modifyUserDTO) => {
  return notLoggedAxios.patch(`api/user/modifyuser`, data);
};

const detailUser = async (userId: string) => {
  return notLoggedAxios.get(`api/user/detail/${userId}`);
};

const addFollow = async (data: addFollowDTO) => {
  return notLoggedAxios.post(`api/user/addfollow`, data);
};

const getFollowing = async (userId: string) => {
  return notLoggedAxios.get(`api/user/following?id=${userId}`);
};

const getFollower = async (userId: string) => {
  return notLoggedAxios.get(`api/user/follower?id=${userId}`);
};

const findUser = async (keyword: string) => {
  return notLoggedAxios.get(`/api/user/finduser?keyword=${keyword}`);
};

export {
  modifyUser,
  detailUser,
  addFollow,
  getFollower,
  getFollowing,
  findUser,
};
