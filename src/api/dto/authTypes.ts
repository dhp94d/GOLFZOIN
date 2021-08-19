type signupDTO = {
  authType: string;
  email: string;
  name: string;
  profile: string;
  id: string;
  pw: string;
  nickname: string;
  address: string;
  p_number: string;
  hit: number;
  lat: number;
  lon: number;
  birth: string;
  gender: string;
};

type loginDTO = {
  authType: string;
  id: string;
  pw: string;
};

export { signupDTO, loginDTO };
