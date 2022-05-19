import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export const Nav = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <>
      <div className="">
        <div className="h-[60px] bg-turquoise w-full py-5 px-4 flex justify-between">
          <Link href="/">
            <a>
              <img
                src="/logo.svg"
                height="22px"
                width="132px"
                className="max-h-[22px]"
              />
            </a>
          </Link>
          <div className="group -translate-y-[4px] cursor-pointer">
            <svg
              width="26"
              height="27"
              viewBox="0 0 27 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => setMenuVisible(!menuVisible)}
            >
              <rect x="8" y="7" width="11" height="2" fill="#F5F5F5" />
              <rect x="6" y="12" width="15" height="2" fill="#F5F5F5" />
              <rect x="8" y="17" width="11" height="2" fill="#F5F5F5" />
              <line
                x1="20"
                y1="0.5"
                x2="27"
                y2="0.5"
                stroke="#F5F5F5"
                className="group-hover:hidden block"
              />
              <line
                x1="26.5"
                y1="1"
                x2="26.5"
                y2="7"
                stroke="#F5F5F5"
                className="group-hover:hidden block"
              />
              <line
                x1="7"
                y1="25.5"
                y2="25.5"
                stroke="#F5F5F5"
                className="group-hover:hidden block"
              />
              <line
                x1="0.5"
                y1="25"
                x2="0.5"
                y2="19"
                stroke="#F5F5F5"
                className="group-hover:hidden block"
              />
            </svg>
          </div>
        </div>
        <div
          className={`h-screen w-full right-0 top-0 z-50 fixed ${
            menuVisible ? "flex" : "hidden"
          }`}
        >
          <div className="bg-black/50 h-full w-1/3 md:w-3/4"></div>
          <div className="h-full w-2/3 md:w-1/4 bg-turquoise ml-auto py-5 px-4 flex flex-col">
            <div className="flex flex-row justify-end h-[60px]">
              <svg
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => setMenuVisible(!menuVisible)}
                className="cursor-pointer"
              >
                <line
                  x1="4.9038"
                  y1="14.0962"
                  x2="9.85355"
                  y2="9.14644"
                  stroke="#F5F5F5"
                />
                <line
                  x1="9.85355"
                  y1="9.85354"
                  x2="14.0962"
                  y2="14.0962"
                  stroke="#F5F5F5"
                />
                <line
                  x1="14.0962"
                  y1="4.90382"
                  x2="9.14645"
                  y2="9.85356"
                  stroke="#F5F5F5"
                />
                <line
                  x1="9.14645"
                  y1="9.14646"
                  x2="4.90381"
                  y2="4.90382"
                  stroke="#F5F5F5"
                />
              </svg>
            </div>
            <div className="flex flex-col gap-4 mt-4 justify-between h-full">
              <div className="flex flex-col gap-4">
                <Link href="/resume">
                  <a>
                    <p className="text-md font-poppins text-white text-center">
                      Resume
                    </p>
                  </a>
                </Link>
                <Link href="/projects">
                  <a>
                    <p className="text-md font-poppins text-white text-center">
                      Projects
                    </p>
                  </a>
                </Link>
              </div>
              <img
                src="/logo.svg"
                height="22px"
                width="132px"
                className="max-h-[22px] mx-auto mb-8"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
