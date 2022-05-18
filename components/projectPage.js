import ReactPlayer from "react-player";
import { useEffect } from "react/cjs/react.development";

export const ProjectPage = ({ title, images, projectType }) => {
  return (
    <div>
      <div className="bg-offWhite w-full h-[73vh] relative pt-4 lg:pt-0">
        <div className="max-w-[1250px] mx-auto">
          <img
            src="/projectsBanner.png"
            className="absolute opacity-20 mb-[-200px] lg:flex hidden"
          />
          <h3 className="font-roboto text-turquoise uppercase text-3xl md:text-7xl font-bold px-4 mx-auto max-w-[1250px] lg:translate-y-[200px] lg:ml-4">
            {title}
          </h3>
          <p className="font-roboto text-turquoise text-sm md:text-md xs:text-xs mt-2 px-4 mx-auto max-w-[1250px] lg:translate-y-[200px] lg:ml-4">
            {projectType}
          </p>
        </div>

        <div className="flex flex-row gap-16 max-w-[350px] mx-auto translate-x-full h-[70%] overflow-x-scroll snap-x snap-mandatory">
          {images.map((image, index) => (
            <img
              src={image}
              className="lg:h-[100%] w-full h-full mx-auto object-contain object-center snap-center"
            />
          ))}
        </div>
      </div>
      <div className="bg-turquoise w-full px-4 py-8">
        <div className="max-w-[1250px] mx-auto">
          <h4 className="font-roboto font-bold text-white text-2xl">
            About The Project
          </h4>
          <p className="font-roboto text-white text-sm mt-2 mb-4">
            During my time at Gigawaffle, we decided to work on some new
            branding, as our previous efforts weren't up to standard. We lacked
            consistency and accuracy in our visual identity and brand message,
            which was an issue across all of our digital and physical material.
            This was down to the team not being on the same page in regards to
            art style, company theme and the direction of Gigawaffle. Therefore
            a rebrand, where the team was on the same page, and where issues of
            consistency and accuracy were solved, was neccessary.
            <br />
            <br />
            Our company ethos was to offer branding, marketing and web design
            services, without any technical waffle, hence we decided to bring
            this into the branding. We wanted to provide value through our
            collective knowledge and experience, whilst also maintaining a
            creative edge to our brand. To provide consistency, we created a
            visual theme which would run through all of our digital and physical
            assets, and to increase accuracy, we agreed on how current and
            future assets would be developed, i.e. art style, design software,
            font usage, etc. We dediced on a bold and readible, yet eye-catching
            design, that allowed us to be informative (through social media
            content) and which showed off our services & projects (on the
            website).
          </p>
          <p className="bg-white px-1 text-turquoise text-sm uppercase font-poppins font-light inline">
            The Project
          </p>
          <div className="h-px w-full bg-gray-300 mt-2"></div>
          <h3 className="font-roboto text-white text-xl underline decoration-orange pt-4">
            Colours & Typography
          </h3>
          <div className="flex flex-row gap-10 max-w-[1250px] mx-auto mt-2">
            <div className="min-w-[45%] w-[45%] ">
              <img
                src="/branding/gigawaffle/colours.png"
                className="w-[100%] object-contain"
              />
            </div>
            <p className="font-roboto text-sm text-white">
              As part of our rebrand, we changed our visual identity,
              incorporating new colours, typography, logo and imagery, that was
              used in our content and on our website. I worked with one of my
              team members, Joe, to determine our new colours and fonts. We
              agreed that we should keep the pink due to its recognisability in
              regard to Gigawaffle and due to its vibrant nature, although we
              toned down its vibrancy the slightest amount. Alongside the pink,
              typically in a gradient, we had a violet colour, which really
              mellowed the pink and lessened the vibrancy in our colour scheme.
              Therefore we decided to switch out the violet for an electric
              blue, which contrasted the pink, yet was equally as bold and
              vibrant, which was exactly what we were going for.
              <br />
              <br />
              Because of the high number of services we offered, the previous
              website had an individual page for each, making the website too
              bloated. This time round, I opted for a more streamline approach,
              where each service got a small description.
              <br />
              <br />
              Scroll down the image to the left for a preview.
            </p>
          </div>
          <h3 className="font-roboto text-white text-xl underline decoration-orange mt-4">
            Website
          </h3>
          <div className="flex flex-row gap-10 max-w-[1250px] mx-auto mt-4">
            <p className="font-roboto text-sm text-white">
              A major part of the rebranding was the website and that was my
              responsibility. When it came to the previous iterations of our
              website, we had a lot of people give their own opinion on the
              design of the website and its content, which resulted in a site
              that was too bloated and didn't align with any of our other
              digital assets. Therefore, I decided that the design and content
              decisions would be entirely my decision. To align with our new
              visual identity, used big and bold headings and vibrant sections.
              <br />
              <br />
              Because of the high number of services we offered, the previous
              website had an individual page for each, making the website too
              bloated. This time round, I opted for a more streamline approach,
              where each service got a small description.
              <br />
              <br />
              Scroll down the image to the right for a preview.
            </p>
            <div className="min-w-[45%] w-[45%] aspect-[937/476] overflow-y-scroll">
              <img
                src="/branding/gigawaffle/websitefull.jpg"
                className="w-[100%]"
              />
            </div>
          </div>
          <h3 className="font-roboto text-white text-xl underline decoration-orange mt-4">
            Social Media
          </h3>
          <div className="max-w-[1250px] mx-auto flex flex-row gap-10">
            <div className="flex flex-col gap-2">
              <p className="font-roboto text-sm text-white mt-4">
                When it came to social media, we wanted to create content which
                was vibrant, eye-catching, whilst still being informative. This
                was achieved by discussing topics across multiple slides, whilst
                picking an main image to represent the topic. Typically, we
                would recolour objects outside of the realm of normality to
                really catch peoples eye. In our brand guidelines, we set out
                the margins, dimensions and software that would be used to
                ensure consistency of output from everyone on the team. We opted
                for a 4:5 aspect ratio, which allowed us to include our logo,
                the slide number, our social media username and our website
                link, without distracting from the content.
              </p>
            </div>
            <div className="flex flex-col">
              <h3 className="font-roboto text-white text-xl underline decoration-orange">
                Examples of my posts
              </h3>
              <div className="flex flex-row gap-4 mt-4">
                <div className="w-[240px] min-h-[300px] flex flex-row overflow-x-scroll snap-x snap-mandatory overflow-y-hidden">
                  <img
                    src="/branding/gigawaffle/content2/01.jpg"
                    className="h-[300px] ml-auto snap-center"
                  />
                  <img
                    src="/branding/gigawaffle/content2/02.jpg"
                    className="h-[300px] ml-auto snap-center"
                  />
                  <img
                    src="/branding/gigawaffle/content2/03.jpg"
                    className="h-[300px] ml-auto snap-center"
                  />
                  <img
                    src="/branding/gigawaffle/content2/04.jpg"
                    className="h-[300px] ml-auto snap-center"
                  />
                  <img
                    src="/branding/gigawaffle/content2/05.jpg"
                    className="h-[300px] ml-auto snap-center"
                  />
                  <img
                    src="/branding/gigawaffle/content2/06.jpg"
                    className="h-[300px] ml-auto snap-center"
                  />
                  <img
                    src="/branding/gigawaffle/content2/07.jpg"
                    className="h-[300px] ml-auto snap-center"
                  />
                  <img
                    src="/branding/gigawaffle/content2/08.jpg"
                    className="h-[300px] ml-auto snap-center"
                  />
                  <img
                    src="/branding/gigawaffle/content2/09.jpg"
                    className="h-[300px] ml-auto snap-center"
                  />
                </div>
                <div className="w-[240px] min-h-[300px] flex flex-row overflow-x-scroll snap-x snap-mandatory overflow-y-hidden">
                  <img
                    src="/branding/gigawaffle/content3/01.gif"
                    className="h-[300px] w-[240px] ml-auto snap-center"
                  />
                  <img
                    src="/branding/gigawaffle/content3/02.jpg"
                    className="h-[300px] ml-auto snap-center"
                  />
                  <img
                    src="/branding/gigawaffle/content3/03.jpg"
                    className="h-[300px] ml-auto snap-center"
                  />
                  <img
                    src="/branding/gigawaffle/content3/04.jpg"
                    className="h-[300px] ml-auto snap-center"
                  />
                  <img
                    src="/branding/gigawaffle/content3/05.jpg"
                    className="h-[300px] ml-auto snap-center"
                  />
                  <img
                    src="/branding/gigawaffle/content3/06.jpg"
                    className="h-[300px] ml-auto snap-center"
                  />
                  <img
                    src="/branding/gigawaffle/content3/07.jpg"
                    className="h-[300px] ml-auto snap-center"
                  />
                  <img
                    src="/branding/gigawaffle/content3/08.jpg"
                    className="h-[300px] ml-auto snap-center"
                  />
                  <img
                    src="/branding/gigawaffle/content3/09.jpg"
                    className="h-[300px] ml-auto snap-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    // <div className="w-full bg-turquoise">
    //   <div className="w-full flex flex-row">
    //     <div className="flex flex-col justify-center h-[calc(100vh-60px)] w-full z-10">
    //       <div className="flex flex-row justify-between mx-[335px]">
    //         <div className="flex flex-col">
    //           <p className="font-roboto text-xl text-orange text-left uppercase mb-1 z-20">
    //             {props.projectType}
    //           </p>
    //           <div className="h-2 w-32 bg-orange z-20"></div>
    //         </div>
    //       </div>
    //       <h1 className="font-roboto text-[200px] text-white font-[900] flex-nowrap uppercase text-center leading-[150px] z-10">
    //         {props.title}
    //       </h1>
    //       <div className="flex flex-row gap-10 max-w-[300px] absolute left-1/2 -translate-x-1/2 z-0 overflow-x-scroll snap-x snap-mandatory scrollbar-hide">
    //         <img
    //           src="/branding/gigawaffle/applecore.png"
    //           className="h-[60%] w-[300px] object-contain snap-center"
    //         />
    //         <img
    //           src="/branding/gigawaffle/rocket.png"
    //           className="h-[60%] w-[300px] object-contain mt-auto snap-center"
    //         />
    //         <img
    //           src="/branding/gigawaffle/retrotv.png"
    //           className="h-[60%] w-[300px] object-contain mt-auto snap-center"
    //         />
    //       </div>
    //     </div>
    //   </div>
    //   <div className="max-w-[1250px] h-[400px] mx-auto flex flex-row gap-10">
    //     <div className="flex flex-col justify-top w-3/4 h-[400px]">
    //       <p className="font-roboto text-md text-white">
    //         During my time at Gigawaffle, we decided to work on some new
    //         branding, as our previous efforts weren't up to standard. We lacked
    //         consistency and accuracy in our visual identity and brand message,
    //         which was an issue across all of our digital and physical material.
    //         This was down to the team not being on the same page in regards to
    //         art style, company theme and the direction of Gigawaffle. Therefore
    //         a rebrand, where the team was on the same page, and where issues of
    //         consistency and accuracy were solved, was neccessary.
    //         <br />
    //         <br />
    //         Our company ethos was to offer branding, marketing and web design
    //         services, without any technical waffle, hence we decided to bring
    //         this into the branding. We wanted to provide value through our
    //         collective knowledge and experience, whilst also maintaining a
    //         creative edge to our brand. To provide consistency, we created a
    //         visual theme which would run through all of our digital and physical
    //         assets, and to increase accuracy, we agreed on how current and
    //         future assets would be developed, i.e. art style, design software,
    //         font usage, etc. We dediced on a bold and readible, yet eye-catching
    //         design, that allowed us to be informative (through social media
    //         content) and which showed off our services & projects (on the
    //         website).
    //       </p>
    //     </div>
    //     <div className="w-[320px] flex flex-row overflow-x-scroll snap-x snap-mandatory scrollbar-hide">
    //       <img
    //         src="/branding/gigawaffle/content/01.jpg"
    //         className="h-[400px] ml-auto snap-center"
    //       />
    //       <img
    //         src="/branding/gigawaffle/content/02.jpg"
    //         className="h-[400px] ml-auto snap-center"
    //       />
    //       <img
    //         src="/branding/gigawaffle/content/03.jpg"
    //         className="h-[400px] ml-auto snap-center"
    //       />
    //       <img
    //         src="/branding/gigawaffle/content/04.jpg"
    //         className="h-[400px] ml-auto snap-center"
    //       />
    //       <img
    //         src="/branding/gigawaffle/content/05.jpg"
    //         className="h-[400px] ml-auto snap-center"
    //       />
    //       <img
    //         src="/branding/gigawaffle/content/06.jpg"
    //         className="h-[400px] ml-auto snap-center"
    //       />
    //       <img
    //         src="/branding/gigawaffle/content/07.jpg"
    //         className="h-[400px] ml-auto snap-center"
    //       />
    //       <img
    //         src="/branding/gigawaffle/content/08.jpg"
    //         className="h-[400px] ml-auto snap-center"
    //       />
    //       <img
    //         src="/branding/gigawaffle/content/09.jpg"
    //         className="h-[400px] ml-auto snap-center"
    //       />
    //       <img
    //         src="/branding/gigawaffle/content/10.jpg"
    //         className="h-[400px] ml-auto snap-center"
    //       />
    //     </div>
    //   </div>
    //   <div className="max-w-[1250px] mx-auto flex flex-col gap-2 mt-16">
    //     <h3 className="font-roboto text-white text-3xl underline decoration-orange">
    //       Colours & Typography
    //     </h3>
    //     <div className="flex flex-row gap-10 max-w-[1250px] mx-auto">
    //       <div className="min-w-[45%] w-[45%] ">
    //         <img
    //           src="/branding/gigawaffle/colours.png"
    //           className="w-[100%] object-contain"
    //         />
    //       </div>
    //       <p className="font-roboto text-md text-white">
    //         As part of our rebrand, we changed our visual identity,
    //         incorporating new colours, typography, logo and imagery, that was
    //         used in our content and on our website. I worked with one of my team
    //         members, Joe, to determine our new colours and fonts. We agreed that
    //         we should keep the pink due to its recognisability in regard to
    //         Gigawaffle and due to its vibrant nature, although we toned down its
    //         vibrancy the slightest amount. Alongside the pink, typically in a
    //         gradient, we had a violet colour, which really mellowed the pink and
    //         lessened the vibrancy in our colour scheme. Therefore we decided to
    //         switch out the violet for an electric blue, which contrasted the
    //         pink, yet was equally as bold and vibrant, which was exactly what we
    //         were going for.
    //         <br />
    //         <br />
    //         Because of the high number of services we offered, the previous
    //         website had an individual page for each, making the website too
    //         bloated. This time round, I opted for a more streamline approach,
    //         where each service got a small description.
    //         <br />
    //         <br />
    //         Scroll down the image to the left for a preview.
    //       </p>
    //     </div>
    //   </div>
    //   <div className="max-w-[1250px] mx-auto flex flex-col gap-2 mt-16 pb-16">
    //     <h3 className="font-roboto text-white text-3xl underline decoration-orange">
    //       Website
    //     </h3>
    //     <div className="flex flex-row gap-10 max-w-[1250px] mx-auto">
    //       <div className="min-w-[45%] w-[45%] aspect-[937/476] overflow-y-scroll">
    //         <img
    //           src="/branding/gigawaffle/websitefull.jpg"
    //           className="w-[100%]"
    //         />
    //       </div>
    //       <p className="font-roboto text-md text-white">
    //         A major part of the rebranding was the website and that was my
    //         responsibility. When it came to the previous iterations of our
    //         website, we had a lot of people give their own opinion on the design
    //         of the website and its content, which resulted in a site that was
    //         too bloated and didn't align with any of our other digital assets.
    //         Therefore, I decided that the design and content decisions would be
    //         entirely my decision. To align with our new visual identity, used
    //         big and bold headings and vibrant sections.
    //         <br />
    //         <br />
    //         Because of the high number of services we offered, the previous
    //         website had an individual page for each, making the website too
    //         bloated. This time round, I opted for a more streamline approach,
    //         where each service got a small description.
    //         <br />
    //         <br />
    //         Scroll down the image to the left for a preview.
    //       </p>
    //     </div>
    //   </div>
    //   <div className="max-w-[1250px] mx-auto flex flex-col gap-2 mt-16">
    //     <h3 className="font-roboto text-white text-3xl underline decoration-orange">
    //       Social Media
    //     </h3>
    //     <div className="max-w-[1250px] mx-auto flex flex-row gap-10">
    //       <div className="flex flex-col gap-2">
    //         <p className="font-roboto text-md text-white">
    //           When it came to social media, we wanted to create content which
    //           was vibrant, eye-catching, whilst still being informative. This
    //           was achieved by discussing topics across multiple slides, whilst
    //           picking an main image to represent the topic. Typically, we would
    //           recolour objects outside of the realm of normality to really catch
    //           peoples eye. In our brand guidelines, we set out the margins,
    //           dimensions and software that would be used to ensure consistency
    //           of output from everyone on the team. We opted for a 4:5 aspect
    //           ratio, which allowed us to include our logo, the slide number, our
    //           social media username and our website link, without distracting
    //           from the content.
    //         </p>
    //         <h3 className="font-roboto text-white text-xl underline decoration-orange mt-10">
    //           Examples of my posts
    //         </h3>
    //         <div className="flex flex-row gap-4">
    //           <div className="w-[320px] min-h-[400px] flex flex-row overflow-x-scroll snap-x snap-mandatory overflow-y-hidden">
    //             <img
    //               src="/branding/gigawaffle/content2/01.jpg"
    //               className="h-[400px] ml-auto snap-center"
    //             />
    //             <img
    //               src="/branding/gigawaffle/content2/02.jpg"
    //               className="h-[400px] ml-auto snap-center"
    //             />
    //             <img
    //               src="/branding/gigawaffle/content2/03.jpg"
    //               className="h-[400px] ml-auto snap-center"
    //             />
    //             <img
    //               src="/branding/gigawaffle/content2/04.jpg"
    //               className="h-[400px] ml-auto snap-center"
    //             />
    //             <img
    //               src="/branding/gigawaffle/content2/05.jpg"
    //               className="h-[400px] ml-auto snap-center"
    //             />
    //             <img
    //               src="/branding/gigawaffle/content2/06.jpg"
    //               className="h-[400px] ml-auto snap-center"
    //             />
    //             <img
    //               src="/branding/gigawaffle/content2/07.jpg"
    //               className="h-[400px] ml-auto snap-center"
    //             />
    //             <img
    //               src="/branding/gigawaffle/content2/08.jpg"
    //               className="h-[400px] ml-auto snap-center"
    //             />
    //             <img
    //               src="/branding/gigawaffle/content2/09.jpg"
    //               className="h-[400px] ml-auto snap-center"
    //             />
    //           </div>
    //           <div className="w-[320px] min-h-[400px] flex flex-row overflow-x-scroll snap-x snap-mandatory overflow-y-hidden">
    //             <img
    //               src="/branding/gigawaffle/content2/01.jpg"
    //               className="h-[400px] ml-auto snap-center"
    //             />
    //             <img
    //               src="/branding/gigawaffle/content2/02.jpg"
    //               className="h-[400px] ml-auto snap-center"
    //             />
    //             <img
    //               src="/branding/gigawaffle/content2/03.jpg"
    //               className="h-[400px] ml-auto snap-center"
    //             />
    //             <img
    //               src="/branding/gigawaffle/content2/04.jpg"
    //               className="h-[400px] ml-auto snap-center"
    //             />
    //             <img
    //               src="/branding/gigawaffle/content2/05.jpg"
    //               className="h-[400px] ml-auto snap-center"
    //             />
    //             <img
    //               src="/branding/gigawaffle/content2/06.jpg"
    //               className="h-[400px] ml-auto snap-center"
    //             />
    //             <img
    //               src="/branding/gigawaffle/content2/07.jpg"
    //               className="h-[400px] ml-auto snap-center"
    //             />
    //             <img
    //               src="/branding/gigawaffle/content2/08.jpg"
    //               className="h-[400px] ml-auto snap-center"
    //             />
    //             <img
    //               src="/branding/gigawaffle/content2/09.jpg"
    //               className="h-[400px] ml-auto snap-center"
    //             />
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};
