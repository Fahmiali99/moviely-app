import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import Banner from "./detail/banner";
import { getDiscoverTv } from "@/lib/discover/fetchApi";
import { setDiscover } from "@/store/televisi/discover";
import Row from "@/components/Row";
import { getNowPlaying } from "@/lib/playing/fetchApi";
import { setPlaying } from "@/store/movie/playing";
import { getPopular } from "@/lib/popular/fetchApi";
import { setPopular } from "@/store/movie/popular";

function TelevisiPage() {
  const dispatch = useDispatch();
  const BaseUrl = "https://image.tmdb.org/t/p/original";
  const BaseUrlBody = "https://image.tmdb.org/t/p/w500";
  const { popular } = useSelector((state: RootState) => state.popular);
  const { discover } = useSelector((state: RootState) => state.discover);
  const { playing } = useSelector((state: RootState) => state.playing);
  useEffect(() => {
    getPopular().then((data) => {
      dispatch(setPopular(data));
    });

    getDiscoverTv().then((data) => {
      dispatch(setDiscover(data));
    });

    getNowPlaying().then((data) => {
      dispatch(setPlaying(data));
    });
  }, [dispatch]);
  console.log();

  return (
    <div>
      {/* Banner */}
      {discover && discover.length ? (
        <Banner BaseUrl={BaseUrl} data={discover} />
      ) : (
        <div>Banner is null</div>
      )}

      <>
        <Row title="Populer di Netfix" data={popular} BaseUrl={BaseUrlBody} />
        <Row title="Lanjutkan Menonton" data={playing} BaseUrl={BaseUrl} />
        <Row
          title="Acara TV Drama Kasar dan Brutal"
          data={discover}
          BaseUrl={BaseUrlBody}
        />
        <Row
          title="Acara TV Thriller Asia Seru"
          data={discover}
          BaseUrl={BaseUrlBody}
        />

        <Row
          title="Acara TV Pasangan Romantis"
          data={discover}
          BaseUrl={BaseUrlBody}
        />
      </>
    </div>
  );
}

export default TelevisiPage;
