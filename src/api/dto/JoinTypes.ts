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

type registOnlineDTO = {
  type: string;
  hostid: string;
  date: string;
  time: string;
  totalcount: number;
  place: string;
  lat: number;
  lon: number;
  title: string;
  body: string;
  thumbnail: string;
};

type registOfflineDTO = {
  type: string;
  hostid: string;
  date: string;
  time: string;
  totalcount: number;
  pw: string;
  title: string;
  body: string;
  thumbnail: string;
};

type applyJoinDTO = {
  type: 'online' | 'offline';
  roomNo: number;
  userid: string;
};

type joinIsOkDTO = {
  type: 'online' | 'offline';
  roomNo: number;
  nickname: string;
  logtype: 'accept' | 'refuse';
};
export {
  onlineJoinListDTO,
  offlineJoinListDTO,
  applyJoinDTO,
  joinIsOkDTO,
  registOnlineDTO,
  registOfflineDTO,
};
