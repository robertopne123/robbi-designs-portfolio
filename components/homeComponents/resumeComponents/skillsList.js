import { useState } from "react";

export const SkillsList = (props) => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div className="pt-4" onClick={() => setActive(!active)}>
      <div className="flex flex-row gap-2 justify-between w-full">
        <p className="font-roboto font-bold text-white text-xs uppercase">
          {props.skillsCategory}
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
      <div
        className={`pt-3 grid grid-cols-2 gap-2 ${active ? "block" : "hidden"}`}
      >
        {props.skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-row bg-white px-2 py-2 gap-4 rounded-lg shadow-2xl"
          >
            <img src={skill[1]} className="w-[20px] h-[20px] object-contain" />
            <p className="text-black text-[11px] font-roboto uppercase">
              {skill[0]}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
