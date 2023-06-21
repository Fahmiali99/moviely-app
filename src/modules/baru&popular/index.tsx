import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { getPopular } from "@/lib/popular/fetchApi";
import { getTrending } from "@/lib/trending/fetchApi";
import { getHoror } from "@/lib/horor/fetchApi";
import { setHoror } from "@/store/movie/horor";
import { setPopular } from "@/store/movie/popular";
import { setTrending } from "@/store/movie/trending";
import { getNowPlaying } from "@/lib/playing/fetchApi";
import { setPlaying } from "@/store/movie/playing";
import { getKomedi } from "@/lib/komedi/fetchApi";
import { setKomedi } from "@/store/televisi/komedi";
import Row from "@/components/Row";
import RowNum from "@/components/RowNum";

function BaruPopularPage() {
  const dispatch = useDispatch();
  const BaseUrl = "https://image.tmdb.org/t/p/original";
  const BaseUrlBody = "https://image.tmdb.org/t/p/w500";
  const { popular } = useSelector((state: RootState) => state.popular);
  const { playing } = useSelector((state: RootState) => state.playing);
  const { trending } = useSelector((state: RootState) => state.trending);
  const { komedi } = useSelector((state: RootState) => state.komedi);
  const { horor } = useSelector((state: RootState) => state.horor);

  useEffect(() => {
    getPopular().then((data) => {
      dispatch(setPopular(data));
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
      {/* Carousel */}
      <div className="pt-32">
        <Row title="Populer di Netfix" data={popular} BaseUrl={BaseUrlBody} />
        <Row title="Acara TV Komedi" data={komedi} BaseUrl={BaseUrlBody} />
        <RowNum
          title="10 Trending Teratas"
          data={trending}
          BaseUrl={BaseUrlBody}
        />
        <Row title="Lanjutkan Menonton" data={playing} BaseUrl={BaseUrl} />
        <Row
          title="Horor Asia Supernatural"
          data={horor}
          BaseUrl={BaseUrlBody}
        />
      </div>
    </div>
  );
}

export default BaruPopularPage;
