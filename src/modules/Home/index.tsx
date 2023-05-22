import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { getPopular } from "@/lib/popular/fetchApi";
import { setPopular } from "@/store/popular";
import Banner from "./detail/banner";
import Upcoming from "./detail/upcoming";

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
      {popular?.length
        ? popular.slice(7, 8).map((item: any, idx: any) => {
            const Image = BaseUrl + item?.backdrop_path;
            console.log(Image);
            return (
              <div key={idx}>
                <Banner
                  title={item?.original_title}
                  image={Image}
                  overview={item?.overview}
                />
              </div>
            );
          })
        : "Not data files"}
      <Upcoming />
    </div>
  );
}

export default HomePage;
