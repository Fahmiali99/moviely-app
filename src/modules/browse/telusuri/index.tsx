import React, { useEffect, useRef, useState } from "react";
import { RootState } from "@/store";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { languages } from "@/utils/languages";
import { getDiscover } from "@/lib/discover/fetchApi";
import { setDiscover, setLanguage } from "@/store/movie/discover";
import Image from "next/image";

function TelusuriBahasaPage() {
  const BaseUrl = "https://image.tmdb.org/t/p/w500";
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { discover, language } = useSelector(
    (state: RootState) => state.discover
  );

  useEffect(() => {
    getDiscover(language).then((data) => {
      dispatch(setDiscover(data));
    });
  }, [dispatch, language]);

  const handleMouseEnter = (idx: number) => {
    setHoveredIndex(idx);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent): void {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(!open);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  const handleLanguageChange = (selectedLanguage: any) => {
    dispatch(setLanguage(selectedLanguage));
  };
  return (
    <div className="px-4 md:px-16 max-w-full">
      <div className="z-10 bg-body text-white fixed inset-x-0 top-0 px-4 md:px-16 pb-2">
        <div className="pt-28 flex justify-between ">
          <h1 className="text-3xl ">Telusuri menurut Bahasa</h1>

          <select
            value={language}
            onChange={(e) => handleLanguageChange(e.target.value)}
            className="text-white bg-gray-900 hover:bg-stone-900 focus:ring-4 focus:outline-none focus:ring-gray-600 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center "
          >
            {languages.map((item: any, idx: number) => (
              <option key={idx} value={item.code} className="absolute">
                {item.country}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className=" flex justify-center items-center  z-0 pt-44">
        {discover?.length ? (
          <div className="grid grid-cols-6 gap-4">
            {discover.map((item: any, idx: number) => {
              const Images = BaseUrl + item.poster_path;
              const title = item.title || item.original_name;
              const dateTime = item.first_air_date || item.release_date;
              return (
                <div
                  key={idx}
                  className="relative  "
                  onMouseEnter={() => handleMouseEnter(idx)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Image
                    src={Images}
                    alt=""
                    className="w-full rounded z-0"
                    width={1000}
                    height={0}
                  />
                  {hoveredIndex === idx && (
                    <div className=" absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                      <h3 className="text-lg font-semibold">{title}</h3>
                      <p className="mt-2 text-sm">
                        {moment(`${dateTime}`, "YYYYMMDD").format("ll")}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          <h1 className="h-[calc(100vh-0rem)] text-gray-500 flex justify-center items-center">
            Film yang anda pilih tidak tersedia
          </h1>
        )}
      </div>
    </div>
  );
}

export default TelusuriBahasaPage;
