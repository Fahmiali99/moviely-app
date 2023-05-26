import React from "react";
import Slider from "react-slick";

interface PopularProps {
  data: any; // Update the data type to match the expected array structure
  BaseUrl: string;
  title: string;
}

type Settings = {
  dots: boolean;
  infinite: boolean;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
  autoplay: boolean;
};

function Row(props: PopularProps) {
  const { data, BaseUrl, title } = props;
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    autoplay: false,
  };
  return (
    <div>
      <div className="relative px-4 md:px-14  z-50 py-3">
        <h1
          className="text-white text-3xl pb-4 px-2 font-semibold"
          style={{ fontSize: "1.4vw" }}
        >
          {title}
        </h1>
        <div className="w-full flex items-center justify-center text-white">
          <div className="max-w-full ">
            <Slider {...settings}>
              {data?.map((item: any, idx: number) => {
                const Image = BaseUrl + item.backdrop_path || item.poster_path;
                return (
                  <div key={idx} className="px-1">
                    <div className="bg-slate-500 rounded">
                      <img
                        src={Image}
                        className="rounded"
                        alt=""
                        width={1000}
                      />
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Row;
