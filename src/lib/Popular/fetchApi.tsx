import { FETCH_MOVIE_POPULAR } from "@/constans/urlApi";
import axios from "axios";

export const API_KEY = process.env.API_KEY_MOVIE;
export const API_TOKEN = process.env.API_TOKEN_MOVIE;
export const getPopular = async () => {
  const response = await axios.get(FETCH_MOVIE_POPULAR, {
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
    },
    params: {
      api_key: API_KEY,
    },
  });
  return response?.data;
};
