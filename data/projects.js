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
    pageLink: "/branding/gigawaffle",
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
    pageLink: "/branding/deltic-business-solutions",
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
    pageLink: "/branding/wraptor-customs",
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
    pageLink: "/",
    ig: "swapmyenergyuk",
  },
  {
    id: "project4",
    bgColour: "#E31B20",
    textColour: "black",
    image: "/projectCards/thefoodconnect.png",
    projectType: "Branding",
    projectPurpose: "New company rebranding",
    title: "The Food Connect",
    logo: "/projectLogos/thefoodconnect.png",
    link: "https://join.thefoodconnect.uk",
    pageLink: "/",
    ig: "thefoodconnect.uk",
  },
  {
    id: "project5",
    bgColour: "#F8D5D3",
    textColour: "black",
    image: "/projectCards/gooeyscookies.png",
    projectType: "Web Design",
    projectPurpose: "New website design",
    title: "Gooey's Cookies",
    logo: "/projectLogos/gooeyscookies.png",
    link: "https://gooeyscookies.co.uk",
    pageLink: "/",
    ig: "gooeyscookies",
  },
  {
    id: "project6",
    bgColour: "#03989E",
    textColour: "white",
    image: "/projectCards/weredigital.png",
    projectType: "Web Design",
    projectPurpose: "New website design",
    title: "We're Digital",
    logo: "/projectLogos/weredigital.png",
    link: "https://weredigital.co",
    pageLink: "/",
    ig: "weredigital.co",
  },
  {
    id: "project7",
    bgColour: "#4D7721",
    textColour: "white",
    image: "/projectCards/mycabinbed.png",
    projectType: "Web Design",
    projectPurpose: "Website redesign",
    title: "My Cabin Bed",
    logo: "/projectLogos/mycabinbed.png",
    link: "https://mycabinbed.com",
    pageLink: "/",
    ig: "mycabinbed",
  },
  {
    id: "project8",
    bgColour: "#ECB65D",
    textColour: "black",
    image: "/projectCards/grandvenue.png",
    projectType: "Web Design",
    projectPurpose: "Website redesign",
    title: "Grand Venue",
    logo: "/projectLogos/grandvenue.png",
    link: "https://grandvenue.co",
    pageLink: "/",
    ig: "grandvenue",
  },
  {
    id: "project9",
    bgColour: "#E14985",
    textColour: "black",
    image: "/projectCards/gigawafflesocial.png",
    projectType: "Social Media",
    projectPurpose: "Social media content",
    title: "Gigawaffle",
    logo: "/projectLogos/gigawaffle.png",
    link: "https://gigawaffle.co.uk",
    pageLink: "/",
    ig: "gigawaffleuk",
  },
  {
    id: "project10",
    bgColour: "#1D1D1D",
    textColour: "white",
    image: "/projectCards/dbssocial.png",
    projectType: "Social Media",
    projectPurpose: "Social media content",
    title: "Deltic Business Solutions",
    logo: "/projectLogos/delticicon.png",
    link: "https://delticbusiness.co.uk",
    pageLink: "/",
    ig: "delticbusiness",
  },
];

export const GetAllData = () => {
  return projects;
};

export const GetByCategory = (category, query) => {
  console.log(category, query);
  if (category !== "All") {
    let newData = [];

    let count = 0;

    for (let i = 0; i < projects.length; i++) {
      if (projects[i].projectType == category) {
        newData[count] = projects[i];
        count++;
      }
    }

    if (query == "") {
      return newData;
    } else {
      const foundItems = newData.filter((item) =>
        item.title
          .toString()
          .toLowerCase()
          .includes(query.toString().toLowerCase())
      );

      return foundItems;
    }
  } else {
    if (query == "") {
      return projects;
    } else {
      const foundItems = projects.filter((item) =>
        item.title
          .toString()
          .toLowerCase()
          .includes(query.toString().toLowerCase())
      );

      return foundItems;
    }
  }
};
