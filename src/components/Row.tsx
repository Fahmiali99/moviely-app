import React, { useRef, useState } from "react";
import Slider from "react-slick";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { BsFillPlayFill } from "react-icons/bs";
import moment from "moment";
import Modal from "./Modal";

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
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [more, setMore] = useState(false);
  const [modal, setModal] = useState(false);

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

  const handleMoreEnter = () => {
    setMore(true);
  };

  const handleMoreLeave = () => {
    setMore(false);
  };

  const handleModal = () => {
    setModal(!modal);
  };

  const handleClose = () => {
    setModal(false);
  };

  return (
    <div>
      <div className="relative px-4 md:px-14   py-3 ">
        <div className="flex items-center">
          <button
            className="text-white text-3xl pb-4 px-2 font-semibold flex items-end"
            style={{ fontSize: "1.4vw" }}
            type="button"
            onMouseEnter={handleMoreEnter}
            onMouseLeave={handleMoreLeave}
          >
            {title}
            {more && (
              <button
                onClick={handleModal}
                className="flex text-base items-center ml-2 animate-pulse text-green-400"
              >
                <h1>Telusuri Semua</h1>
                <AiOutlineRight />
              </button>
            )}
          </button>
        </div>

        <Modal
          modal={modal}
          handleModal={handleModal}
          handleClose={handleClose}
          data={data}
          BaseUrl={BaseUrl}
          handleMouseLeave={handleMouseLeave}
          handleMouseEnter={handleMouseEnter}
          hoveredIndex={hoveredIndex}
          title={title}
        />

        <div className="w-full flex items-center justify-center text-white">
          <div className=" w-full ">
            <div className="px-1 ">
              <Slider ref={slider} {...settings} className="  ">
                {data?.length ? (
                  data?.map((item: any, idx: number) => {
                    const Image =
                      BaseUrl + item.backdrop_path || item.poster_path;
                    return (
                      <div
                        key={idx}
                        className="relative px-1 z-0"
                        onMouseEnter={() => handleMouseEnter(idx)}
                        onMouseLeave={handleMouseLeave}
                      >
                        <img
                          src={Image}
                          alt=""
                          className="w-full rounded z-0"
                        />
                        {hoveredIndex === idx && (
                          <div className="z-0 absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                            <h3 className="text-lg font-semibold">
                              {item?.title}
                            </h3>
                            <p className="mt-2 text-sm">
                              {moment(
                                `${item?.release_date}`,
                                "YYYYMMDD"
                              ).format("ll")}
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })
                ) : (
                  <div>Null</div>
                )}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Row;
