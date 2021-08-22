import { notLoggedAxios } from '@/api/server/index';
import { onlineJoinListDTO, offlineJoinListDTO } from '@/api/dto/joinTypes';

function mwMyJoinList(userid: string) {
  return notLoggedAxios.get(`api/join/myjoinlist/${userid}`);
}

function mwDetailJoin(roomNo: string) {
  return notLoggedAxios.get(`api/join/detailjoin/${roomNo}`);
}

function mwRegistJoin() {
  return notLoggedAxios.post(`api/join/registjoin`);
}

function mwCancelJoin(roomNo: string) {
  return notLoggedAxios.delete(`api/join/canceljoin/${roomNo}`);
}

function mwMainOfflinList() {
  return notLoggedAxios.get(`api/join/mainofflist`);
}

function mwMainOnlineList() {
  return notLoggedAxios.get(`api/join/mainonlist`);
}

function mwOfflineJoinList(data: offlineJoinListDTO) {
  return notLoggedAxios.post(`api/join/offlinejoinlist`, data);
}

function mwOnlineJoinList(data: onlineJoinListDTO) {
  return notLoggedAxios.post(`api/join/onlinejoinlist`, data);
}

export {
  mwMyJoinList,
  mwDetailJoin,
  mwRegistJoin,
  mwCancelJoin,
  mwMainOfflinList,
  mwMainOnlineList,
  mwOfflineJoinList,
  mwOnlineJoinList,
};
