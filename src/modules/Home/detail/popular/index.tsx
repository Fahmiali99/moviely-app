import React from "react";
import Slider from "react-slick";

interface PopularProps {
  data: any;
  BaseUrl: any;
}

type Settings = {
  dots: boolean;
  infinite: boolean;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
  autoplay: boolean;
};
function Popular(props: PopularProps) {
  const { data, BaseUrl } = props;
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    autoplay: false,
  };
  return (
    <div className="relative px-4 md:px-14  z-50 py-3">
      <h1
        className="text-white text-3xl pb-4 px-2 font-semibold"
        style={{ fontSize: "1.4vw" }}
      >
        Populer di Netfix
      </h1>
      <div className="w-full flex items-center justify-center text-white">
        <div className="max-w-full ">
          <Slider {...settings}>
            {data.map((item: any, idx: number) => {
              const Image = BaseUrl + item?.backdrop_path;
              return (
                <div key={idx} className="px-1">
                  <div className="bg-slate-500 rounded">
                    <img src={Image} className="rounded" alt="" width={1000} />
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Popular;
