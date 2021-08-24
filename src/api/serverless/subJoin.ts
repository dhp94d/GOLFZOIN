import { applyJoinDTO, joinIsOkDTO, delAlarmDTO } from '@/api/dto/joinTypes';
import { db } from '@/api/serverless/firesbaseinit';

const fbApplyJoin = async (data: applyJoinDTO) => {
  try {
    await db.collection('users').doc(data.hostid).collection('alarm').add(data);
  } catch (e) {}
};

const fbJoinAcceptUser = async (data: joinIsOkDTO) => {
  await db.collection('alarm').doc(data.hostid).collection('apply').add(data);
  try {
  } catch (e) {}
};

const fbJoinRefuseUser = async (data: joinIsOkDTO) => {
  await db.collection('alarm').doc(data.hostid).collection('apply').add(data);
  try {
  } catch (e) {}
};

const fbGetHostAlarm = async (userid: string) => {
  try {
    const res = await db
      .collection('users')
      .doc(userid)
      .collection('host')
      .get();
    return res;
  } catch (e) {}
};

const fbGetApplyAlarm = async (userid: string) => {
  try {
    const res = await db
      .collection('alarm')
      .doc(userid)
      .collection('apply')
      .get();
    return res;
  } catch (e) {}
};

const fbUserDelAlarm = async (data: delAlarmDTO) => {
  try {
    await db
      .collection('alarm')
      .doc(data.userid)
      .collection(data.alarmType)
      .doc(data.alarmNo)
      .delete();
  } catch (e) {}
};

export {
  fbApplyJoin,
  fbJoinAcceptUser,
  fbJoinRefuseUser,
  fbGetHostAlarm,
  fbGetApplyAlarm,
  fbUserDelAlarm,
};
