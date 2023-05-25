import { FETCH_MOVIE_TRENDING } from "@/constans/urlApi";
import axios from "axios";
import React from "react";

const API_KEY = "07e6ec92d194077e5753fc4f80aa8bd5";
const API_TOKEN = process.env.API_TOKEN_MOVIES;

export const getTrending = async () => {
  const response = await axios.get(FETCH_MOVIE_TRENDING + API_KEY, {
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
      "Content-Type": "application/json",
    },
    params: {
      api_key: API_KEY,
    },
  });

  return response?.data?.results;
};
