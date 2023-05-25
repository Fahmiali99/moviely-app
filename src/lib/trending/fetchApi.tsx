import {
  API_KEY_MOVIE,
  API_TOKEN_MOVIE,
  FETCH_MOVIE_TRENDING,
} from "@/constans/urlApi";
import axios from "axios";
import React from "react";

export const getTrending = async () => {
  const response = await axios.get(FETCH_MOVIE_TRENDING + API_KEY_MOVIE, {
    headers: {
      Authorization: `Bearer ${API_TOKEN_MOVIE}`,
    },
    params: {
      api_key: API_KEY_MOVIE,
    },
  });

  return response?.data?.results;
};
