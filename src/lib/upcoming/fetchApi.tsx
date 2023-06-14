import { API_TOKEN_MOVIE, FETCH_MOVIE_UPCOMING } from "@/constans/urlApi";
import axios from "axios";

export const getUpcoming = async () => {
  const response = await axios.get(FETCH_MOVIE_UPCOMING, {
    headers: {
      Authorization: `Bearer ${API_TOKEN_MOVIE}`,
    },
    params: {
      api_key: API_TOKEN_MOVIE,
    },
  });
  return response?.data?.results;
};
