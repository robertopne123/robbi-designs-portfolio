import { Job } from "./resumeComponents/job";
import { SkillsList } from "./resumeComponents/skillsList";

export const ResumeSection = () => {
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
        <p className="bg-white px-1 text-turquoise text-sm uppercase font-poppins font-light inline">
          experience
        </p>
        <div className="h-px w-full px-4 bg-gray-300 mt-2"></div>
        <div className="mb-4">
          <Job
            companyLogo="/resumeLogos/gigawaffle_logo.jpg"
            role="Marketing and Development Manager"
            companyName="Gigawaffle"
            startDate="Sep 2021"
            endDate="Present"
          />
          <Job
            companyLogo="/resumeLogos/gigawaffle_logo.jpg"
            role="Digital Marketing and Branding Assistant"
            companyName="Gigawaffle"
            startDate="Apr 2021"
            endDate="Sep 2021"
          />
          <Job
            companyLogo="/resumeLogos/robbi_designs_logo.png"
            role="Freelance Designer"
            companyName="Robbi Designs"
            startDate="Feb 2020"
            endDate="Apr 2021"
            jobDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis arcu ut dui scelerisque efficitur. Ut eget nisl vitae nibh congue accumsan. Aenean sodales urna vulputate ullamcorper varius. Praesent et mattis quam, eu hendrerit libero. Phasellus fringilla finibus nisl, ut convallis urna efficitur vitae. Praesent sollicitudin elementum sodales. Fusce vel lacinia est. Sed mattis ex vitae ante fringilla, nec imperdiet nisi pharetra. Proin et diam ac nibh scelerisque eleifend et sit amet felis. Maecenas interdum porttitor pretium. Pellentesque posuere nisl vel venenatis maximus. Fusce quis tincidunt mauris. Etiam risus nisi, porttitor id arcu ac, commodo egestas eros."
          />
          <Job
            companyLogo="/resumeLogos/motivate_logo.png"
            role="Graphics Designer"
            companyName="Motivate Canvas"
            startDate="Sep 2019"
            endDate="Jan 2020"
            jobDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis arcu ut dui scelerisque efficitur. Ut eget nisl vitae nibh congue accumsan. Aenean sodales urna vulputate ullamcorper varius. Praesent et mattis quam, eu hendrerit libero. Phasellus fringilla finibus nisl, ut convallis urna efficitur vitae. Praesent sollicitudin elementum sodales. Fusce vel lacinia est. Sed mattis ex vitae ante fringilla, nec imperdiet nisi pharetra. Proin et diam ac nibh scelerisque eleifend et sit amet felis. Maecenas interdum porttitor pretium. Pellentesque posuere nisl vel venenatis maximus. Fusce quis tincidunt mauris. Etiam risus nisi, porttitor id arcu ac, commodo egestas eros."
          />
          <Job
            companyLogo="/resumeLogos/ftf_logo.png"
            role="Video Producer"
            companyName="From The Finney"
            startDate="Aug 2019"
            endDate="Jan 2020"
            jobDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis arcu ut dui scelerisque efficitur. Ut eget nisl vitae nibh congue accumsan. Aenean sodales urna vulputate ullamcorper varius. Praesent et mattis quam, eu hendrerit libero. Phasellus fringilla finibus nisl, ut convallis urna efficitur vitae. Praesent sollicitudin elementum sodales. Fusce vel lacinia est. Sed mattis ex vitae ante fringilla, nec imperdiet nisi pharetra. Proin et diam ac nibh scelerisque eleifend et sit amet felis. Maecenas interdum porttitor pretium. Pellentesque posuere nisl vel venenatis maximus. Fusce quis tincidunt mauris. Etiam risus nisi, porttitor id arcu ac, commodo egestas eros."
          />
        </div>
        <p className="bg-white px-1 text-turquoise text-sm uppercase font-poppins font-light inline">
          education
        </p>
        <div className="h-px w-full px-4 bg-gray-300 mt-2"></div>
        <div className="mb-4">
          <Job
            companyLogo="/resumeLogos/uclan_logo.png"
            prefix="MSc"
            role="User Experience Design"
            companyName="UCLAN"
            startDate="Sep 2019"
            endDate="Oct 2020"
          />
          <Job
            companyLogo="/resumeLogos/uclan_logo.png"
            prefix="BSc"
            role="Software Engineering"
            companyName="UCLAN"
            startDate="Sep 2016"
            endDate="Jul 2019"
            jobDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis arcu ut dui scelerisque efficitur. Ut eget nisl vitae nibh congue accumsan. Aenean sodales urna vulputate ullamcorper varius. Praesent et mattis quam, eu hendrerit libero. Phasellus fringilla finibus nisl, ut convallis urna efficitur vitae. Praesent sollicitudin elementum sodales. Fusce vel lacinia est. Sed mattis ex vitae ante fringilla, nec imperdiet nisi pharetra. Proin et diam ac nibh scelerisque eleifend et sit amet felis. Maecenas interdum porttitor pretium. Pellentesque posuere nisl vel venenatis maximus. Fusce quis tincidunt mauris. Etiam risus nisi, porttitor id arcu ac, commodo egestas eros."
          />
        </div>
        <p className="bg-white px-1 text-turquoise text-sm uppercase font-poppins font-light inline">
          skills / knowledge
        </p>
        <div className="h-px w-full px-4 bg-gray-300 mt-2"></div>
        <SkillsList skillsCategory="Web Design Skills" skills={webSkills} />
        <SkillsList
          skillsCategory="Content & Branding Skills"
          skills={contentSkills}
        />
        <SkillsList
          skillsCategory="Digital Marketing Skills"
          skills={socialMediaSkills}
        />
      </div>
    </div>
  );
};
