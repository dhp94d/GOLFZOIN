import { createJoin } from '@/api/join';

const DEFAULT_IMG = process.env.VUE_APP_FIREBASE_GOLFZOIN;

export const mockStart = async () => {
  for (let i = 0; i < 50; i++) {
    let month = String(Math.ceil(Math.random() * 12)).padStart(2, '0');
    let day = String(Math.ceil(Math.random() * 31)).padStart(2, '0');
    let time = String(Math.ceil(Math.random() * 24)).padStart(2, '0');
    let minutes = String(Math.ceil(Math.random() * 60)).padStart(2, '0');
    let data = {
      type: 'online',
      data: {
        title: '온라인 조인 같이해요',
        time: `${time}:${minutes}`,
        date: `2021-${month}-${day}`,
        maximum:
          parseInt(Math.random() * 10) *
          parseInt(Math.random() * 10) *
          parseInt(Math.random() * 10),
        participants: 0,
        detailText: '안녕하세요 반갑습니다. 자세한 내용을 클릭해주세요',
        thumbnail: DEFAULT_IMG,
      },
    };
    await createJoin(data);
  }
};
