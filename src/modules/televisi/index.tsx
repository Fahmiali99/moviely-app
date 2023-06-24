import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import Banner from "./detail/banner";
import { getKejahatanTv } from "@/lib/kejahatan/fetchApi";
import Row from "@/components/Row";
import { getNowPlaying } from "@/lib/playing/fetchApi";
import { setPlaying } from "@/store/movie/playing";
import { getPopular } from "@/lib/popular/fetchApi";
import { setPopular } from "@/store/movie/popular";
import { setKejatan } from "@/store/televisi/kejahatan";
import { getAnimasiTv } from "@/lib/animasi/fetchApi";
import { setAnimasi } from "@/store/televisi/animasi";
import { getKomediTv } from "@/lib/komeditv/fetchApi";
import { getDokumenterTv } from "@/lib/dokumenter/fetchApi";
import { setDokumenter } from "@/store/televisi/dokumenter";
import { getDramaTv } from "@/lib/drama/fetchApi";
import { setDrama } from "@/store/televisi/drama";
import { getKeluarga } from "@/lib/keluarga/fetchApi";
import { setKeluarga } from "@/store/televisi/keluarga";
import { setKomediTv } from "@/store/televisi/komeditv";

function TelevisiPage() {
  const dispatch = useDispatch();
  const BaseUrl = "https://image.tmdb.org/t/p/original";
  const BaseUrlBody = "https://image.tmdb.org/t/p/w500";
  const about = "Acara TV";
  const { popular } = useSelector((state: RootState) => state.popular);
  const { playing } = useSelector((state: RootState) => state.playing);
  const { animasi } = useSelector((state: RootState) => state.animasi);
  const { kejahatan } = useSelector((state: RootState) => state.kejahatan);
  const { komeditv } = useSelector((state: RootState) => state.komeditv);
  const { dokumenter } = useSelector((state: RootState) => state.dokumenter);
  const { drama } = useSelector((state: RootState) => state.drama);
  const { keluarga } = useSelector((state: RootState) => state.keluarga);

  useEffect(() => {
    getPopular().then((data) => {
      dispatch(setPopular(data));
    });

    getNowPlaying().then((data) => {
      dispatch(setPlaying(data));
    });

    getAnimasiTv().then((data) => {
      dispatch(setAnimasi(data));
    });

    getKejahatanTv().then((data) => {
      dispatch(setKejatan(data));
    });

    getKomediTv().then((data) => {
      dispatch(setKomediTv(data));
    });

    getDokumenterTv().then((data) => {
      dispatch(setDokumenter(data));
    });

    getDramaTv().then((data) => {
      dispatch(setDrama(data));
    });

    getKeluarga().then((data) => {
      dispatch(setKeluarga(data));
    });
  }, [dispatch]);
  console.log();

  return (
    <div>
      {kejahatan && kejahatan.length ? (
        <Banner BaseUrl={BaseUrl} data={kejahatan} />
      ) : (
        <div className=" pt-24" />
      )}

      <>
        <Row title="Populer di Netfix" data={popular} BaseUrl={BaseUrlBody} />
        <Row title="Lanjutkan Menonton" data={playing} BaseUrl={BaseUrlBody} />
        <Row title={`${about} Animasi`} data={animasi} BaseUrl={BaseUrlBody} />
        <Row
          title={`${about} Kejahatan`}
          data={kejahatan}
          BaseUrl={BaseUrlBody}
        />
        <Row title={`${about} Komedi`} data={komeditv} BaseUrl={BaseUrlBody} />
        <Row
          title={`${about} Dokumenter`}
          data={dokumenter}
          BaseUrl={BaseUrlBody}
        />
        <Row title={`${about} Drama`} data={drama} BaseUrl={BaseUrlBody} />
        <Row
          title={`${about} Keluarga`}
          data={keluarga}
          BaseUrl={BaseUrlBody}
        />
      </>
    </div>
  );
}

export default TelevisiPage;
