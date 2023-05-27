import React from "react";
import { sosmed, data } from "@/utils/footer";
function FooterBar() {
  return (
    <footer className="bg-footer ">
      <div className="grid grid-cols-2  md:flex justify-center">
        <div>
          <div className="px-4 py-6 flex  space-x-6 sm:justify-start ">
            {sosmed?.map((item, idx) => (
              <div key={idx}>
                <a href="#" className="text-white ">
                  <item.Icons className=" text-xl" />
                </a>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-40 px-4 md:flex justify-center">
            {data?.map((item, idx) => {
              const desc = item.desc;
              return (
                <div key={idx} className=" grid justify-center">
                  <ul className="text-gray-500 dark:text-gray-400 font-normal">
                    {desc.map((item, idx) => (
                      <li key={idx} className="mb-4">
                        <a href="#" className=" hover:underline">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
          <div className="px-4 py-6  dark:bg-gray-700 md:flex md:items-center md:justify-between">
            <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">
              © 2023 <a href="https://fahmialihusni.com/">UEC. Fahmi</a>. All
              Rights Reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterBar;
