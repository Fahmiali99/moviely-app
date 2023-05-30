import {
  API_KEY_MOVIE,
  API_TOKEN_MOVIE,
  FETCH_TV_DISCOVER,
} from "@/constans/urlApi";
import axios from "axios";

export const getDiscoverTv = async () => {
  const response = await axios.get(FETCH_TV_DISCOVER, {
    headers: {
      Authorization: `Bearer ${API_TOKEN_MOVIE}`,
    },
    params: {
      api_key: API_KEY_MOVIE,
    },
  });
  return response?.data?.results;
};
