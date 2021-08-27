import { notLoggedAxios } from '@/api/server/index';
import { modifyUserDTO, addFollowDTO } from '@/api/dto/userTypes';

const modifyUser = async (data: modifyUserDTO) => {
  try {
    const res = await notLoggedAxios.patch(`api/user/modifyuser`, data);
    if ((res.status = 200)) {
      return true;
    }
  } catch (e) {
    console.log(e);
  }
};

const detailUser = async (userId: string) => {
  console.log(userId);
  try {
    const res = await notLoggedAxios.get(`api/user/detail/${userId}`);
    if ((res.status = 200)) {
      return res.data;
    }
  } catch (e) {
    console.log(e);
  }
};

const addFollow = async (data: addFollowDTO) => {
  try {
    const res = await notLoggedAxios.post(`api/user/addfollow`, data);
    if ((res.status = 200)) {
      return true;
    }
  } catch (e) {
    console.log(e);
  }
};

const getFollowing = async (userId: string) => {
  try {
    const res = await notLoggedAxios.get(`api/user/following?id=${userId}`);
    if ((res.status = 200)) {
      return res.data;
    }
  } catch (e) {
    console.log(e);
  }
};

const getFollower = async (userId: string) => {
  try {
    const res = await notLoggedAxios.get(`api/user/follower?id=${userId}`);
    if ((res.status = 200)) {
      return res.data;
    }
  } catch (e) {
    console.log(e);
  }
};

const findUser = async (keyword: string, userid: string) => {
  try {
    const res = await notLoggedAxios.get(
      `/api/user/finduser?keyword=${keyword}&userid=${userid}`
    );
    if ((res.status = 200)) {
      return res.data;
    }
  } catch (e) {
    console.log(e);
  }
};

export {
  modifyUser,
  detailUser,
  addFollow,
  getFollower,
  getFollowing,
  findUser,
};
