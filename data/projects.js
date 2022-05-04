const projects = [
  {
    id: "project0",
    bgColour: "#E14985",
    textColour: "white",
    image: "/projectCards/gigawaffle.png",
    projectType: "Branding",
    projectPurpose: "Complete company rebrand",
    title: "Gigawaffle",
    logo: "/projectLogos/gigawaffle.png",
    link: "https://gigawaffle.co.uk",
    ig: "gigawaffleuk",
  },
  {
    id: "project1",
    bgColour: "#1D1D1D",
    textColour: "black",
    image: "/projectCards/delticbusinesssolutions.png",
    projectType: "Branding",
    projectPurpose: "New business branding",
    title: "Deltic Business Solutions",
    logo: "/projectLogos/delticicon.png",
    link: "https://delticbusiness.co.uk",
    ig: "delticbusiness",
  },
  {
    id: "project2",
    bgColour: "#ffffff",
    textColour: "white",
    image: "/projectCards/wraptorcustoms.png",
    projectType: "Branding",
    projectPurpose: "Partial company rebranding",
    title: "Wraptor Customs",
    logo: "/projectLogos/wraptor.png",
    link: "/",
    ig: "wraptor_customs_tuning_wraps",
  },
  {
    id: "project3",
    bgColour: "#ffffff",
    textColour: "black",
    image: "/projectCards/swapmyenergy.png",
    projectType: "Branding",
    projectPurpose: "Partial company rebranding",
    title: "Swap My Energy",
    logo: "/projectLogos/switch.svg",
    link: "https://swapmyenergy.co.uk",
    ig: "swapmyenergyuk",
  },
  {
    id: "project4",
    bgColour: "#F8D5D3",
    textColour: "black",
    image: "/projectCards/gooeyscookies.png",
    projectType: "Web Design",
    projectPurpose: "New website design",
    title: "Gooey's Cookies",
    logo: "/projectLogos/gooeyscookies.png",
    link: "https://gooeyscookies.co.uk",
    ig: "gooeyscookies",
  },
  {
    id: "project5",
    bgColour: "#03989E",
    textColour: "white",
    image: "/projectCards/weredigital.png",
    projectType: "Web Design",
    projectPurpose: "New website design",
    title: "We're Digital",
    logo: "/projectLogos/weredigital.png",
    link: "https://weredigital.co",
    ig: "weredigital.co",
  },
  {
    id: "project6",
    bgColour: "#4D7721",
    textColour: "white",
    image: "/projectCards/mycabinbed.png",
    projectType: "Web Design",
    projectPurpose: "Website redesign",
    title: "My Cabin Bed",
    logo: "/projectLogos/mycabinbed.png",
    link: "https://mycabinbed.com",
    ig: "mycabinbed",
  },
];

export const GetAllData = () => {
  return projects;
};

export const GetByCategory = (category) => {
  console.log(category);
  if (category !== "All") {
    let newData = [];

    let count = 0;

    for (let i = 0; i < projects.length; i++) {
      if (projects[i].projectType == category) {
        newData[count] = projects[i];
        count++;
      }
    }

    return newData;
  } else {
    return projects;
  }
};
