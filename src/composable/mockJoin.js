import { fbSignup } from '@/api/serverless/auth';

const ONLINEJOINIMG = [
  'https://firebasestorage.googleapis.com/v0/b/golfzoin-c7351.appspot.com/o/join%2Fdefault_profile.png1629109231428_250x250?alt=media&token=2a788b78-2f3b-457a-a48b-6681337d9119',
  'https://firebasestorage.googleapis.com/v0/b/golfzoin-c7351.appspot.com/o/join%2F%EA%B0%95%EB%8F%99%EC%9B%90.jpg1628659660404_250x250?alt=media&token=7c5d7ad1-62f7-4593-8139-94dfc717dc0a',
  'https://firebasestorage.googleapis.com/v0/b/golfzoin-c7351.appspot.com/o/join%2F%EA%B0%95%ED%98%B8%EB%8F%99.jpg1628659740887_250x250?alt=media&token=1c07409c-624d-4cef-bd0b-5fbb36d82dc2',
  'https://firebasestorage.googleapis.com/v0/b/golfzoin-c7351.appspot.com/o/join%2F%EA%B9%80%EC%88%98%ED%98%84.jpg1629110834746_250x250?alt=media&token=b50c5620-3a85-47e5-84c9-91794cf1cc97',
  'https://firebasestorage.googleapis.com/v0/b/golfzoin-c7351.appspot.com/o/join%2F%EA%B9%80%EC%97%B0%EC%9A%B0.jpg1629110892904_250x250?alt=media&token=05c3f107-a9b3-4a80-aa03-726201e9bd32',
  'https://firebasestorage.googleapis.com/v0/b/golfzoin-c7351.appspot.com/o/join%2F%EA%B9%80%EC%9A%B0%EB%B9%88.jpg1629110864572_250x250?alt=media&token=015ae8cf-5615-4c83-a9f2-120c054d7af2',
  'https://firebasestorage.googleapis.com/v0/b/golfzoin-c7351.appspot.com/o/join%2F%EB%B0%A9%ED%83%84%EC%86%8C%EB%85%84%EB%8B%A8.jpg1628687216642_250x250?alt=media&token=7c0560ba-e039-4889-a42b-26fc4071595a',
  'https://firebasestorage.googleapis.com/v0/b/golfzoin-c7351.appspot.com/o/join%2F%EC%95%84%EC%9D%B4%EC%9C%A0.jpg1628659628803_250x250?alt=media&token=248e34a5-bede-4d6f-80c1-952740cb933a',
  'https://firebasestorage.googleapis.com/v0/b/golfzoin-c7351.appspot.com/o/join%2F%EC%9C%A0%EC%9E%AC%EC%84%9D.jpg1628659723766_250x250?alt=media&token=9ee7ac1e-a30b-41db-829e-1852a937f81d',
  'https://firebasestorage.googleapis.com/v0/b/golfzoin-c7351.appspot.com/o/join%2F%EC%9C%A4%EC%A2%85%EC%8B%A0.jpg1629110878951_250x250?alt=media&token=ff2969a3-4ec0-4701-8ba3-b7403ab8a3a3',
  'https://firebasestorage.googleapis.com/v0/b/golfzoin-c7351.appspot.com/o/join%2F%EC%9E%84%EC%9E%AC%EB%B2%94.jpg1629110915939_250x250?alt=media&token=b204fd52-4f7b-461a-ac72-13ccdc22fbd2',
  'https://firebasestorage.googleapis.com/v0/b/golfzoin-c7351.appspot.com/o/join%2F%EC%9E%A5%EB%8F%99%EA%B6%8C.jpg1628659687064_250x250?alt=media&token=f3e277b1-5772-4964-99f3-eb0f0391cf35',
  'https://firebasestorage.googleapis.com/v0/b/golfzoin-c7351.appspot.com/o/join%2F%EC%A0%84%EC%A7%80%ED%98%84.jpg1628659759238_250x250?alt=media&token=da68b600-18f2-4a8c-842c-acd513c5fa2d',
];

