import {
  API_KEY_MOVIE,
  API_TOKEN_MOVIE,
  FETCH_MOVIE_DISCOVER,
} from "@/constans/urlApi";
import axios from "axios";

export const getDiscover = async (language?: string) => {
  const params = {
    api_key: API_KEY_MOVIE,
    with_original_language: language || "",
  };

  const response = await axios.get(FETCH_MOVIE_DISCOVER, {
    headers: {
      Authorization: `Bearer ${API_TOKEN_MOVIE}`,
    },
    params: params,
  });

  return response?.data?.results;
};
