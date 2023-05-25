import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { getPopular } from "@/lib/popular/fetchApi";
import { setPopular } from "@/store/popular";
import Banner from "./detail/banner";
import Popular from "./detail/popular";
import { getTrending } from "@/lib/trending/fetchApi";
import { setTrending } from "@/store/trending";
import Trending from "./detail/trending";

function HomePage() {
  const dispatch = useDispatch();
  const BaseUrl = "https://image.tmdb.org/t/p/original";
  const { popular } = useSelector((state: RootState) => state.popular);
  const { trending } = useSelector((state: RootState) => state.trending);

  useEffect(() => {
    getPopular().then((data) => {
      dispatch(setPopular(data));
    });

    getTrending().then((data) => {
      dispatch(setTrending(data));
    });
  }, [dispatch]);

  return (
    <div>
      {/* Banner */}
      {popular && popular.length ? (
        <Banner BaseUrl={BaseUrl} data={popular} />
      ) : (
        <div>No popular data available</div>
      )}

      {/* Carousel: Popular */}
      {popular && popular.length ? (
        <Popular data={popular} BaseUrl={BaseUrl} />
      ) : (
        <div>No popular data available</div>
      )}

      {/* Carousel: Trending */}
      {trending && trending.length ? (
        <Trending data={trending} BaseUrl={BaseUrl} />
      ) : (
        <div>No popular data available</div>
      )}
    </div>
  );
}

export default HomePage;
