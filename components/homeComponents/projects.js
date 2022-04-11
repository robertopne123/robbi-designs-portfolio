import { Project } from "./project";
import { ProjectViewer } from "./projectViewer";
import { Job } from "./resumeComponents/job";
import { SkillsList } from "./resumeComponents/skillsList";

export const Projects = () => {
  const webSkills = [
    ["Figma", "/skillIcons/figma.png"],
    ["Adobe XD", "/skillIcons/adobexd.png"],
    ["Html", "/skillIcons/html5.png"],
    ["Css", "/skillIcons/css3.png"],
    ["Javascript", "/skillIcons/js.png"],
    ["Next.js", "/skillIcons/nextjs.png"],
    ["NodeJS", "/skillIcons/nodejs.png"],
    ["TailwindCss", "/skillIcons/tailwindcss.png"],
    ["Wordpress", "/skillIcons/wordpress.png"],
    ["Elementor", "/skillIcons/elementor.png"],
  ];

  const contentSkills = [
    ["Photoshop", "/skillIcons/photoshop.png"],
    ["Figma", "/skillIcons/figma.png"],
    ["Canva", "/skillIcons/canva.png"],
    ["After Effects", "/skillIcons/aftereffects.png"],
    ["Jitter", "/skillIcons/jitter.png"],
    ["Audacity", "/skillIcons/audacity.png"],
  ];

  const socialMediaSkills = [
    ["Business Suite", "/skillIcons/businesssuite.png"],
    ["Socialpilot", "/skillIcons/socialpilot.png"],
    ["Analytics", "/skillIcons/analytics.png"],
    ["Ads Manager", "/skillIcons/adsmanager.png"],
  ];

  return (
    <div className="bg-gray-100 w-full px-4 py-8">
      <h4 className="font-roboto font-bold text-turquoise text-2xl">
        My work...
      </h4>
      <p className="font-roboto text-turquoise text-sm mt-2 mb-4">
        Below you will find plenty of examples of work I&apos;ve done, including
        branding, websites and social media content.
      </p>
      <div className="flex flex-row justify-between">
        <p className="bg-turquoise px-1 text-white text-sm uppercase font-poppins font-light inline">
          projects
        </p>
        <p className="bg-turquoise px-1 text-white text-md leading-[1.25rem] uppercase font-poppins font-light inline">
          see more
        </p>
      </div>
      <div className="h-px w-full px-4 bg-gray-300 mt-2 mb-4"></div>
      <ProjectViewer />

      {/* <div className="flex flex-col gap-4">
        <div className="bg-[#E14985] w-full h-[200px] rounded-xl relative shadow-xl">
          <img
            src="/projectCards/gigawaffle.png"
            className="w-full h-full object-cover"
          ></img>
          <div className="absolute left-3 top-2 w-full h-full">
            <p className="text-white font-roboto font-bold text-md">
              Web Design
            </p>
            <p className="text-white font-roboto text-xs">Agency Website</p>
          </div>
        </div>
        <div className="bg-[#1D1D1D] w-full h-[200px] rounded-xl relative shadow-xl">
          <img
            src="/projectCards/gwtiktok.png"
            className="w-full h-full object-cover"
          ></img>
          <div className="absolute left-3 top-2">
            <p className="text-white font-roboto font-bold text-md">
              Social Content
            </p>
            <p className="text-white font-roboto text-xs">Team Tiktok Video</p>
          </div>
        </div>
        <div className="bg-[#3B8083] w-full h-[200px] rounded-xl relative shadow-xl">
          <img
            src="/projectCards/swapmyenergy.png"
            className="w-full h-full object-cover"
          ></img>
          <div className="absolute left-3 top-2">
            <p className="text-white font-roboto font-bold text-md">
              Web Design
            </p>
            <p className="text-white font-roboto text-xs">
              Energy Broker Website
            </p>
          </div>
        </div>
        <div className="bg-[#ffffff] w-full h-[200px] rounded-xl relative shadow-xl">
          <img
            src="/projectCards/gigawaffle50offpromo.png"
            className="w-full h-full object-cover"
          ></img>
          <div className="absolute left-3 top-2">
            <p className="text-black font-roboto font-bold text-md">
              Social Content
            </p>
            <p className="text-black font-roboto text-xs">50% off promo</p>
          </div>
        </div>
        <div className="bg-[#03989E] w-full h-[200px] rounded-xl relative shadow-xl">
          <img
            src="/projectCards/weredigital.png"
            className="w-full h-full object-cover"
          ></img>
          <div className="absolute left-3 top-2">
            <p className="text-white font-roboto font-bold text-md">
              Web Design
            </p>
            <p className="text-white font-roboto text-xs">Agency Website</p>
          </div>
        </div>
      </div> */}
    </div>
  );
};
