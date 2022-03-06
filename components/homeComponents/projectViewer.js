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
      if (isInViewport(elements[i])) {
        dots[i].style.backgroundColor = "#1D3E51";
      } else {
        dots[i].style.backgroundColor = "transparent";
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
    <div className="h-[500px] flex flex-col justify-end">
      <div className="h-[450px] w-full flex flex-row gap-4 overflow-x-scroll overflow-y-visible snap-x snap-mandatory">
        <Project
          id="project0"
          bgColour="#E14985"
          textColour="white"
          image="/projectCards/gigawaffle.png"
          projectType="Web Design"
          projectPurpose="Agency Website"
          builtWith={builtWith0}
          link="https://gigawaffle.co.uk"
        />
        <Project
          id="project1"
          bgColour="#1D1D1D"
          textColour="white"
          image="/projectCards/gwtiktok.png"
          projectType="Social Content"
          projectPurpose="Team Tiktok Video"
          builtWith={builtWith1}
          link="/"
        />
        <Project
          id="project2"
          bgColour="#3B8083"
          textColour="white"
          image="/projectCards/swapmyenergy.png"
          projectType="Web Design"
          projectPurpose="Energy Broker Website"
          builtWith={builtWith2}
          link="https://swapmyenergy.co.uk"
        />
        <Project
          id="project3"
          bgColour="#ffffff"
          textColour="black"
          image="/projectCards/gigawaffle50offpromo.png"
          projectType="Social Content"
          projectPurpose="50% off promo"
          builtWith={builtWith3}
          link="/"
        />
        <Project
          id="project4"
          bgColour="#03989E"
          textColour="white"
          image="/projectCards/weredigital.png"
          projectType="Web Design"
          projectPurpose="Agency Website"
          builtWith={builtWith0}
          link="https://weredigital.co"
        />
      </div>
      <div className="flex flex-row mx-auto gap-0.5 w-[83px] mt-2">
        <div className="dots w-[15px] h-[15px] bg-turquoise border-2 border-turquoise rounded-full"></div>
        <div className="dots w-[15px] h-[15px] border-2 border-turquoise rounded-full"></div>
        <div className="dots w-[15px] h-[15px] border-2 border-turquoise rounded-full"></div>
        <div className="dots w-[15px] h-[15px] border-2 border-turquoise rounded-full"></div>
        <div className="dots w-[15px] h-[15px] border-2 border-turquoise rounded-full"></div>
      </div>
    </div>
  );
};