import { notLoggedAxios } from '@/api/server/index';
import {
  onlineJoinListDTO,
  offlineJoinListDTO,
  registOnlineDTO,
  registOfflineDTO,
} from '@/api/dto/joinTypes';

const myJoinList = async (userid: string) => {
  try {
    const res = await notLoggedAxios.get(`api/join/myjoinlist/${userid}`);

    if (res.status === 200) {
      return res.data;
    }
  } catch (e) {
    console.error(e);
  }
};

const detailJoin = async (roomNo: string) => {
  try {
    const res = await notLoggedAxios.get(`api/join/detailjoin/${roomNo}`);

    if (res.status === 200) {
      return res.data;
    }
  } catch (e) {
    console.error(e);
  }
};

const registJoin = async (data: registOnlineDTO | registOfflineDTO) => {
  console.log(data);
  try {
    const res = await notLoggedAxios.post(`api/join/registjoin`, data);
    console.log('왜', res);
    if (res.status === 200) {
      return true;
    }
  } catch (e) {
    console.error(e);
  }
};

const cancelJoin = async (roomNo: string) => {
  return await notLoggedAxios.delete(`api/join/canceljoin/${roomNo}`);
};

const mainOfflineList = async () => {
  try {
    const res = await notLoggedAxios.get(`api/join/mainofflist`);
    if ((res.status = 200)) {
      return res.data;
    }
  } catch (e) {
    console.error(e);
  }
};

const mainOnlineList = async () => {
  try {
    const res = await notLoggedAxios.get(`api/join/mainonlist`);
    if ((res.status = 200)) {
      return res.data;
    }
  } catch (e) {
    console.error(e);
  }
};

const offlineJoinList = async (data: any) => {
  try {
    const res = await notLoggedAxios.post(`api/join/offlinejoinlist`, data);
    if ((res.status = 200)) {
      return res.data;
    }
  } catch (e) {
    console.error(e);
  }
};

const onlineJoinList = async (inputData: any) => {
  try {
    let data = {};
    if (inputData.data !== '') {
      data = { ...data, title: inputData.data };
    }
    if (inputData.follow !== 0) {
      data = { ...data, follow: inputData.follow };
    }
    if (inputData.date !== '') {
      data = { ...data, date: inputData.date };
    }
    if (inputData.pNumber !== 0) {
      data = { ...data, count: inputData.pNumber };
    }
    data = { ...data, start: inputData.start };

    const res = await notLoggedAxios.post(`api/join/onlinejoinlist`, data);
    if ((res.status = 200)) {
      return res.data;
    }
  } catch (e) {
    console.error(e);
  }
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
