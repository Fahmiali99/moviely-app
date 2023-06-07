import {
  API_KEY_MOVIE,
  API_TOKEN_MOVIE,
  FETCH_TV_ANIMASI,
} from "@/constans/urlApi";
import axios from "axios";

export const getAnimasiTv = async () => {
  const response = await axios.get(FETCH_TV_ANIMASI, {
    headers: {
      Authorization: `Bearer ${API_TOKEN_MOVIE}`,
    },
    params: {
      api_key: API_KEY_MOVIE,
    },
  });
  return response?.data?.results;
};
