import { useEffect } from "react";
import { Project } from "./project";

export const ProjectViewerLG = () => {
  let elementsCol = "";

  const builtWith0 = [
    "/skillIcons/figma.png",
    "/skillIcons/nextjs.png",
    "/skillIcons/nodejs.png",
    "/skillIcons/tailwindcss.png",
  ];
  const builtWith1 = ["/skillIcons/aftereffects.png", "/skillIcons/canva.png"];
  const builtWith2 = [
    "/skillIcons/figma.png",
    "/skillIcons/nextjs.png",
    "/skillIcons/nodejs.png",
    "/skillIcons/tailwindcss.png",
  ];
  const builtWith3 = ["/skillIcons/figma.png", "/skillIcons/canva.png"];

  return (
    <div className="flex flex-col justify-end px-4 py-8">
      <h4 className="font-roboto font-bold text-turquoise text-2xl pb-4">
        Projects
      </h4>
      {/* <div className="bg-gray-300 flex flex-row h-[40px] w-full mb-4 rounded-full">
        <input
          type="text"
          id="search"
          placeholder="Search Projects..."
          className="h-[40px] bg-gray-300 rounded-l-full outline-turquoise outline-1 w-4/5 leading-[40px] pl-4 font-poppins"
        />
        <div className="bg-turquoise border-2 border-turquoise w-1/5 rounded-r-full flex flex-col justify-center cursor-pointer">
          <svg
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto"
          >
            <circle cx="7.5" cy="7.5" r="7" stroke="white" />
            <line
              x1="12.3536"
              y1="12.6464"
              x2="20.3536"
              y2="20.6464"
              stroke="white"
            />
          </svg>
        </div>
      </div>
      <select className="w-full bg-gray-300 h-[40px] rounded-full px-3 font-poppins appearance-none outline-turquoise focus:rounded-b-none focus:rounded-t-[20px] mb-4">
        <option className="hidden">Filter by Project Type</option>
        <option className="">Branding</option>
        <option className="">Web Design</option>
        <option className="">Social Media</option>
        <option className="">Other</option>
      </select> */}
      <div className="w-full grid grid-rows-6 gap-4">
        <div className="h-[450px] w-full">
          <Project
            id="project0"
            bgColour="#E14985"
            textColour="white"
            image="/projectCards/gigawaffle.png"
            projectType="Branding"
            projectPurpose="Complete company rebrand"
            title="Gigawaffle"
            logo="/projectLogos/gigawaffle.png"
            builtWith={builtWith0}
            link="https://gigawaffle.co.uk"
            ig="gigawaffleuk"
          />
        </div>
        <Project
          id="project1"
          bgColour="#1D1D1D"
          textColour="white"
          image="/projectCards/delticbusinesssolutions.png"
          projectType="Branding"
          projectPurpose="New business branding"
          title="Deltic Business Solutions"
          logo="/projectLogos/delticicon.png"
          builtWith={builtWith1}
          link="https://delticbusiness.co.uk"
          ig="delticbusiness"
        />
        <Project
          id="project2"
          bgColour="#ffffff"
          textColour="black"
          image="/projectCards/wraptorcustoms.png"
          projectType="Branding"
          projectPurpose="Partial company rebranding"
          title="Wraptor Customs"
          logo="/projectLogos/wraptor.png"
          ig="wraptor_customs_tuning_wraps"
          builtWith={builtWith2}
          link="/"
        />
        <Project
          id="project3"
          bgColour="#ffffff"
          textColour="black"
          image="/projectCards/swapmyenergy.png"
          projectType="Social Content"
          projectPurpose="Partial company rebranding"
          logo="/projectLogos/switch.svg"
          title="Swap My Energy"
          builtWith={builtWith3}
          link="https://swapmyenergy.co.uk"
        />
      </div>
    </div>
  );
};
