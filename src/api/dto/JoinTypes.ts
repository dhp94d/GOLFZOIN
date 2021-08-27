type onlineJoinListDTO = {
  start: string;
  title?: string;
  count?: string;
  date?: string;
};

type offlineJoinListDTO = {
  lat: string;
  lon: string;
  size: string;
  title?: string;
  count?: string;
  date?: string;
};

type registOfflineDTO = {
  type: string;
  hostid: string;
  date: string;
  time: string;
  totalcount: string;
  place: string;
  lat: number;
  lon: number;
  title: string;
  body: string;
  thumbnail: string;
};

type registOnlineDTO = {
  type: string;
  hostid: string;
  date: string;
  time: string;
  totalcount: string;
  pw: string;
  title: string;
  body: string;
  thumbnail: string;
};

type applyJoinDTO = {
  type: 'online' | 'offline';
  hostid: string;
  roomNo: string;
  userid: string;
};

type joinIsOkDTO = {
  type: 'online' | 'offline';
  roomNo: string;
  userid: string;
  alarmid: string;
  logtype: 'accept' | 'refuse';
};

type delAlarmDTO = {
  alarmType: string;
  alarmNo: string;
  userid: string;
};
export {
  onlineJoinListDTO,
  offlineJoinListDTO,
  applyJoinDTO,
  joinIsOkDTO,
  registOnlineDTO,
  registOfflineDTO,
  delAlarmDTO,
};
