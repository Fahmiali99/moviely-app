import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { useRef, useState } from "react";

interface Props {
  title: string;
  data: any;
  BaseUrl: string;
}

function Row({ title, data, BaseUrl }: Props) {
  const rowRef = useRef<HTMLDivElement>(null);
  const [isMoved, setIsMoved] = useState(false);

  const handleClick = (direction: string) => {
    setIsMoved(true);

    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;

      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;

      rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <div className=" space-y-0.5 md:space-y-2">
      <h2 className=" cursor-pointer text-sm font-semibold text-[#e5e5e5] transition duration-200 hover:text-white md:text-2xl">
        {title}
      </h2>
      <div className="group relative md:-ml-2">
        <AiOutlineLeft
          className={`absolute text-white top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 ${
            !isMoved && "hidden"
          }`}
          onClick={() => handleClick("left")}
        />

        <div
          ref={rowRef}
          className="flex items-center space-x-0.5  scrollbar-hide md:space-x-2.5 md:p-2"
        >
          {data.map((item: any, idx: number) => {
            const Image = BaseUrl + item.backdrop_path || item.poster_path;
            return (
              <div key={idx} className="w-full">
                <div className="flex items-center space-x-0.5  scrollbar-hide md:space-x-2.5 md:p-2 md:h-36 md:min-w-[260px] md:hover:scale-105">
                  <div className="relative h-28  cursor-pointer transition duration-200 ease-out ">
                    <img
                      src={Image}
                      className="rounded-sm object-cover md:rounded"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <AiOutlineRight
          className={`absolute text-white top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100`}
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
}

export default Row;
