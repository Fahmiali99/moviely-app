import {
  API_KEY_MOVIE,
  API_TOKEN_MOVIE,
  FETCH_MOVIE_POPULAR,
} from "@/constans/urlApi";

import axios from "axios";

export const getPopular = async () => {
  const response = await axios.get(
    `${FETCH_MOVIE_POPULAR}?api_key=${API_KEY_MOVIE}`,
    {
      headers: {
        Authorization: `Bearer ${API_TOKEN_MOVIE}`,
        Accept: "application/json",
      },
    }
  );

  return response?.data?.results;
};
