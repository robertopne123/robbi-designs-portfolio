import { Job } from "./resumeComponents/job";
import { SkillsList } from "./resumeComponents/skillsList";
import Link from "next/link";

export const IntroResume = () => {
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
    ["Illustrator", "/skillIcons/illustrator.png"],
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
    <div className="bg-turquoise w-full px-4 py-8">
      <div className="max-w-[1250px] mx-auto">
        <h4 className="font-roboto font-bold text-white text-2xl">
          I’d like to introduce myself...
        </h4>
        <p className="font-roboto text-white text-sm mt-2 mb-4">
          I’m Robbi, a passionate person, who loves music, photography and
          anything creative. After originally falling out of love for coding, I
          realised that being creative was the direction that I wanted to go in.
          I now create brand experiences, across social media&apos;s, websites
          and physical products.
        </p>
        <p className="bg-white px-1 text-turquoise text-sm uppercase font-poppins font-light inline">
          experience
        </p>
        <div className="h-px w-full px-4 bg-gray-300 mt-2"></div>
        <div className="mb-4">
          <Job
            companyLogo="/resumeLogos/p1_logo.jpg"
            role="Co-Founder"
            companyName="Priority¹ Studios"
            startDate="July 2022"
            endDate="Present"
          />
          <Job
            companyLogo="/resumeLogos/gigawaffle_logo.jpg"
            role="Marketing and Development Manager"
            companyName="Gigawaffle"
            startDate="Sep 2021"
            endDate="July 2022"
            jobDescription="Running the Gigawaffle Marketing, Branding & Marketing team. Looking after clients directly, all the way from conceptualisation, through to launch of their new digital asset(s). Creating branded assets, such as web designs, social media content, graphics, physical marketing material and video content in line with brand guidelines. Building new client websites from scratch, based on our own bespoke designs. Analysing growth opportunities for ourselves and for our clients. Developing brand guidelines for new clients. Building relationships with clients through regular meetings and catch-up calls. Managing client social media accounts, including content posting, hashtag analysis, reports, advertisements, etc. Establishing a company workflow for projects & developing company roadmaps and development opportunities."
          />
          <Job
            companyLogo="/resumeLogos/gigawaffle_logo.jpg"
            role="Digital Marketing and Branding Assistant"
            companyName="Gigawaffle"
            startDate="Apr 2021"
            endDate="Sep 2021"
            jobDescription="Designing internal company website for launch of Gigawaffle. Establishing Gigawaffle’s first set of brand guidelines. Designing internal websites for parent company. Managing and creating content for internal social media accounts. Establishing team communication and project management patterns. Analysing content and advertisement performance."
          />
          <Job
            companyLogo="/resumeLogos/robbi_designs_logo.png"
            role="Freelance Designer"
            companyName="Robbi Designs"
            startDate="Feb 2020"
            endDate="Apr 2021"
            jobDescription="Working with clients to determine project description, timeframe, budget, etc. Designing music-based graphics for clients based in the UK & US. Developing content for my own social media account. Establishing a visual identity for my work and using this when showing off examples of my work. Developing my own communication skills, especially around the area of design and client work."
          />
          <Job
            companyLogo="/resumeLogos/motivate_logo.png"
            role="Graphics Designer"
            companyName="Motivate Canvas"
            startDate="Sep 2019"
            endDate="Jan 2020"
            jobDescription="Designing various canvas product lines, ready for print. Creating promotional graphics for seasonal offers, e.g. Black Friday, Cyber Monday & Christmas. Liasing with the social media team in design relevant and engaging content. Creating video content using 3D canvas models and Adobe After Effects. Assisting the web development team in creating web ready graphics."
          />
          <Job
            companyLogo="/resumeLogos/ftf_logo.png"
            role="Video Producer"
            companyName="From The Finney"
            startDate="Aug 2019"
            endDate="Jan 2020"
            jobDescription="Creating animated videos from podcast audio ready for YouTube. Animating logo in After Effects as an introduction to the podcast. Editing gaming content ready for YouTube."
          />
        </div>
        <div className="flex flex-row justify-center gap-2">
          <Link href="/resume">
            <a>
              <div className="bg-white w-[150px] mx-auto h-[50px] mt-8 flex flex-col justify-center border-2 border-white hover:bg-transparent group">
                <p className="font-poppins text-turquoise text-sm text-center group-hover:text-white">
                  View Resume
                </p>
              </div>
            </a>
          </Link>
          <a href="/cv.pdf" download>
            <div className="bg-white w-[150px] mx-auto h-[50px] mt-8 flex flex-col justify-center border-2 border-white hover:bg-transparent group">
              <p className="font-poppins text-turquoise text-sm text-center group-hover:text-white">
                Download CV
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
