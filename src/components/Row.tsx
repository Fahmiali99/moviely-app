import React, { useRef } from "react";
import Slider from "react-slick";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

interface PopularProps {
  data: [backdrop_path: string, poster_path: string];
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
  // nextArrow: any;
  // prevArrow: any;
};

function Row(props: PopularProps) {
  const { data, BaseUrl, title } = props;
  const slider = useRef<Slider>(null);
  const settings: Settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    autoplay: false,
  };
  return (
    <div>
      <div className="relative px-4 md:px-14  z-20 py-3">
        <h1
          className="text-white text-3xl pb-4 px-2 font-semibold"
          style={{ fontSize: "1.4vw" }}
        >
          {title}
        </h1>
        <div className="w-full flex items-center justify-center text-white">
          <div className="max-w-full ">
            <Slider ref={slider} {...settings}>
              {data?.length ? (
                data?.map((item: any, idx: number) => {
                  const Image =
                    BaseUrl + item.backdrop_path || item.poster_path;
                  return (
                    <div key={idx} className="px-1 ">
                      <div className="rounded ">
                        <img
                          src={Image}
                          className="rounded"
                          alt=""
                          width={1000}
                        />
                      </div>
                    </div>
                  );
                })
              ) : (
                <div>Hello</div>
              )}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Row;
