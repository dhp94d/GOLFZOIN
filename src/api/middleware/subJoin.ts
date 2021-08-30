import { applyJoinDTO, joinIsOkDTO, delAlarmDTO } from '@/api/dto/joinTypes';
import {
  applyJoin,
  joinAcceptUser,
  joinRefuseUser,
  getHostAlarm,
  getApplyAlarm,
  userDelAlarm,
  cancelApply,
} from '@/api/server/subJoin';
import {
  fbApplyJoin,
  fbJoinAcceptUser,
  fbJoinRefuseUser,
  fbGetAlarm,
  fbUserDelAlarm,
  fbCancelApply,
} from '@/api/serverless/subJoin';

const mwApplyJoin = async (
  type: 'server' | 'serverless',
  data: applyJoinDTO
) => {
  if (type === 'server') {
    return await applyJoin(data);
  } else {
    return await fbApplyJoin(data);
  }
};

const mwJoinAcceptUser = async (
  type: 'server' | 'serverless',
  data: joinIsOkDTO
) => {
  if (type === 'server') {
    return joinAcceptUser(data);
  } else {
    return fbJoinAcceptUser(data);
  }
};

const mwJoinRefuseUser = async (
  type: 'server' | 'serverless',
  data: joinIsOkDTO
) => {
  console.log(data);
  if (type === 'server') {
    return joinRefuseUser(data);
  } else {
    return fbJoinRefuseUser(data);
  }
};

const mwGetAlarm = async (type: 'server' | 'serverless', userid: string) => {
  if (type === 'server') {
    return getHostAlarm(userid);
  } else {
    return fbGetAlarm(userid);
  }
};

const mwUserDelAlarm = async (
  type: 'server' | 'serverless',
  data: delAlarmDTO
) => {
  if (type === 'server') {
    return userDelAlarm(data);
  } else {
    return fbUserDelAlarm(data);
  }
};

const mwCancelApply = async (
  type: 'server' | 'serverless',
  roomNo: string,
  userid: string
) => {
  console.log(roomNo);
  if (type === 'server') {
    return await cancelApply(roomNo, userid);
  } else {
    return await fbCancelApply(roomNo, userid);
  }
};
export {
  mwApplyJoin,
  mwJoinAcceptUser,
  mwJoinRefuseUser,
  mwGetAlarm,
  mwUserDelAlarm,
  mwCancelApply,
};
