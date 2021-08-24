import { db } from '@/api/serverless/firesbaseinit';

const fbEnterChatRoom = async (roomNo: string) => {
  try {
    const res = await db
      .collection('chat')
      .doc(roomNo)
      .collection('messages')
      .orderBy('date');

    return res;
  } catch (e) {}
};

const fbAddMessage = async (roomNo: string, data: any) => {
  try {
    await db.collection('chat').doc(roomNo).collection('messages').add(data);
  } catch (e) {}
};

export { fbEnterChatRoom, fbAddMessage };
