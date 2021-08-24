import { enterChatRoom, addMessage } from '@/api/server/chat';
import { fbEnterChatRoom, fbAddMessage } from '@/api/serverless/chat';

const mwEnterChatRoom = async (
  type: 'server' | 'serverless',
  roomNo: string
) => {
  if (type === 'server') {
    return await enterChatRoom(roomNo);
  } else {
    return await fbEnterChatRoom(roomNo);
  }
};

const mwAddMessage = async (
  type: 'server' | 'serverless',
  roomNo: string,
  data: object
) => {
  if (type === 'server') {
    return await addMessage(roomNo, data);
  } else {
    return await fbAddMessage(roomNo, data);
  }
};

export { mwEnterChatRoom, mwAddMessage };
