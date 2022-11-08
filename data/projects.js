const projects = [
  {
    id: "project11",
    bgColour: "#E14985",
    textColour: "white",
    image: "/projectCards/bluprint.png",
    projectType: "Branding",
    projectPurpose: "Website/Software Design",
    title: "Bluprint",
    logo: "/projectLogos/bluprint.svg",
    link: "https://bluprint.uk",
    pageLink: "/projects/bluprint",
    ig: "bluprint.app",
  },
  {
    id: "project2",
    bgColour: "#ffffff",
    textColour: "white",
    image: "/projectCards/wraptorcustoms.png",
    projectType: "Branding",
    projectPurpose: "Partial company rebranding & content",
    title: "Wraptor Customs",
    logo: "/projectLogos/wraptor.png",
    link: "https://wraptorcustoms.com",
    pageLink: "/projects/wraptor-customs",
    ig: "wraptor_customs_tuning_wraps",
  },
  {
    id: "project12",
    bgColour: "#ffffff",
    textColour: "white",
    image: "/projectCards/quirk.png",
    projectType: "Branding",
    projectPurpose: "New website & logo design",
    title: "Quirk. Studios",
    logo: "/projectLogos/quirk.png",
    link: "https://quirk.studio",
    pageLink: "/projects/quirk-studios",
    ig: "wearequirk.studio",
  },
  {
    id: "project0",
    bgColour: "#E14985",
    textColour: "white",
    image: "/projectCards/gigawaffle.jpg",
    projectType: "Branding",
    projectPurpose: "Complete company rebrand",
    title: "Gigawaffle",
    logo: "/projectLogos/gigawaffle.png",
    link: "https://gigawaffle.co.uk",
    pageLink: "/projects/gigawaffle",
    ig: "gigawaffleuk",
  },
  {
    id: "project13",
    bgColour: "#ffffff",
    textColour: "white",
    image: "/projectCards/fiesta.png",
    projectType: "Branding",
    projectPurpose: "Partial company rebranding & packaging",
    title: "Fiesta",
    logo: "/projectLogos/fiesta.svg",
    link: "/",
    pageLink: "/projects/fiesta",
    ig: "",
  },
  {
    id: "project1",
    bgColour: "#1D1D1D",
    textColour: "black",
    image: "/projectCards/delticbusinesssolutions.jpg",
    projectType: "Branding",
    projectPurpose: "New business branding",
    title: "Deltic Business Solutions",
    logo: "/projectLogos/delticicon.png",
    link: "https://delticbusiness.co.uk",
    pageLink: "/projects/deltic-business-solutions",
    ig: "delticbusiness",
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
    pageLink: "/projects/swap-my-energy",
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
    pageLink: "/projects/the-food-connect",
    ig: "thefoodconnect.uk",
  },
  {
    id: "project14",
    bgColour: "#F8D5D3",
    textColour: "black",
    image: "/projectCards/hawc.png",
    projectType: "Web Design",
    projectPurpose: "New website design",
    title: "High Access Window Cleaning",
    logo: "/projectLogos/hawc.svg",
    link: "https://highaccesswindowcleaning.co.uk",
    pageLink: "/projects/high-access-window-cleaning",
    ig: "",
  },
  {
    id: "project5",
    bgColour: "#F8D5D3",
    textColour: "black",
    image: "/projectCards/gooeyscookies.jpg",
    projectType: "Web Design",
    projectPurpose: "New website design",
    title: "Gooey's Cookies",
    logo: "/projectLogos/gooeyscookies.png",
    link: "https://gooeyscookies.co.uk",
    pageLink: "/projects/gooeys-cookies",
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
    pageLink: "/projects/were-digital",
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
    pageLink: "/projects/my-cabin-bed",
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
    pageLink: "/projects/grand-venue",
    ig: "grandvenue",
  },
  {
    id: "project8",
    bgColour: "#ECB65D",
    textColour: "black",
    image: "/projectCards/justaesthetics.png",
    projectType: "Web Design",
    projectPurpose: "Website redesign",
    title: "JustAesthetics",
    logo: "/projectLogos/justaesthetic.png",
    link: "https://grandvenue.co",
    pageLink: "/projects/justaesthetics",
    ig: "",
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
