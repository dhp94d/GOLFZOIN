import { notLoggedAxios } from '@/api/server/index';

const enterChatRoom = async (roomNo: string) => {
  try {
    const res = await notLoggedAxios.get(`/api/chat/enterchatroom/${roomNo}`);
    if ((res.status = 200)) {
      return res.data;
    }
  } catch (e) {
    console.error(e);
  }
  // return await notLoggedAxios.get(`/api/chat/enterchatroom/${roomNo}`);
};

const addMessage = async (roomNo: string, data: object) => {
  try {
    console.log(roomNo, data);
    const res = await notLoggedAxios.get(
      `/api/chat/enterchatroom/${roomNo}`,
      data
    );
    if ((res.status = 200)) {
      return res.data;
    }
  } catch (e) {
    console.error(e);
  }
  // return await notLoggedAxios.get(`/api/chat/enterchatroom/${roomNo}`, data);
};

export { enterChatRoom, addMessage };
