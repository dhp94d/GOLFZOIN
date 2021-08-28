import { notLoggedAxios } from '@/api/server/index';
import { applyJoinDTO, joinIsOkDTO, delAlarmDTO } from '@/api/dto/joinTypes';

const applyJoin = async (data: applyJoinDTO) => {
  try {
    console.log(data);
    const res = await notLoggedAxios.post(`api/join/applyjoin`, data);
    if ((res.status = 200)) {
      return true;
    }
  } catch (e) {
    console.error(e);
  }
};

const joinAcceptUser = async (data: joinIsOkDTO) => {
  try {
    console.log(data);
    const res = await notLoggedAxios.post(`api/join/acceptuser`, data);
    if ((res.status = 200)) {
      return true;
    }
  } catch (e) {
    console.error(e);
  }
};

const joinRefuseUser = async (data: joinIsOkDTO) => {
  try {
    console.log(data);
    const res = await notLoggedAxios.post(`api/join/refuseuser`, data);
    if ((res.status = 200)) {
      return true;
    }
  } catch (e) {
    console.error(e);
  }
};

const getHostAlarm = async (userid: string) => {
  try {
    console.log(userid);
    const res = await notLoggedAxios.get(`api/join/jointempuser/${userid}`);
    if ((res.status = 200)) {
      return res.data;
    }
  } catch (e) {
    console.error(e);
  }
};

const getApplyAlarm = async (userid: string) => {
  try {
    console.log(userid);
    const res = await notLoggedAxios.get(`api/join/alarm/${userid}`);
    if ((res.status = 200)) {
      return res.data;
    }
  } catch (e) {
    console.error(e);
  }
};

const userDelAlarm = async (data: delAlarmDTO) => {
  try {
    console.log(data);
    const res = await notLoggedAxios.delete(
      `api/join/alarm/delete?user=${data.userid}&alarmNo=${data.alarmNo}`
    );
    if ((res.status = 200)) {
      return res.data;
    }
  } catch (e) {
    console.error(e);
  }
};

export {
  applyJoin,
  joinAcceptUser,
  joinRefuseUser,
  getHostAlarm,
  getApplyAlarm,
  userDelAlarm,
};
