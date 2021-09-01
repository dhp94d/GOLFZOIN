import { fbRegistJoin } from '@/api/serverless/mainJoin';

//22
const ONLINEJOINIMG = [
  'https://firebasestorage.googleapis.com/v0/b/golfzoin-c7351.appspot.com/o/default_profile_250x250.png?alt=media&token=7cbd3d4c-5e16-4f1d-a634-f8536c81903d',
  'https://firebasestorage.googleapis.com/v0/b/golfzoin-c7351.appspot.com/o/join%2Foffline%2F99.jpg1630309026694_250x250?alt=media&token=1e597a61-9624-409f-9309-4593613e877c',
  'https://firebasestorage.googleapis.com/v0/b/golfzoin-c7351.appspot.com/o/join%2Foffline%2F88.jpg1630309019109_250x250?alt=media&token=77744d62-e342-4c52-94c8-068234db93fc',
  'https://firebasestorage.googleapis.com/v0/b/golfzoin-c7351.appspot.com/o/join%2Foffline%2F8.jpg1629111333636_250x250?alt=media&token=9bee0b78-9558-4dc6-b8cf-6ebcec4dc83d',
  'https://firebasestorage.googleapis.com/v0/b/golfzoin-c7351.appspot.com/o/join%2Foffline%2F77.jpg1630309014414_250x250?alt=media&token=3ee4d1fe-4c96-4551-b70f-0912d3cea212',
  'https://console.firebase.google.com/project/golfzoin-c7351/storage/golfzoin-c7351.appspot.com/files/~2Fjoin~2Foffline',
  'https://firebasestorage.googleapis.com/v0/b/golfzoin-c7351.appspot.com/o/join%2Foffline%2F6.jpg1629111369730_250x250?alt=media&token=eeeb3dc1-80d2-4389-ae97-3f59b1bb86b2',
  'https://firebasestorage.googleapis.com/v0/b/golfzoin-c7351.appspot.com/o/join%2Foffline%2F55.jpg1630309008422_250x250?alt=media&token=0eb8d021-e657-4479-82a8-e25d63ef6165',
  'https://firebasestorage.googleapis.com/v0/b/golfzoin-c7351.appspot.com/o/default_profile_250x250.png?alt=media&token=7cbd3d4c-5e16-4f1d-a634-f8536c81903d',
  'https://firebasestorage.googleapis.com/v0/b/golfzoin-c7351.appspot.com/o/join%2Foffline%2F44.jpg1630309004254_250x250?alt=media&token=eefe7c77-5e2b-4ed3-ab18-b989dc803c00',
  'https://firebasestorage.googleapis.com/v0/b/golfzoin-c7351.appspot.com/o/default_profile_250x250.png?alt=media&token=7cbd3d4c-5e16-4f1d-a634-f8536c81903d',
  'https://firebasestorage.googleapis.com/v0/b/golfzoin-c7351.appspot.com/o/join%2Foffline%2F4.jpg1629111363564_250x250?alt=media&token=861e6bb3-3c12-4eec-a6d3-77c348187df8',
  'https://firebasestorage.googleapis.com/v0/b/golfzoin-c7351.appspot.com/o/join%2Foffline%2F33.jpg1630309000567_250x250?alt=media&token=5702dff8-1e63-46c7-bf89-e3bbfb2fcd60',
  'https://firebasestorage.googleapis.com/v0/b/golfzoin-c7351.appspot.com/o/join%2Foffline%2F3.jpg1629111213504_250x250?alt=media&token=8aa3c9ad-50fe-4bf3-ac6e-25d6510b0ff3',
  'https://firebasestorage.googleapis.com/v0/b/golfzoin-c7351.appspot.com/o/join%2Foffline%2F22.jpg1630308996765_250x250?alt=media&token=97e18008-5195-4f70-85ac-473d2c82d89d',
  'https://firebasestorage.googleapis.com/v0/b/golfzoin-c7351.appspot.com/o/default_profile_250x250.png?alt=media&token=7cbd3d4c-5e16-4f1d-a634-f8536c81903d',
  'https://firebasestorage.googleapis.com/v0/b/golfzoin-c7351.appspot.com/o/join%2Foffline%2F2.jpg1629111206654_250x250?alt=media&token=c3dca7d4-0811-40c6-9e76-a1421942c6ec',
  'https://firebasestorage.googleapis.com/v0/b/golfzoin-c7351.appspot.com/o/join%2Foffline%2F1111.jpg1630371178368_250x250?alt=media&token=79ee2ee7-0695-4e1d-ad6d-292176370036',
  'https://firebasestorage.googleapis.com/v0/b/golfzoin-c7351.appspot.com/o/join%2Foffline%2F11.jpg1630308991719_250x250?alt=media&token=3a9c75a4-1fef-4a68-beaf-4291cdd400aa',
  'https://firebasestorage.googleapis.com/v0/b/golfzoin-c7351.appspot.com/o/join%2Foffline%2F1010.jpg1630371134766_250x250?alt=media&token=b82670a5-17ff-4fb8-807e-753b8941f651',
  'https://firebasestorage.googleapis.com/v0/b/golfzoin-c7351.appspot.com/o/join%2Foffline%2F10.jpg1629111195409_250x250?alt=media&token=00f44239-feab-45a2-9a31-e9bc57c9368f',
  'https://firebasestorage.googleapis.com/v0/b/golfzoin-c7351.appspot.com/o/default_profile_250x250.png?alt=media&token=7cbd3d4c-5e16-4f1d-a634-f8536c81903d',
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
  {
    addressName: '서울특별시 서초구 방배동 1832',
    longitude: '126.9773695',
    latitude: '37.4829706',
  },
  {
    addressName: '서울특별시 동작구 사당동 145-26',
    longitude: '126.9773695',
    latitude: '37.4829706',
  },
  {
    addressName: '사당동 120, 동작구 서울특별시',
    longitude: '126.9773695',
    latitude: '37.4829706',
  },
  {
    addressName: '서울특별시 강남구 역삼동 836-24',
    longitude: '4939965,127.0439576',
    latitude: '37.491398837',
  },
  {
    addressName: '역삼동 840-8번지 지하동 1층 상준빌딩 강남구 서울특별시 KR',
    longitude: '127.0439576',
    latitude: '37.4939965',
  },
  {
    addressName: '역삼동 840-8번지 지하동 1층 상준빌딩 강남구 서울특별시 KR',
    longitude: '127.0439576',
    latitude: '37.4939965',
  },
  {
    addressName: '서울특별시 서초구 서초동 1322-12',
    longitude: '127.0439576',
    latitude: '37.4939965',
  },
  {
    addressName: 'KR 서울특별시 강남구 역삼동 831-45번지 지하층 층 B03 B04호',
    longitude: '127.0439576',
    latitude: '37.4939965',
  },
  {
    addressName: '서울특별시 강남구 역삼동 648',
    longitude: '127.0439576',
    latitude: '37.4939965',
  },
  {
    addressName: '서울특별시 강남구 삼성동 144-1',
    longitude: '127.0438718',
    latitude: '37.5013509',
  },
  {
    addressName: '서울특별시 서초구 서초4동 서운로 220',
    longitude: '127.0438718',
    latitude: '37.5013509',
  },
  {
    addressName: '서울특별시 강남구 논현동 203',
    longitude: '127.034537',
    latitude: '37.5070485',
  },
  {
    addressName: '서울특별시 서초구 잠원동 나루터로 69',
    longitude: '127.034537',
    latitude: '37.5070485',
  },
  {
    addressName: '서울특별시 강남구 신사동 선릉로 823',
    longitude: '127.034537',
    latitude: '37.5070485',
  },
  {
    addressName: '서울특별시 강남구 신사동 585-13 재경빌딩 지하 1층',
    longitude: '127.034537',
    latitude: '37.5070485',
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
  for (let i = 0; i < 17; i++) {
    let day = String(Math.floor(Math.random() * 10));
    let time = String(Math.ceil(Math.random() * 24)).padStart(2, '0');
    let minutes = ['10', '20', '30', '40', '50'];
    let data = {
      body: [
        `팬분들과 함께 즐기고 싶어요!`,
        `${UserData[i].nickname}입니다! 오랜만에 함께 즐겨요^^`,
        `골프존 네트워크 플레이에서 만나요!`,
        `반갑습니다~ 오랜만에 같이 칠까요?`,
        `${UserData[i].nickname}와 함께 즐겨요!`,
      ][Math.floor(Math.random() * 5)],
      date: `2021-09-2${day}`,
      hostid: UserData[i].email,
      pw: '1234',
      thumbnail: UserData[i].profile,
      time: `${time}:${minutes[Math.floor(Math.random() * 5)]}`,
      title: `안녕하세요 ${UserData[i].nickname}`,
      totalcount: '10',
      type: 'online',
    };
    await fbRegistJoin(data);
  }
};

export const makeOfflinJoin = async () => {
  for (let i = 0; i < 22; i++) {
    let day = String(Math.floor(Math.random() * 10));
    let time = String(Math.ceil(Math.random() * 24)).padStart(2, '0');
    let minutes = ['10', '20', '30', '40', '50'];
    let data = {
      body: [
        '관악구 사는분!',
        '평균타수100타 같이쳐요',
        '2:2로 같이 치러가실분! 얼른 신청해주세요',
        '안녕하세요 골린이에요 ㅠㅠ 배우고싶어요',
        '안녕하세요 함께해요',
        '골프 알려주실분 있나요? ㅠㅠㅠ',
        '평균타수 90! 같이 쳐요',
      ][Math.floor(Math.random() * 7)],
      date: `2021-09-2${day}`,
      lat: ADDRESSLIST[i].latitude,
      lon: ADDRESSLIST[i].longitude,
      place: ADDRESSLIST[i].addressName,
      hostid: UserData[Math.floor(Math.random() * 17)].email,
      thumbnail: ONLINEJOINIMG[i],
      time: `${time}:${minutes[Math.floor(Math.random() * 5)]}`,
      title: [
        '관악구 사는분!',
        '평균타수100타 같이쳐요',
        '2:2로 같이 치러가실분! 얼른 신청해주세요',
        '안녕하세요 골린이에요 ㅠㅠ 배우고싶어요',
        '안녕하세요 함께해요',
        '골프 알려주실분 있나요? ㅠㅠㅠ',
        '평균타수 90! 같이 쳐요',
      ][Math.floor(Math.random() * 7)],
      totalcount: '8',
      type: 'offline',
    };
    await fbRegistJoin(data);
  }
};
