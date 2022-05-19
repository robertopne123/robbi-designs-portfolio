import { useState } from "react";

export const Job = (props) => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div
      className="pt-4 flex flex-col cursor-pointer"
      onClick={() => setActive(!active)}
    >
      <div className="flex flex-row gap-2">
        <img
          src={props.companyLogo}
          width="40px"
          height="40px"
          className="w-[40px] h-[40px] rounded-full"
        ></img>
        <div className="flex flex-col w-full gap-2">
          <div className="flex flex-row gap-2 justify-between w-full">
            <p className="font-roboto font-bold text-white text-xs uppercase">
              {props.prefix} {props.role}
            </p>
            <svg
              width="10"
              height="6"
              viewBox="0 0 10 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`mt-[5px] ${active ? "rotate-180" : "rotate-0"}`}
            >
              <path
                d="M9 1L5 5L1 1"
                stroke="#ffffff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="flex flex-row w-full gap-2">
            <p className="bg-white px-1 text-turquoise text-2xs uppercase font-poppins font-light inline">
              {props.companyName}
            </p>
            <p className="text-white text-2xs font-roboto uppercase inline">
              {props.startDate} - {props.endDate}
            </p>
          </div>
        </div>
      </div>
      <div className={`pt-3 ${active ? "block" : "hidden"}`}>
        <p className="text-white text-xs font-roboto pl-[48px]">
          {props.jobDescription}
        </p>
      </div>
    </div>
  );
};
