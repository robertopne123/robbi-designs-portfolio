import { useEffect } from "react";
import { useState } from "react";
import { FilterItem } from "../projectComponents/filterItem";
import { Project } from "./project";
import { GetAllData, GetByCategory } from "../../data/projects";

export const ProjectViewerLG = () => {
  const [filterByCategory, setFilterByCategory] = useState("All");
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

  const changeCategory = (filterValue) => {
    setFilterByCategory(filterValue.title);
  };

  return (
    <div className="flex flex-col justify-end px-4 py-8">
      <h4 className="font-roboto font-bold text-turquoise text-2xl pb-4">
        Projects
      </h4>
      <div className="flex flex-col">
        <div className="flex flex-row justify-end gap-2 w-full mb-4 px-4">
          <p className="font-roboto text-turquoise text-sm uppercase">Filter</p>
          <img src="/filter.svg" className="h-[20px]"></img>
        </div>
        <div className="flex flex-col">
          <p className="font-roboto text-turquoise text-sm uppercase">
            Filter By Category
          </p>
          <div className="grid grid-cols-2 gap-4 my-4">
            <FilterItem
              title="All"
              name="filterByCategory"
              id="all"
              value="all"
              checked
              changeCategory={changeCategory}
            />
            <FilterItem
              title="Branding"
              name="filterByCategory"
              id="branding"
              value="branding"
              changeCategory={changeCategory}
            />
            <FilterItem
              title="Web Design"
              name="filterByCategory"
              id="webdesign"
              value="webdesign"
              changeCategory={changeCategory}
            />
            <FilterItem
              title="Social Media"
              name="filterByCategory"
              id="socialmedia"
              value="socialmedia"
              changeCategory={changeCategory}
            />
          </div>
        </div>
      </div>
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
      <div className="w-full flex flex-col gap-4">
        {GetByCategory(filterByCategory).map((project, index) => (
          <Project
            index={index}
            id={project.id}
            bgColour={project.bgColour}
            textColour={project.textColour}
            image={project.image}
            projectType={project.projectType}
            projectPurpose={project.projectPurpose}
            title={project.title}
            logo={project.logo}
            link={project.link}
            ig={project.ig}
          />
        ))}
      </div>
    </div>
  );
};
