import { db } from '@/api/serverless/firesbaseinit';
import { saveAuthToCookie } from '@/composable/cookies';
import {
  onlineJoinListDTO,
  offlineJoinListDTO,
  registOnlineDTO,
  registOfflineDTO,
} from '@/api/dto/joinTypes';

const fbMyJoinList = (userid: string) => {};

const fbDetailJoin = (roomNo: string) => {};

const fbRegistJoin = (data: registOnlineDTO | registOfflineDTO) => {};

const fbCancelJoin = (roomNo: string) => {};

const fbMainOfflineList = () => {};

const fbMainOnlineList = () => {};

const fbOfflineJoinList = (data: offlineJoinListDTO) => {};

const fbOnlineJoinList = (data: onlineJoinListDTO) => {};

export {
  fbMyJoinList,
  fbDetailJoin,
  fbRegistJoin,
  fbCancelJoin,
  fbMainOfflineList,
  fbMainOnlineList,
  fbOfflineJoinList,
  fbOnlineJoinList,
};
