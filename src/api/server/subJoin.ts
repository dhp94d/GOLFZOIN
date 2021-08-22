import { notLoggedAxios } from '@/api/server/index';
import { ApplyJoinDTO, joinIsOkDTO } from '@/api/dto/joinTypes';

function applyJoin(data: ApplyJoinDTO) {
  return notLoggedAxios.post(`api/join/applyjoin`, data);
}

function joinAcceptUser(data: joinIsOkDTO) {
  return notLoggedAxios.post(`api/join/acceptuser`, data);
}

function joinRefuseUser(data: joinIsOkDTO) {
  return notLoggedAxios.post(`api/join/refuseuser`, data);
}

function joinTempUser(userid: string) {
  return notLoggedAxios.get(`api/join/jointempuser/${userid}`);
}

function userGetAlarm(userid: string) {
  return notLoggedAxios.get(`api/join/alarm/${userid}`);
}

function userDelAlarm() {
  return notLoggedAxios.delete(`api/join/alarm/delete`);
}

export {
  applyJoin,
  joinAcceptUser,
  joinRefuseUser,
  joinTempUser,
  userGetAlarm,
  userDelAlarm,
};
