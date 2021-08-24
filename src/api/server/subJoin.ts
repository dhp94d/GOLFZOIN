import { notLoggedAxios } from '@/api/server/index';
import { applyJoinDTO, joinIsOkDTO, delAlarmDTO } from '@/api/dto/joinTypes';

const applyJoin = async (data: applyJoinDTO) => {
  return await notLoggedAxios.post(`api/join/applyjoin`, data);
};

const joinAcceptUser = async (data: joinIsOkDTO) => {
  return await notLoggedAxios.post(`api/join/acceptuser`, data);
};

const joinRefuseUser = async (data: joinIsOkDTO) => {
  return await notLoggedAxios.post(`api/join/refuseuser`, data);
};

const getHostAlarm = async (userid: string) => {
  return await notLoggedAxios.get(`api/join/jointempuser/${userid}`);
};

const getApplyAlarm = async (userid: string) => {
  return await notLoggedAxios.get(`api/join/alarm/${userid}`);
};

const userDelAlarm = async (data: delAlarmDTO) => {
  return await notLoggedAxios.delete(
    `api/join/alarm/delete?user=${data.userid}&alarmNo=${data.alarmNo}`
  );
};

export {
  applyJoin,
  joinAcceptUser,
  joinRefuseUser,
  getHostAlarm,
  getApplyAlarm,
  userDelAlarm,
};
