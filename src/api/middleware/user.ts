import { modifyUserDTO, addFollowDTO } from '@/api/dto/userTypes';
import {
  modifyUser,
  detailUser,
  addFollow,
  getFollower,
  getFollowing,
  findUser,
} from '@/api/server/user';
import {
  fbModifyUser,
  fbDetailUser,
  fbAddFollow,
  fbGetFollower,
  fbGetFollowing,
  fbFindUser,
} from '@/api/serverless/user';

const mwModifyUser = async (
  type: 'server' | 'serverless',
  data: modifyUserDTO
) => {
  if (type === 'server') {
    return await modifyUser(data);
  } else {
    return await fbModifyUser(data);
  }
};

const mwDetailUser = async (type: 'server' | 'serverless', userId: string) => {
  if (type === 'server') {
    return await detailUser(userId);
  } else {
    return await fbDetailUser(userId);
  }
};

const mwAddFollow = async (
  type: 'server' | 'serverless',
  data: addFollowDTO
) => {
  if (type === 'server') {
    return await addFollow(data);
  } else {
    return await fbAddFollow(data);
  }
};

const mwGetFollowing = async (
  type: 'server' | 'serverless',
  userId: string
) => {
  if (type === 'server') {
    return await getFollowing(userId);
  } else {
    return await fbGetFollowing(userId);
  }
};

const mwGetFollower = async (type: 'server' | 'serverless', userId: string) => {
  if (type === 'server') {
    return await getFollower(userId);
  } else {
    return await fbGetFollower(userId);
  }
};

const mwFindUser = async (type: 'server' | 'serverless', keyword: string) => {
  if (type === 'server') {
    return await findUser(keyword);
  } else {
    return await fbFindUser(keyword);
  }
};

export {
  mwModifyUser,
  mwDetailUser,
  mwAddFollow,
  mwGetFollower,
  mwGetFollowing,
  mwFindUser,
};