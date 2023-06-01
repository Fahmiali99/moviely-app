import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import Banner from "./detail/banner";
import { getDiscoverTv } from "@/lib/discover/fetchApi";
import { setDiscover } from "@/store/televisi/discover";
import Row from "@/components/Row";

function TelevisiPage() {
  const dispatch = useDispatch();
  const BaseUrl = "https://image.tmdb.org/t/p/original";
  const BaseUrlBody = "https://image.tmdb.org/t/p/w500";
  const { discover } = useSelector((state: RootState) => state.discover);

  useEffect(() => {
    getDiscoverTv().then((data) => {
      dispatch(setDiscover(data));
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
        <Row title="Populer di Netfix" data={discover} BaseUrl={BaseUrlBody} />
        <Row title="Acara TV Komedi" data={discover} BaseUrl={BaseUrlBody} />
        <Row
          title="Horor Asia Supernatural"
          data={discover}
          BaseUrl={BaseUrlBody}
        />
      </>
    </div>
  );
}

export default TelevisiPage;
