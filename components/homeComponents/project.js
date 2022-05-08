import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { Router, useRouter } from "next/router";
import Link from "next/link";
import Notiflix from "notiflix";
import { Notify } from "notiflix";
import { Report } from "notiflix/build/notiflix-report-aio";
import { Confirm } from "notiflix/build/notiflix-confirm-aio";
import { Loading } from "notiflix/build/notiflix-loading-aio";
import { Block } from "notiflix/build/notiflix-block-aio";

export const Project = (props) => {
  const router = useRouter();

  const [active, setActive] = useState(false);

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

  function showMore() {
    let extras = document.getElementsByClassName("showMoreExtras");

    for (let i = 0; i < extras.length; i++) {
      if (extras[i].style.display == "none") {
        extras[i].style.display = "flex";
      } else {
        extras[i].style.display = "none";
      }
    }
  }

  function webLink(url) {
    router.push(url);
  }

  function igLink(username) {
    router.push(`https://instagram.com/${username}`);
  }

  function topLinkClick(data, link) {
    if (link == "/") {
      igLink(data);
    } else {
      webLink(link);
    }
  }

  useEffect(() => {
    setInterval(() => {
      hideCopied();
    }, 8000);
  }, []);

  return (
    <Link href={props.readMoreLink}>
      <a>
        <div
          ref={projectRef}
          key={props.index}
          className={`project snap-center bg-[${props.bgColour}] h-[450px] min-w-full relative rounded-xl p-4 border-2 overflow-clip border-gray-300`}
        >
          <img
            src={props.image}
            className="absolute left-0 top-0 w-full h-full object-cover"
          ></img>
          <div className="bg-white absolute left-0 top-0 justify-center flex flex-row gap-1 px-4 py-2 rounded-br-lg">
            <img
              src={props.logo}
              className="w-[20px] h-[20px] object-contain"
            />
          </div>
          <div className="bg-turquoise absolute right-0 bottom-0 justify-center flex flex-col gap-1 px-4 py-2 rounded-br-lg rounded-tl-lg">
            <p className="font-roboto text-white text-sm font-bold text-right">
              {props.title}
            </p>
            <p className="font-roboto text-white text-xs text-right">
              {props.projectPurpose}
            </p>
          </div>
          {/* <div className="bg-turquoise absolute right-0 top-0 justify-center flex flex-row gap-1 px-4 py-2 rounded-bl-xl rounded-tr-lg">
        {props.builtWith.map((tool) => (
          <img
            key={tool}
            src={tool}
            className="w-[20px] h-[20px] object-contain pl-1"
          ></img>
        ))}
      </div> */}

          <div
            className={`absolute flex flex-col left-0 bottom-0 gap-4 px-4 py-4 
        }`}
          >
            <div className="flex flex-col gap-4">
              <div
                className="bg-gray-800 w-[30px] h-[30px] rounded-full z-20 cursor-pointer showMoreExtras"
                onClick={() => topLinkClick(props.ig, props.link)}
              >
                <div className="h-full w-full flex flex-col justify-center">
                  <img
                    src="/web.png"
                    className={`w-[15px] object-contain mx-auto ${
                      props.link == "/" ? "hidden" : "flex"
                    }`}
                  ></img>
                  <img
                    src="/ig.png"
                    className={`w-[15px] object-contain mx-auto ${
                      props.link == "/" ? "flex" : "hidden"
                    }`}
                  ></img>
                </div>
              </div>
              <div
                className={`bg-gray-800 w-[30px] h-[30px] rounded-full z-20 cursor-pointer showMoreExtras ${
                  props.link == "/" ? "hidden opacity-0" : "flex"
                }`}
                onClick={() => igLink(props.ig)}
              >
                <div className="h-full w-full flex flex-col justify-center">
                  <img
                    src="/ig.png"
                    className="w-[15px] object-contain mx-auto"
                  ></img>
                </div>
              </div>
            </div>
            {/* <div className="hidden flex-col justify-center group-hover:flex">
          <div className="bg-gray-700 h-[25px] pl-[34px] pr-4 -translate-x-[28px] rounded-r-full rounded-l-full">
            <Link href={props.link} passHref>
              <a>
                <p className="linkDisplay text-white font-roboto uppercase text-xs leading-[25px]">
                  {props.link}
                </p>
              </a>
            </Link>
          </div>
        </div> */}
          </div>
        </div>
      </a>
    </Link>
  );
};
