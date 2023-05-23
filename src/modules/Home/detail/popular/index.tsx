import React from "react";

import Slider from "react-slick";

interface PopularProps {
  popular: any;
}

type Settings = {
  dots: boolean;
  infinite: boolean;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
  autoplay: boolean;
};
function Popular({ popular }: PopularProps) {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    autoplay: false,
  };
  return (
    <>
      <div className="relative px-4 md:px-10 z-50">
        <h1 className="text-white">Popular di Netfix</h1>
        <div className="w-full flex items-center justify-center text-white">
          <div className="max-w-full ">
            <Slider {...settings}>
              {popular.length
                ? popular?.map((item: any, idx: number) => (
                    <div key={idx} className=" px-2">
                      <div className=" bg-slate-500 ">
                        <h3>1</h3>
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
