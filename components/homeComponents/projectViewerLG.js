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
