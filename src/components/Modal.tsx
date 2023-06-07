import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import moment from "moment";

interface ModalProps {
  modal: boolean;
  data: [backdrop_path: string, poster_path: string];
  BaseUrl: string;
  hoveredIndex: number | null;
  title: string;
  handleClose: () => void;
  handleMouseLeave: () => void;
  handleMouseEnter: (idx: number) => void;
  dropdownRef: any;
}

function Modal({
  modal,
  data,
  BaseUrl,
  hoveredIndex,
  title,
  handleClose,
  handleMouseLeave,
  handleMouseEnter,
  dropdownRef,
}: ModalProps) {
  return (
    <div>
      <div
        id="defaultModal"
        aria-hidden="true"
        className={`fixed   top-0 left-0 right-0 z-50  w-full flex justify-center items-center  md:inset-0 h-[calc(100%-0rem)] max-h-full ${
          modal ? "block" : "hidden"
        }`}
      >
        <div className=" bg-gray-900 w-screen h-screen absolute opacity-70"></div>

        <div ref={dropdownRef} className="container mx-auto h-5/6">
          <div className="relative w-full max-w-full   max-h-full">
            <div className="relative bg-body rounded-lg shadow dark:bg-gray-700">
              <div className="flex justify-end items-start  p-4  rounded-t dark:border-gray-600">
                <button
                  onClick={handleClose}
                  type="button"
                  className="text-white"
                  data-modal-hide="defaultModal"
                >
                  <AiOutlineClose className="text-4xl" />
                </button>
              </div>

              <h1 className=" text-5xl text-white text-center py-5 font-bold">
                {title}
              </h1>

              <div className="p-6 space-y-6">
                <div className="grid grid-cols-5 gap-4">
                  {data?.length ? (
                    data?.map((item: any, idx: number) => {
                      const Image =
                        BaseUrl + item.backdrop_path || item.poster_path;
                      const title = item.title || item.original_name;
                      const dateTime = item.first_air_date || item.release_date;
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
                              <h3 className="text-lg font-semibold">{title}</h3>
                              <p className="mt-2 text-sm">
                                {moment(`${dateTime}`, "YYYYMMDD").format("ll")}
                              </p>
                            </div>
                          )}
                        </div>
                      );
                    })
                  ) : (
                    <div>Null</div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
