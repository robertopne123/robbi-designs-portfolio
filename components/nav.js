import Image from "next/image";

export const Nav = () => {
  return (
    <>
      <div className="h-[60px] bg-turquoise w-full py-5 px-4 flex justify-between">
        <img
          src="/logo.svg"
          height="22px"
          width="132px"
          className="max-h-[22px]"
        />
        <div className="group -translate-y-[4px]">
          <svg
            width="26"
            height="27"
            viewBox="0 0 27 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
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
    </>
  );
};
