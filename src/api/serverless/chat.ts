import { db } from '@/api/serverless/firesbaseinit';
import store from '@/store';

const fbEnterChatRoom = async (roomNo: string) => {
  try {
    store.commit('loading/startSpinner');

    const res = await db
      .collection('chat')
      .doc(roomNo)
      .collection('messages')
      .orderBy('date');
    store.commit('loading/endSpinner');
    return res;
  } catch (e) {}
};

const fbAddMessage = async (roomNo: string, data: any) => {
  try {
    store.commit('loading/startSpinner');
    await db.collection('chat').doc(roomNo).collection('messages').add(data);
    store.commit('loading/endSpinner');
  } catch (e) {}
};

export { fbEnterChatRoom, fbAddMessage };
