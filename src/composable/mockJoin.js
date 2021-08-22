import { auth, db } from '@/firebase/firebaseinit.ts';
import { fbCretaeJoin } from '@/firebase/join.ts';

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

const OFFLINEJOINIMG = [
  'https://firebasestorage.googleapis.com/v0/b/golfzoin-c7351.appspot.com/o/join%2Fdefault_profile.png1629109231428_250x250?alt=media&token=2a788b78-2f3b-457a-a48b-6681337d9119',
  'https://firebasestorage.googleapis.com/v0/b/golfzoin-c7351.appspot.com/o/join%2Fdefault_profile.png1629109231428_250x250?alt=media&token=2a788b78-2f3b-457a-a48b-6681337d9119',
  'https://firebasestorage.googleapis.com/v0/b/golfzoin-c7351.appspot.com/o/join%2Fdefault_profile.png1629109231428_250x250?alt=media&token=2a788b78-2f3b-457a-a48b-6681337d9119',
  'https://firebasestorage.googleapis.com/v0/b/golfzoin-c7351.appspot.com/o/join%2F9.jpg1629111359767_250x250?alt=media&token=d5bb2581-a8b3-462d-bda2-f7cba6439ea6',
  'https://firebasestorage.googleapis.com/v0/b/golfzoin-c7351.appspot.com/o/join%2F8.jpg1629111333636_250x250?alt=media&token=ac492ccf-35a6-4952-b6c8-437481b85fe5',
  'https://firebasestorage.googleapis.com/v0/b/golfzoin-c7351.appspot.com/o/join%2F7.jpg1629111343013_250x250?alt=media&token=a64a54d3-395f-4ed2-906c-189c8435d452',
  'https://firebasestorage.googleapis.com/v0/b/golfzoin-c7351.appspot.com/o/join%2F6.jpg1629111369730_250x250?alt=media&token=a92a2b8b-3c9a-431a-a534-f8d69e72d42c',
  'https://firebasestorage.googleapis.com/v0/b/golfzoin-c7351.appspot.com/o/join%2F5.jpg1629111366823_250x250?alt=media&token=790ed215-21e0-419c-9c79-c84ff96145e4',
  'https://firebasestorage.googleapis.com/v0/b/golfzoin-c7351.appspot.com/o/join%2F4.jpg1629111363564_250x250?alt=media&token=873d04b8-627b-484a-9a81-91ee417db913',
  'https://firebasestorage.googleapis.com/v0/b/golfzoin-c7351.appspot.com/o/join%2F3.jpg1629111213504_250x250?alt=media&token=22fb5dcd-fd6d-428c-9a9c-69cf92c2f8d0',
  'https://firebasestorage.googleapis.com/v0/b/golfzoin-c7351.appspot.com/o/join%2F2.jpg1629111206654_250x250?alt=media&token=9c87b372-1227-43da-b54f-b6f42bc6810f',
  'https://firebasestorage.googleapis.com/v0/b/golfzoin-c7351.appspot.com/o/join%2F10.jpg1629111195409_250x250?alt=media&token=9eed90e5-98a5-4f29-a383-80504d3cc321',
  'https://firebasestorage.googleapis.com/v0/b/golfzoin-c7351.appspot.com/o/join%2Fdefault_profile.png1629109231428_250x250?alt=media&token=2a788b78-2f3b-457a-a48b-6681337d9119',
];

const EMAILLIST = [
  'a@a.com',
  'b@a.com',
  'c@a.com',
  'd@a.com',
  'e@a.com',
  'f@a.com',
  'g@a.com',
];

const BODYLIST = [
  '이번에 골프존 네트워크 플레이를 진행하려는데 팬들과 함께하고 싶어요!',
  '골프존 네트워크 플레이! 저와함께 즐겨요!!',
  '저희들과 함께 쳐용',
  '팬분들 안녕하세요? \n오랜만이에요 골프존 네트워크플레이로 저를 만나러 오세요!',
];

const OFFLINEBODY = [];

const OFFLINETITLE = [
  '골프존파크 신림 뉴스크린골프에서 같이 치실분 구해용',
  '골프존 천둥스크린골프에서 같이 치실분 구해용',
  '골프존파크 JB골프점에서 같이 치실분 구해용',
  '골프존파크 그레이점에서 같이 치실분 구해용',
  '골프존 대산점에서 같이 치실분 구해용',
  '엘렌스크린 골프존 대림점에서 같이 치실분 구해용',
  '골프존파크 쉐르빌점에서 같이 치실분 구해용',
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

export const makeOnlinJoin = async () => {
  for (let i = 0; i < 50; i++) {
    let day = String(Math.ceil(Math.random() * 31)).padStart(2, '0');
    let time = String(Math.ceil(Math.random() * 24)).padStart(2, '0');
    let minutes = ['10', '20', '30', '40', '50'];
    let data = {
      body: BODYLIST[Math.floor(Math.random() * 4)],
      date: `2021-08-${day}`,
      hostid: EMAILLIST[Math.floor(Math.random() * 7)],
      pw: '1234',
      thumbnail: ONLINEJOINIMG[Math.floor(Math.random() * 13)],
      time: `${time}:${minutes[Math.floor(Math.random() * 5)]}`,
      title: '온라인 조인 같이해요',
      totalcount: 10,
      type: 'online',
    };
    await fbCretaeJoin(data);
  }
};

export const makeOfflinJoin = async () => {
  for (let i = 0; i < 100; i++) {
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
      hostid: EMAILLIST[Math.floor(Math.random() * 7)],
      thumbnail: OFFLINEJOINIMG[Math.floor(Math.random() * 13)],
      time: `${time}:${minutes[Math.floor(Math.random() * 5)]}`,
      title: OFFLINETITLE[Math.floor(Math.random() * 7)],
      totalcount: 10,
      type: 'offline',
    };
    await fbCretaeJoin(data);
  }
};
