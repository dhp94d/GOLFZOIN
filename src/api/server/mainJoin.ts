import { notLoggedAxios } from '@/api/server/index';
import {
  onlineJoinListDTO,
  offlineJoinListDTO,
  registOnlineDTO,
  registOfflineDTO,
} from '@/api/dto/joinTypes';

const myJoinList = async (userid: string) => {
  return await notLoggedAxios.get(`api/join/myjoinlist/${userid}`);
};

const detailJoin = async (roomNo: string) => {
  return await notLoggedAxios.get(`api/join/detailjoin/${roomNo}`);
};

const registJoin = async (data: registOnlineDTO | registOfflineDTO) => {
  return await notLoggedAxios.post(`api/join/registjoin`);
};

const cancelJoin = async (roomNo: string) => {
  return await notLoggedAxios.delete(`api/join/canceljoin/${roomNo}`);
};

const mainOfflineList = async () => {
  return await notLoggedAxios.get(`api/join/mainofflist`);
};

const mainOnlineList = async () => {
  return await notLoggedAxios.get(`api/join/mainonlist`);
};

const offlineJoinList = async (data: offlineJoinListDTO) => {
  return await notLoggedAxios.post(`api/join/offlinejoinlist`, data);
};

const onlineJoinList = async (data: onlineJoinListDTO) => {
  return await notLoggedAxios.post(`api/join/onlinejoinlist`, data);
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
