import React from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { AiOutlineInfoCircle } from "react-icons/ai";
import netflix from "@../../../public/assets/netflixsym.png";
import Image from "next/image";

function Banner() {
  return (
    <div className="h-screen bg-[url('https://image.tmdb.org/t/p/original/r1T00IkCwDc90nhCO2VFBV36PkI.jpg')] flex items-center bg-cover">
      <div className="px-4 md:px-16 max-w-full">
        <div className="text-white">
          <span className=" uppercase text-3xl font-bold inline-flex items-center">
            <Image src={netflix} alt="" width={50} />
            <h1 className=" tracking-widest">Serial </h1>
          </span>

          <h1 className=" text-8xl font-extrabold pb-5 uppercase">
            The Black Demon
          </h1>
          <p className="grid grid-cols-2 text-xl font-medium">
            Oilman Paul Sturges idyllic family vacation turns into a nightmare
            when they encounter a ferocious megalodon shark that will stop at
            nothing to protect its territory. Stranded and under constant
            attack, Paul and his family must somehow find a way to get his
            family back to shore alive before it strikes again in this epic
            battle between humans and nature.
          </p>
          <div className="flex pt-7">
            <button
              type="button"
              className=" font-medium rounded-lg text-lg px-5 py-2.5 text-center items-center inline-flex bg-white text-black mr-2 mb-2"
            >
              <span>
                <BsFillPlayFill className=" text-4xl inline-flex " /> Putar
              </span>
            </button>
            <button
              type="button"
              className=" font-medium rounded-lg text-lg px-5 py-2.5 text-center items-center inline-flex bg-[#585055] text-white mr-2 mb-2 bg-opacity-80 "
            >
              <span>
                <AiOutlineInfoCircle className=" text-4xl inline-flex mr-3" />
                Selengkapnya
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
