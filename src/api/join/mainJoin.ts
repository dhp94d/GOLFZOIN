import { notLoggedAxios } from '@/api/index';
import { onlineJoinListDTO, offlineJoinListDTO } from './types';

function myJoinList(userid: string) {
  return notLoggedAxios.get(`api/join/myjoinlist/${userid}`);
}

function detailJoin(roomNo: string) {
  return notLoggedAxios.get(`api/join/detailjoin/${roomNo}`);
}

function registJoin() {
  return notLoggedAxios.post(`api/join/registjoin`);
}

function cancelJoin(roomNo: string) {
  return notLoggedAxios.delete(`api/join/canceljoin/${roomNo}`);
}

function mainOfflinList() {
  return notLoggedAxios.get(`api/join/mainofflist`);
}

function mainOnlineList() {
  return notLoggedAxios.get(`api/join/mainonlist`);
}

function offlineJoinList(data: offlineJoinListDTO) {
  return notLoggedAxios.post(`api/join/offlinejoinlist`, data);
}

function onlineJoinList(data: onlineJoinListDTO) {
  return notLoggedAxios.post(`api/join/onlinejoinlist`, data);
}

export {
  myJoinList,
  detailJoin,
  registJoin,
  cancelJoin,
  mainOfflinList,
  mainOnlineList,
  offlineJoinList,
  onlineJoinList,
};
