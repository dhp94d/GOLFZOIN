import { notLoggedAxios } from '@/api/server/index';

const enterChatRoom = async (roomNo: string) => {
  return await notLoggedAxios.get(`/api/chat/enterchatroom/${roomNo}`);
};

const addMessage = async (roomNo: string, data: object) => {
  return await notLoggedAxios.get(`/api/chat/enterchatroom/${roomNo}`, data);
};

export { enterChatRoom, addMessage };
