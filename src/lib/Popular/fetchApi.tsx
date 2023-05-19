import { FETCH_MOVIE_POPULAR } from "@/constans/urlApi";
import axios from "axios";

export const getPopular = async () => {
  const response = await axios.get(FETCH_MOVIE_POPULAR, {
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwN2U2ZWM5MmQxOTQwNzdlNTc1M2ZjNGY4MGFhOGJkNSIsInN1YiI6IjY0NjcxN2RhYTUwNDZlMDE0NzRjMmRjMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vrOlzwv6y8fuHE6yUQMZpd0CkYHcw9IoIHjojDxOgns`,
    },
  });
  return response?.data;
};
