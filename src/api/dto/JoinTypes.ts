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

type ApplyJoinDTO = {
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
export { onlineJoinListDTO, offlineJoinListDTO, ApplyJoinDTO, joinIsOkDTO };
