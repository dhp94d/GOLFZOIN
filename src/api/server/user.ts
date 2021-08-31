import { notLoggedAxios } from '@/api/server/index';
import { modifyUserDTO, addFollowDTO } from '@/api/dto/userTypes';
import { getAuthFromCookie } from '@/composable/cookies';

const modifyUser = async (data: modifyUserDTO) => {
  try {
    const res = await notLoggedAxios.patch(`api/user/modifyuser`, data);
    if ((res.status = 200)) {
      return true;
    }
  } catch (e) {
    console.error(e);
  }
};

const detailUser = async (userId: string) => {
  try {
    let isFollowing = false;
    const res = await notLoggedAxios.get(`api/user/detail/${userId}`);
    const following = await notLoggedAxios.get(
      `api/user/following?id=${getAuthFromCookie()}`
    );
    following.data.forEach((user: any) => {
      if (user.id === res.data.userid) {
        isFollowing = true;
      }
    });
    if ((res.status = 200)) {
      return { ...res.data, isFollowing: isFollowing };
    }
  } catch (e) {
    console.error(e);
  }
};

const addFollow = async (data: addFollowDTO) => {
  try {
    const res = await notLoggedAxios.post(`api/user/addfollow`, data);
    if ((res.status = 200)) {
      return true;
    }
  } catch (e) {
    console.error(e);
  }
};

const delFollow = async (data: addFollowDTO) => {
  try {
    const res = await notLoggedAxios.delete(
      `api/user/addfollow?id=${data.userid}&target=${data.targetid}`
    );
    if ((res.status = 200)) {
      return true;
    }
  } catch (e) {
    console.error(e);
  }
};

const getFollowing = async (userId: string) => {
  try {
    const res = await notLoggedAxios.get(`api/user/following?id=${userId}`);
    if ((res.status = 200)) {
      return res.data;
    }
  } catch (e) {
    console.error(e);
  }
};

const getFollower = async (userId: string) => {
  try {
    const res = await notLoggedAxios.get(`api/user/follower?id=${userId}`);
    if ((res.status = 200)) {
      return res.data;
    }
  } catch (e) {
    console.error(e);
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
    console.error(e);
  }
};

export {
  modifyUser,
  detailUser,
  addFollow,
  getFollower,
  getFollowing,
  delFollow,
  findUser,
};
