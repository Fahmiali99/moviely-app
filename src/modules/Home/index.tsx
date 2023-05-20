import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { getPopular } from "@/lib/popular/fetchApi";
import { setPopular } from "@/store/popular";
import Banner from "./detail/banner";
import Upcoming from "./detail/upcoming";

function HomePage() {
  const dispatch = useDispatch();
  const { popular } = useSelector((state: RootState) => state.popular);
  useEffect(() => {
    getPopular().then((data) => {
      dispatch(setPopular(data));
    });
  }, [dispatch]);

  console.log(popular);
  return (
    <div>
      <Banner />
      <Upcoming />
    </div>
  );
}

export default HomePage;
