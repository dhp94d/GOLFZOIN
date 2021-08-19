type modifyUserDTO = {
  id?: string;
  nickname?: string;
  pw?: string;
  address?: string;
  lat?: number;
  lon?: number;
  p_number?: string;
  profile?: string;
  hit?: number;
};

type addFollowDTO = {
  userid: string;
  targetid: string;
};

export { modifyUserDTO, addFollowDTO };
