import { applyJoinDTO, joinIsOkDTO, delAlarmDTO } from '@/api/dto/joinTypes';
import { fbDetailJoin } from '@/api/serverless/mainJoin';
import { getAuthFromCookie } from '@/composable/cookies';
import { db } from '@/api/serverless/firesbaseinit';

const fbApplyJoin = async (data: applyJoinDTO) => {
  try {
    const resJoin = await db
      .collection('users')
      .doc(data.hostid)
      .collection('joinlist')
      .doc(data.roomNo)
      .get();
    const resUser = await db.collection('users').doc(data.hostid).get();
    const joinData = resJoin.data();
    const userData = resUser.data();
    const applyData = {
      ...userData,
      ...joinData,
    };
    await db
      .collection('users')
      .doc(data.hostid)
      .collection('alarm')
      .add(applyData);
  } catch (e) {}
};

const fbJoinAcceptUser = async (data: joinIsOkDTO) => {
  await db
    .collection('users')
    .doc(getAuthFromCookie())
    .collection('alarm')
    .doc(data.alarmid)
    .delete();
  const joinData: any = await fbDetailJoin(data.roomNo);
  await db
    .collection('users')
    .doc(data.userid)
    .collection('joinlist')
    .doc(data.roomNo)
    .set(joinData);
  try {
  } catch (e) {}
};

const fbJoinRefuseUser = async (data: joinIsOkDTO) => {
  await db
    .collection('users')
    .doc(getAuthFromCookie())
    .collection('alarm')
    .doc(data.alarmid)
    .delete();
  try {
  } catch (e) {}
};

const fbGetAlarm = async (userid: string) => {
  try {
    const alarmList: any = [];
    const res = await db
      .collection('users')
      .doc(userid)
      .collection('alarm')
      .get();
    res.forEach((alarm) => {
      alarmList.push({ alarmid: alarm.id, ...alarm.data() });
    });
    return alarmList;
  } catch (e) {}
};

const fbUserDelAlarm = async (data: delAlarmDTO) => {
  try {
    await db
      .collection('users')
      .doc(data.userid)
      .collection('alarm')
      .doc(data.alarmNo)
      .delete();
  } catch (e) {}
};

export {
  fbApplyJoin,
  fbJoinAcceptUser,
  fbJoinRefuseUser,
  fbGetAlarm,
  fbUserDelAlarm,
};
