import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store";
import { setPopular } from "@/store/movie/popular";
import { getPopular } from "@/lib/popular/fetchApi";
import { getTrending } from "@/lib/trending/fetchApi";
import { getHoror } from "@/lib/horor/fetchApi";
import { setHoror } from "@/store/movie/horor";
import { setTrending } from "@/store/movie/trending";
import Banner from "./detail/banner";
import Row from "@/components/Row";
import { getNowPlaying } from "@/lib/playing/fetchApi";
import { setPlaying } from "@/store/movie/playing";
// import { getKomediTv } from "@/lib/komedi/fetchApi";
// import { setKomedi } from "@/store/televisi/komedi";
import RowNum from "@/components/RowNum";
import { getUpcoming } from "@/lib/upcoming/fetchApi";
import { setUpcoming } from "@/store/movie/upcoming";
import { getKomedi } from "@/lib/komedi/fetchApi";
import { setKomedi } from "@/store/movie/komedi";

function HomePage() {
  const dispatch = useDispatch();
  const BaseUrl = "https://image.tmdb.org/t/p/original";
  const BaseUrlBody = "https://image.tmdb.org/t/p/w500";
  const { popular } = useSelector((state: RootState) => state.popular);
  const { upcoming } = useSelector((state: RootState) => state.upcoming);
  const { playing } = useSelector((state: RootState) => state.playing);
  const { trending } = useSelector((state: RootState) => state.trending);
  const { komedi } = useSelector((state: RootState) => state.komedi);
  const { horor } = useSelector((state: RootState) => state.horor);

  useEffect(() => {
    getPopular().then((data) => {
      dispatch(setPopular(data));
    });

    getUpcoming().then((data) => {
      dispatch(setUpcoming(data));
    });

    getKomedi().then((data) => {
      dispatch(setKomedi(data));
    });

    getTrending().then((data) => {
      dispatch(setTrending(data));
    });

    getNowPlaying().then((data) => {
      dispatch(setPlaying(data));
    });

    getHoror().then((data) => {
      dispatch(setHoror(data));
    });
  }, [dispatch]);

  return (
    <div>
      {/* Banner */}
      {popular?.length ? (
        <Banner BaseUrl={BaseUrl} data={popular} />
      ) : (
        <div className=" pt-24" />
      )}

      {/* Carousel */}
      <>
        <Row title="Populer di Netfix" data={popular} BaseUrl={BaseUrlBody} />
        <Row
          title="Upcoming di Netflix"
          data={upcoming}
          BaseUrl={BaseUrlBody}
        />
        <Row title="Acara TV Komedi" data={komedi} BaseUrl={BaseUrlBody} />
        <RowNum
          title="10 Trending Teratas"
          data={trending}
          BaseUrl={BaseUrlBody}
        />
        <Row title="Lanjutkan Menonton" data={playing} BaseUrl={BaseUrlBody} />
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
