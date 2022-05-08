import { useEffect } from "react";
import { Project } from "./project";

export const ProjectViewer = () => {
  let elementsCol = "";
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();

    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function checkInViewport() {
    const elements = document.getElementsByClassName("project");
    const dots = document.getElementsByClassName("dots");

    for (let i = 0; i < elements.length; i++) {
      if (dots !== undefined) {
        if (isInViewport(elements[i])) {
          dots[i].style.backgroundColor = "#1D3E51";
        } else {
          dots[i].style.backgroundColor = "transparent";
        }
      }
    }
  }

  useEffect(() => {
    setInterval(() => {
      checkInViewport();
    }, 0);
  }, []);

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
    <div className="h-[500px] md:h-[450px] flex flex-col justify-end">
      <div className="h-[450px] md:h-auto w-full flex flex-row md:grid lg:grid-cols-3 md:grid-cols-2 gap-4 overflow-x-scroll md:overflow-x-auto overflow-y-hidden snap-x snap-mandatory">
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
      <div className="flex flex-row mx-auto gap-0.5 w-[83px] mt-2 md:hidden">
        <div className="dots w-[15px] h-[15px] bg-turquoise border-2 border-turquoise rounded-full"></div>
        <div className="dots w-[15px] h-[15px] border-2 border-turquoise rounded-full"></div>
        <div className="dots w-[15px] h-[15px] border-2 border-turquoise rounded-full"></div>
        <div className="dots w-[15px] h-[15px] border-2 border-turquoise rounded-full"></div>
      </div>
    </div>
  );
};
