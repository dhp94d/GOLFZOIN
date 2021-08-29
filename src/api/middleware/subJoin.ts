import { applyJoinDTO, joinIsOkDTO, delAlarmDTO } from '@/api/dto/joinTypes';
import {
  applyJoin,
  joinAcceptUser,
  joinRefuseUser,
  getHostAlarm,
  getApplyAlarm,
  userDelAlarm,
} from '@/api/server/subJoin';
import {
  fbApplyJoin,
  fbJoinAcceptUser,
  fbJoinRefuseUser,
  fbGetAlarm,
  fbUserDelAlarm,
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

export {
  mwApplyJoin,
  mwJoinAcceptUser,
  mwJoinRefuseUser,
  mwGetAlarm,
  mwUserDelAlarm,
};
