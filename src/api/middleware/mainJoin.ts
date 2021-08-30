import {
  offlineJoinListDTO,
  registOnlineDTO,
  registOfflineDTO,
} from '@/api/dto/joinTypes';
import {
  myJoinList,
  detailJoin,
  registJoin,
  cancelJoin,
  mainOfflineList,
  mainOnlineList,
  offlineJoinList,
  onlineJoinList,
} from '@/api/server/mainJoin';
import {
  fbMyJoinList,
  fbDetailJoin,
  fbRegistJoin,
  fbCancelJoin,
  fbMainOfflineList,
  fbMainOnlineList,
  fbOfflineJoinList,
  fbOnlineJoinList,
} from '@/api/serverless/mainJoin';

const mwMyJoinList = async (type: 'server' | 'serverless', userid: string) => {
  if (type === 'server') {
    return await myJoinList(userid);
  } else {
    return await fbMyJoinList(userid);
  }
};

const mwDetailJoin = async (
  type: 'server' | 'serverless',
  roomNo: string,
  userid: string
) => {
  if (type === 'server') {
    return await detailJoin(roomNo, userid);
  } else {
    return await fbDetailJoin(roomNo);
  }
};

const mwRegistJoin = async (
  type: 'server' | 'serverless',
  data: registOnlineDTO | registOfflineDTO
) => {
  if (type === 'server') {
    return await registJoin(data);
  } else {
    return await fbRegistJoin(data);
  }
};

const mwCancelJoin = async (type: 'server' | 'serverless', roomNo: string) => {
  console.log(roomNo);
  if (type === 'server') {
    return await cancelJoin(roomNo);
  } else {
    return await fbCancelJoin(roomNo);
  }
};

const mwMainOfflinList = async (type: 'server' | 'serverless') => {
  if (type === 'server') {
    return await mainOfflineList();
  } else {
    return await fbMainOfflineList();
  }
};

const mwMainOnlineList = async (type: 'server' | 'serverless') => {
  if (type === 'server') {
    return await mainOnlineList();
  } else {
    return await fbMainOnlineList();
  }
};

const mwOfflineJoinList = async (
  type: 'server' | 'serverless',
  data: offlineJoinListDTO
) => {
  if (type === 'server') {
    return await offlineJoinList(data);
  } else {
    return await fbOfflineJoinList(data);
  }
};

const mwOnlineJoinList = async (type: 'server' | 'serverless', data: any) => {
  if (type === 'server') {
    return await onlineJoinList(data);
  } else {
    return await fbOnlineJoinList(data);
  }
};

export {
  mwMyJoinList,
  mwDetailJoin,
  mwRegistJoin,
  mwCancelJoin,
  mwMainOfflinList,
  mwMainOnlineList,
  mwOfflineJoinList,
  mwOnlineJoinList,
};
