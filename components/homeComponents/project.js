import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import Link from "next/link";
import Notiflix from "notiflix";
import { Notify } from "notiflix";
import { Report } from "notiflix/build/notiflix-report-aio";
import { Confirm } from "notiflix/build/notiflix-confirm-aio";
import { Loading } from "notiflix/build/notiflix-loading-aio";
import { Block } from "notiflix/build/notiflix-block-aio";

export const Project = (props) => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  const projectRef = useRef();

  let links = [];

  let copiedShowing = false;

  const copyToClipboard = (data) => {
    navigator.clipboard.writeText(data);
    let linkDisplay = document.getElementsByClassName("linkDisplay");

    copiedShowing = true;

    for (let i = 0; i < linkDisplay.length; i++) {
      links[i] = linkDisplay[i].innerHTML;
      linkDisplay[i].innerHTML = "Copied!";
    }
  };

  function hideCopied() {
    if (copiedShowing) {
      let linkDisplay = document.getElementsByClassName("linkDisplay");

      for (let i = 0; i < links.length; i++) {
        linkDisplay[i].innerHTML = links[i];
      }

      copiedShowing = false;
    } else {
      return;
    }
  }

  useEffect(() => {
    setInterval(() => {
      hideCopied();
    }, 8000);
  }, []);

  return (
    <div
      ref={projectRef}
      className={`project snap-center bg-[${props.bgColour}] h-full min-w-full relative rounded-xl p-4 border-2 overflow-clip border-gray-300`}
    >
      <img
        src={props.image}
        className="absolute left-0 top-0 w-full h-full object-cover"
      ></img>
      <p
        className={`text-${props.textColour} font-roboto font-bold text-lg leading-[18px] pb-1`}
      >
        {props.projectType}
      </p>
      <p className={`text-${props.textColour} font-roboto text-sm`}>
        {props.projectPurpose}
      </p>
      <div className="bg-turquoise absolute right-0 top-0 justify-center flex flex-row gap-1 px-4 py-2 rounded-bl-xl rounded-tr-lg">
        {props.builtWith.map((tool) => (
          <img
            key={tool}
            src={tool}
            className="w-[20px] h-[20px] object-contain pl-1"
          ></img>
        ))}
      </div>

      <div
        className={`absolute flex-row left-0 bottom-0 gap-1 px-4 py-4 group ${
          props.link != "/" ? "flex" : "hidden"
        }`}
      >
        <div
          className="bg-gray-800 w-[30px] h-[30px] rounded-full mx-auto z-20 cursor-pointer"
          onClick={() => copyToClipboard(props.link)}
        >
          <div className="h-full w-full flex flex-col justify-center">
            <img
              src="/copy-solid.svg"
              className="w-[15px] h-[15px] mx-auto invert"
            ></img>
          </div>
        </div>
        <div className="hidden flex-col justify-center group-hover:flex">
          <div className="bg-gray-700 h-[25px] pl-[34px] pr-4 -translate-x-[28px] rounded-r-full rounded-l-full">
            <Link href={props.link} passHref>
              <a>
                <p className="linkDisplay text-white font-roboto uppercase text-xs leading-[25px]">
                  {props.link}
                </p>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