const ADDRESSLIST = [
  {
    addressName: '서울 관악구 난곡로 100',
    longitude: '126.919613685063',
    latitude: '37.4645001795391',
  },
  {
    addressName: '서울특별시 관악구 남부순환로 1369 관악농협 농산물백화점',
    longitude: '126.9000639',
    latitude: '37.4801338',
  },
  {
    addressName: '서울특별시 관악구 관악로 217 동진빌딩복사',
    longitude: '126.9524633',
    latitude: '37.4843496',
  },
  {
    addressName: '서울특별시 관악구 남부순환로 1878',
    longitude: '126.9559209',
    latitude: '37.4787962',
  },
  {
    addressName: '서울특별시 금천구 시흥대로 97 A상가 B-7호',
    longitude: '126.8993525',
    latitude: '37.4432574',
  },
  {
    addressName: '서울특별시 영등포구 대림로 157 일승빌딩 4층',
    longitude: '126.9002764',
    latitude: '37.4922967',
  },
  {
    addressName: '서울특별시 동작구 보라매로5길 43 지하1층 106-1호',
    longitude: '126.9212143',
    latitude: '37.4913988',
  },
];

const UserData = [
  {
    email: 'test1@test.com',
    id: 'test1@test.com',
    pw: 'testtest',
    name: '강동원',
    nickname: '강동원',
    profile:
      'https://console.firebase.google.com/project/golfzoin-c7351/storage/golfzoin-c7351.appspot.com/files/~2Fjoin~2Fonline',
  },
  {
    email: 'test2@test.com',
    id: 'test2@test.com',
    pw: 'testtest',
    name: '강호동',
    nickname: '강호동',
    profile:
      'https://firebasestorage.googleapis.com/v0/b/golfzoin-c7351.appspot.com/o/join%2Fonline%2F%EA%B0%95%ED%98%B8%EB%8F%99.jfif1630464254237_250x250?alt=media&token=55de15a5-2fd2-425c-8c58-1faa380d3973',
  },
  {
    email: 'test3@test.com',
    id: 'test3@test.com',
    pw: 'testtest',
    name: '김계란',
    nickname: '김계란',
    profile:
      'https://firebasestorage.googleapis.com/v0/b/golfzoin-c7351.appspot.com/o/join%2Fonline%2F%EA%B9%80%EA%B3%84%EB%9E%80.jfif1630464295960_250x250?alt=media&token=8710ff16-9da0-48ed-90d1-af0e6f2fc936',
  },
  {
    email: 'test4@test.com',
    id: 'test4@test.com',
    pw: 'testtest',
    name: '김국진',
    nickname: '김국진',
    profile:
      'https://firebasestorage.googleapis.com/v0/b/golfzoin-c7351.appspot.com/o/join%2Fonline%2F%EA%B9%80%EA%B5%AD%EC%A7%84.jpg1630287171887_250x250?alt=media&token=40877a1c-d7dc-4056-920e-7283a73404d2',
  },
  {
    email: 'test5@test.com',
    id: 'test5@test.com',
    pw: 'testtest',
    name: '김수현',
    nickname: '김수현',
    profile:
      'https://firebasestorage.googleapis.com/v0/b/golfzoin-c7351.appspot.com/o/join%2Fonline%2F%EA%B9%80%EC%88%98%ED%98%84.jpg1629110834746_250x250?alt=media&token=b81ed585-366f-45f0-ae96-5e3c5ff90833',
  },
  {
    email: 'test6@test.com',
    id: 'test6@test.com',
    pw: 'testtest',
    name: '박인비',
    nickname: '박인비프로',
    profile:
      'https://firebasestorage.googleapis.com/v0/b/golfzoin-c7351.appspot.com/o/join%2Fonline%2F%EB%B0%95%EC%9D%B8%EB%B9%84.jpg1630287150792_250x250?alt=media&token=fde9fda1-0031-43d5-9c44-89d06f9bc39a',
  },
  {
    email: 'test7@test.com',
    id: 'test7@test.com',
    pw: 'testtest',
    name: '박준형',
    nickname: '와썹맨',
    profile:
      'https://firebasestorage.googleapis.com/v0/b/golfzoin-c7351.appspot.com/o/join%2Fonline%2F%EB%B0%95%EC%A4%80%ED%98%95.jfif1630464322554_250x250?alt=media&token=a37dfe19-0ed5-4b5f-b36b-be0d9f3f2b2b',
  },
  {
    email: 'test8@test.com',
    id: 'test8@test.com',
    pw: 'testtest',
    name: '방탄소년단',
    nickname: 'BTS',
    profile:
      'https://firebasestorage.googleapis.com/v0/b/golfzoin-c7351.appspot.com/o/join%2Fonline%2F%EB%B0%A9%ED%83%84%EC%86%8C%EB%85%84%EB%8B%A8.jpg1628687216642_250x250?alt=media&token=a5e957c6-506e-4dd7-8416-b169dca4655f',
  },
  {
    email: 'test9@test.com',
    id: 'test9@test.com',
    pw: 'testtest',
    name: '아이유',
    nickname: '아이유',
    profile:
      'https://firebasestorage.googleapis.com/v0/b/golfzoin-c7351.appspot.com/o/join%2Fonline%2F%EC%95%84%EC%9D%B4%EC%9C%A0.jpg1628659628803_250x250?alt=media&token=7d7d0bd2-75e2-4d72-941b-690b9a8dd492',
  },
  {
    email: 'test10@test.com',
    id: 'test10@test.com',
    pw: 'testtest',
    name: '유재석',
    nickname: '유재석',
    profile:
      'https://firebasestorage.googleapis.com/v0/b/golfzoin-c7351.appspot.com/o/join%2Fonline%2F%EC%9C%A0%EC%9E%AC%EC%84%9D.jpg1628659723766_250x250?alt=media&token=11bea951-e1d4-4614-84c5-7d5f86651cf0',
  },
  {
    email: 'test11@test.com',
    id: 'test11@test.com',
    pw: 'testtest',
    name: '임성재',
    nickname: '임성재',
    profile:
      'https://firebasestorage.googleapis.com/v0/b/golfzoin-c7351.appspot.com/o/join%2Fonline%2F%EC%9E%84%EC%84%B1%EC%9E%AC.jpg1630287099947_250x250?alt=media&token=308f64be-3ec7-443c-8de1-c584efa1bb2f',
  },
  {
    email: 'test12@test.com',
    id: 'test12@test.com',
    pw: 'testtest',
    name: '임재범',
    nickname: '임재범',
    profile:
      'https://firebasestorage.googleapis.com/v0/b/golfzoin-c7351.appspot.com/o/join%2Fonline%2F%EC%9E%84%EC%9E%AC%EB%B2%94.jfif1630464350397_250x250?alt=media&token=c3950c31-ae42-4eb2-a8fb-8bc68b4c6469',
  },
  {
    email: 'test13@test.com',
    id: 'test13@test.com',
    pw: 'testtest',
    name: '장동건',
    nickname: '장동건',
    profile:
      'https://firebasestorage.googleapis.com/v0/b/golfzoin-c7351.appspot.com/o/join%2Fonline%2F%EC%9E%A5%EB%8F%99%EA%B6%8C.jpg1628659687064_250x250?alt=media&token=197d0a23-2675-4abf-b02b-4e5c6f1cd05c',
  },
  {
    email: 'test14@test.com',
    id: 'test14@test.com',
    pw: 'testtest',
    name: '전지현',
    nickname: '전지현',
    profile:
      'https://firebasestorage.googleapis.com/v0/b/golfzoin-c7351.appspot.com/o/join%2Fonline%2F%EC%A0%84%EC%A7%80%ED%98%84.jpg1628659759238_250x250?alt=media&token=8bf0ac15-732c-4d1d-871c-e2881763aa96',
  },
  {
    email: 'test15@test.com',
    id: 'test15@test.com',
    pw: 'testtest',
    name: '태진아',
    nickname: '태진아',
    profile:
      'https://firebasestorage.googleapis.com/v0/b/golfzoin-c7351.appspot.com/o/join%2Fonline%2F%ED%83%9C%EC%A7%84%EC%95%84.jfif1630464371447_250x250?alt=media&token=cd04beb5-183d-451d-8ebd-733802941926',
  },
  {
    email: 'test16@test.com',
    id: 'test16@test.com',
    pw: 'testtest',
    name: '고진영',
    nickname: '고진영',
    profile:
      'https://firebasestorage.googleapis.com/v0/b/golfzoin-c7351.appspot.com/o/join%2Fonline%2F%EA%B3%A0%EC%A7%84%EC%98%81.jpg1630287126783_250x250?alt=media&token=3480b63d-ebbc-444c-806c-c85419396525',
  },
  {
    email: 'test17@test.com',
    id: 'test17@test.com',
    pw: 'testtest',
    name: '유이',
    nickname: '유이',
    profile:
      'https://firebasestorage.googleapis.com/v0/b/golfzoin-c7351.appspot.com/o/join%2Fonline%2Fyui.jpg1630217935348_250x250?alt=media&token=78adc9b4-5241-4199-a665-80c00f6408e6',
  },
];
export const makeUser = async () => {
  // for (let i = 0; i < 17; i++) {
  //   let address = ADDRESSLIST[Math.floor(Math.random() * 7)];
  //   const data = {
  //     email: UserData[i].email,
  //     id: UserData[i].id,
  //     pw: UserData[i].pw,
  //     name: UserData[i].name,
  //     nickname: UserData[i].nickname,
  //     birthday: `19${
  //       [5, 6, 7, 8, 9][Math.floor(Math.random() * 5)]
  //     }${Math.floor(Math.random() * 10)}-${String(
  //       Math.ceil(Math.random() * 12)
  //     ).padStart(2, '0')}-${String(Math.ceil(Math.random() * 31)).padStart(
  //       2,
  //       '0'
  //     )}`,
  //     p_number: `010-${String(Math.floor(Math.random() * 1000)).padStart(
  //       4,
  //       Math.random()
  //     )}-${String(Math.floor(Math.random() * 1000)).padStart(
  //       4,
  //       Math.random()
  //     )}`,
  //     gender: ['man', 'girl'][Math.floor(Math.random() * 2)],
  //     lat: address.latitude,
  //     lon: address.longitude,
  //     place: address.addressName,
  //     hit: [90, 80, 100, 110, 120][Math.floor(Math.random() * 5)],
  //     profile: UserData[i].profile,
  //   };
  //   await fbSignup(data);
  // }
};

