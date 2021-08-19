type onlineJoinListDTO = {
  start: string;
  title?: string;
  count?: string;
  date?: string;
};

type offlineJoinListDTO = {
  lat: string;
  lon: string;
  size: string;
  title?: string;
  count?: string;
  date?: string;
};

export { onlineJoinListDTO, offlineJoinListDTO };
