import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { getPopular } from "@/lib/popular/fetchApi";
import { setPopular } from "@/store/popular";

import { getTrending } from "@/lib/trending/fetchApi";
import { setTrending } from "@/store/trending";

import { getHoror } from "@/lib/horor/fetchApi";
import { setHoror } from "@/store/horor";
import Banner from "./detail/banner";
import Row from "@/components/Row";

function HomePage() {
  const dispatch = useDispatch();
  const BaseUrl = "https://image.tmdb.org/t/p/original";
  const BaseUrlBody = "https://image.tmdb.org/t/p/w500";
  const { popular } = useSelector((state: RootState) => state.popular);
  const { trending } = useSelector((state: RootState) => state.trending);
  const { horor } = useSelector((state: RootState) => state.horor);

  useEffect(() => {
    getPopular().then((data) => {
      dispatch(setPopular(data));
    });

    getTrending().then((data) => {
      dispatch(setTrending(data));
    });

    getHoror().then((data) => {
      dispatch(setHoror(data));
    });
  }, [dispatch]);

  return (
    <div>
      {/* Banner */}
      {popular && popular?.length ? (
        <Banner BaseUrl={BaseUrl} data={popular} />
      ) : (
        <div>No popular data available</div>
      )}

      {/* Carousel */}
      <>
        <Row title="Populer di Netfix" data={popular} BaseUrl={BaseUrlBody} />
        <Row title="Acara TV Komedi" data={trending} BaseUrl={BaseUrlBody} />
        <Row
          title="Horor Asia Supernatural"
          data={horor}
          BaseUrl={BaseUrlBody}
        />
      </>
    </div>
  );
}

export default HomePage;