export const makeOnlinJoin = async () => {
  for (let i = 0; i < 10; i++) {
    let day = String(Math.ceil(Math.random() * 31)).padStart(2, '0');
    let time = String(Math.ceil(Math.random() * 24)).padStart(2, '0');
    let minutes = ['10', '20', '30', '40', '50'];
    let data = {
      body: BODYLIST[Math.floor(Math.random() * 4)],
      date: `2021-09-${day}`,
      hostid: 'dw1156@naver.com',
      pw: '1234',
      thumbnail: '',
      time: `${time}:${minutes[Math.floor(Math.random() * 5)]}`,
      title: '온라인 조인 같이해요',
      totalcount: '10',
      type: 'online',
    };
  }
  await fbRegistJoin(data);
};

export const makeOfflinJoin = async () => {
  for (let i = 0; i < 10; i++) {
    let address = ADDRESSLIST[Math.floor(Math.random() * 7)];
    let day = String(Math.ceil(Math.random() * 31)).padStart(2, '0');
    let time = String(Math.ceil(Math.random() * 24)).padStart(2, '0');
    let minutes = ['10', '20', '30', '40', '50'];
    let data = {
      body: OFFLINETITLE[Math.floor(Math.random() * 7)],
      date: `2021-08-${day}`,
      latitude: address.latitude,
      longitude: address.longitude,
      place: address.addressName,
      hostid: 'dw1156@naver.com',
      thumbnail: '',
      time: `${time}:${minutes[Math.floor(Math.random() * 5)]}`,
      title: OFFLINETITLE[Math.floor(Math.random() * 7)],
      totalcount: '10',
      type: 'offline',
    };
  }
  await fbRegistJoin(data);
};
