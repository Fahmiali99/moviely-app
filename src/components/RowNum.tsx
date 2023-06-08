import React, { useRef, useState } from "react";
import Slider from "react-slick";

import moment from "moment";
import Loader from "./Loader";

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
};

function RowNum(props: PopularProps) {
  const { data, BaseUrl, title } = props;
  const slider = useRef<Slider>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const settings: Settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    autoplay: false,
  };

  const handleMouseEnter = (idx: number) => {
    setHoveredIndex(idx);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div>
      <div className="relative px-4 md:px-14   py-3 ">
        <div className="w-full flex items-center justify-center text-white">
          <div className=" w-full ">
            <div className="px-1 ">
              {data?.length ? (
                <div>
                  <div className="flex items-center">
                    <button
                      className="text-white text-3xl pb-4 px-2 font-semibold flex items-end"
                      style={{ fontSize: "1.4vw" }}
                      type="button"
                    >
                      {title}
                    </button>
                  </div>
                  <Slider ref={slider} {...settings} className="  ">
                    {data?.slice(0, 10)?.map((item: any, idx: number) => {
                      const Image = BaseUrl + item.poster_path;
                      const title = item.title || item.original_name;
                      const dateTime = item.first_air_date || item.release_date;
                      return (
                        <div
                          key={idx}
                          className="relative px-1 z-0"
                          onMouseEnter={() => handleMouseEnter(idx)}
                          onMouseLeave={handleMouseLeave}
                        >
                          <div className="flex px-2 items-center">
                            <div className="flex justify-between w-[300px]">
                              <div className="relative w-full h-100 bg-transparent flex items-end justify-end cursor-pointer">
                                <span className="text-9xl font-extrabold number">
                                  {idx + 1}
                                </span>
                              </div>
                            </div>
                            <img
                              src={Image}
                              alt=""
                              className="w-full rounded z-0 h-52 w-32"
                            />
                          </div>

                          {hoveredIndex === idx && (
                            <div className="z-0 absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                              <h3 className="text-lg font-semibold">{title}</h3>
                              <p className="mt-2 text-sm">
                                {moment(`${dateTime}`, "YYYYMMDD").format("ll")}
                              </p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </Slider>
                </div>
              ) : (
                <Loader />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RowNum;
