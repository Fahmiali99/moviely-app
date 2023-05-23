import React from "react";

import Slider from "react-slick";

interface PopularProps {
  popular: any;
  BaseUrl: string;
}

type Settings = {
  dots: boolean;
  infinite: boolean;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
  autoplay: boolean;
};
function Popular({ popular, BaseUrl }: PopularProps) {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    autoplay: false,
  };
  return (
    <>
      <div className="relative px-4 md:px-10 z-50 py-3">
        <h1
          className="text-white text-3xl pb-4 font-semibold"
          style={{ fontSize: "1.4vw" }}
        >
          Popular di Netfix
        </h1>
        <div className="w-full flex items-center justify-center text-white">
          <div className="max-w-full ">
            <Slider {...settings}>
              {popular.length
                ? popular?.map((item: any, idx: number) => (
                    <div key={idx} className=" px-2">
                      <div className=" bg-slate-500 rounded">
                        <img
                          src={`https://image.tmdb.org/t/p/original${item?.backdrop_path}`}
                          className=" rounded"
                          width={1000}
                          alt=""
                        />
                      </div>
                    </div>
                  ))
                : "Popular is not found"}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}

export default Popular;
