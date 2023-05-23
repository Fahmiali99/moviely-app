import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { getPopular } from "@/lib/popular/fetchApi";
import { setPopular } from "@/store/popular";
import Banner from "./detail/banner";
import Popular from "./detail/popular";

function HomePage() {
  const dispatch = useDispatch();
  const BaseUrl = "https://image.tmdb.org/t/p/original";
  const { popular } = useSelector((state: RootState) => state.popular);

  useEffect(() => {
    getPopular().then((data) => {
      dispatch(setPopular(data));
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
    </div>
  );
}

export default HomePage;
