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
};

const addMessage = async (roomNo: string, data: object) => {
  try {
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
};

export { enterChatRoom, addMessage };
