import { applyJoinDTO, joinIsOkDTO, delAlarmDTO } from '@/api/dto/joinTypes';
import { fbDetailJoin } from '@/api/serverless/mainJoin';
import { getAuthFromCookie } from '@/composable/cookies';
import { db, arrayStore } from '@/api/serverless/firesbaseinit';

const fbApplyJoin = async (data: applyJoinDTO) => {
  try {
    const resJoin = await db.collection('join').doc(data.roomNo).get();
    const resUser = await db.collection('users').doc(getAuthFromCookie()).get();
    const joinData = resJoin.data();
    const userData = resUser.data();
    const applyData = {
      alarmType: 'apply',
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
  const joinData: any = await fbDetailJoin(data.roomNo);
  await db
    .collection('users')
    .doc(getAuthFromCookie())
    .collection('alarm')
    .doc(data.alarmid)
    .delete();

  const alarmData = {
    alarmType: 'notice',
    type: joinData.type,
    roomNo: joinData.roomNo,
    userid: data.userid,
    logtype: 'accept',
  };
  await db
    .collection('users')
    .doc(data.userid)
    .collection('alarm')
    .add(alarmData);

  await db
    .collection('users')
    .doc(data.userid)
    .collection('joinlist')
    .doc(data.roomNo)
    .set(joinData);

  const resUser = await db.collection('users').doc(data.userid).get();
  const userData = resUser.data();

  await db
    .collection('join')
    .doc(joinData.roomNo)
    .update({
      members: arrayStore.arrayUnion(userData),
    });
  await db
    .collection('join')
    .doc(joinData.roomNo)
    .update({
      members: arrayStore.arrayUnion('머야대체'),
    });
  try {
  } catch (e) {}
};

const fbJoinRefuseUser = async (data: joinIsOkDTO) => {
  const joinData: any = await fbDetailJoin(data.roomNo);
  const alarmData = {
    alarmType: 'notice',
    type: joinData.type,
    roomNo: joinData.roomNo,
    userid: data.userid,
    logtype: 'refuse',
  };
  await db
    .collection('users')
    .doc(getAuthFromCookie())
    .collection('alarm')
    .doc(data.alarmid)
    .delete();
  await db
    .collection('users')
    .doc(data.userid)
    .collection('alarm')
    .add(alarmData);
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
