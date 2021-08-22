import { notLoggedAxios } from '@/api/server/index';
import {
  onlineJoinListDTO,
  offlineJoinListDTO,
  registOnlineDTO,
  registOfflineDTO,
} from '@/api/dto/joinTypes';

const myJoinList = (userid: string) => {
  return notLoggedAxios.get(`api/join/myjoinlist/${userid}`);
};

const detailJoin = (roomNo: string) => {
  return notLoggedAxios.get(`api/join/detailjoin/${roomNo}`);
};

const registJoin = (data: registOnlineDTO | registOfflineDTO) => {
  return notLoggedAxios.post(`api/join/registjoin`);
};

const cancelJoin = (roomNo: string) => {
  return notLoggedAxios.delete(`api/join/canceljoin/${roomNo}`);
};

const mainOfflineList = () => {
  return notLoggedAxios.get(`api/join/mainofflist`);
};

const mainOnlineList = () => {
  return notLoggedAxios.get(`api/join/mainonlist`);
};

const offlineJoinList = (data: offlineJoinListDTO) => {
  return notLoggedAxios.post(`api/join/offlinejoinlist`, data);
};

const onlineJoinList = (data: onlineJoinListDTO) => {
  return notLoggedAxios.post(`api/join/onlinejoinlist`, data);
};

export {
  myJoinList,
  detailJoin,
  registJoin,
  cancelJoin,
  mainOfflineList,
  mainOnlineList,
  offlineJoinList,
  onlineJoinList,
};
