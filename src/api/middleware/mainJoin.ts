import { onlineJoinListDTO, offlineJoinListDTO } from '@/api/dto/joinTypes';
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

function mwMyJoinList(type: 'server' | 'serverless', userid: string) {
  if (type === 'server') {
    return myJoinList(userid);
  } else {
  }
}

function mwDetailJoin(type: 'server' | 'serverless', roomNo: string) {
  if (type === 'server') {
    return detailJoin(roomNo);
  } else {
  }
}

function mwRegistJoin(type: 'server' | 'serverless') {
  if (type === 'server') {
    return registJoin();
  } else {
  }
}

function mwCancelJoin(type: 'server' | 'serverless', roomNo: string) {
  if (type === 'server') {
    return cancelJoin(roomNo);
  } else {
  }
}

function mwMainOfflinList(type: 'server' | 'serverless') {
  if (type === 'server') {
    return mainOfflineList();
  } else {
  }
}

function mwMainOnlineList(type: 'server' | 'serverless') {
  if (type === 'server') {
    return mainOnlineList();
  } else {
  }
}

function mwOfflineJoinList(
  type: 'server' | 'serverless',
  data: offlineJoinListDTO
) {
  if (type === 'server') {
    return offlineJoinList(data);
  } else {
  }
}

function mwOnlineJoinList(
  type: 'server' | 'serverless',
  data: onlineJoinListDTO
) {
  if (type === 'server') {
    return onlineJoinList(data);
  } else {
  }
}

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
