import { Nav } from "../nav";
import { Contact } from "../homeComponents/contact";
import { Footer } from "../homeComponents/footer";
import Link from "next/link";

export const ProjectPage = ({
  username,
  fb,
  yt,
  tt,
  url,
  images,
  title,
  desc,
  about,
  guidelines,
}) => {
  return (
    <div>
      <Nav />
      <div>
        <div className="bg-offWhite w-full py-10 relative">
          <div className="grid md:grid-cols-3 gap-4 max-w-[1250px] px-4 mx-auto">
            <div className="md:col-span-2 w-full h-full flex flex-col gap-6">
              {images.map((image, index) => (
                <div className="relative" key={index}>
                  <img
                    key={index}
                    src={image.url}
                    alt={image.caption}
                    className="w-full aspect-[16/9] rounded-lg object-cover"
                  ></img>
                </div>
              ))}
            </div>
            <div className="col-span-1 w-full h-full flex flex-col">
              <h3 className="font-roboto font-bold text-turquoise uppercase text-3xl md:text-4xl px-4 max-w-[1250px] lg:ml-4">
                {title}
              </h3>
              <div className="lg:ml-8 ml-4">
                <p className="bg-turquoise px-1 text-white text-sm uppercase font-poppins font-light inline">
                  Project Description
                </p>
              </div>
              <p className="font-roboto text-turquoise text-xs md:text-xs xs:text-xs mt-2 px-4 max-w-[1250px] lg:ml-4">
                {desc}
              </p>
              <div className="lg:ml-8 ml-4 mt-4">
                <p className="bg-turquoise px-1 text-white text-sm uppercase font-poppins font-light inline">
                  About The Project
                </p>
              </div>
              <p className="font-roboto text-turquoise text-xs mt-2 mb-0 lg:ml-4 px-4 whitespace-pre-wrap">
                {about.map((para, index) => para).join("\n\n")}
              </p>
              <div className="lg:ml-8 ml-4 mt-4">
                <p className="bg-turquoise px-1 text-white text-sm uppercase font-poppins font-light inline">
                  Links
                </p>
              </div>
              <div className="flex flex-row gap-4">
                {username != "" && username && (
                  <div
                    className={`bg-gray-800 w-[30px] h-[30px] rounded-full z-20 cursor-pointer showMoreExtras flex lg:ml-8 ml-4  mt-2`}
                    // ${
                    //   props.link == "/" ? "hidden opacity-0" : "flex"
                    // }`}
                    onClick={() => igLink(username)}
                  >
                    <div className="h-full w-full flex flex-col justify-center">
                      <img
                        src="/ig.png"
                        className="w-[15px] object-contain mx-auto"
                      ></img>
                    </div>
                  </div>
                )}
                {fb != "" && fb && (
                  <div
                    className={`bg-gray-800 w-[30px] h-[30px] rounded-full z-20 cursor-pointer showMoreExtras flex mt-2`}
                    // ${
                    //   props.link == "/" ? "hidden opacity-0" : "flex"
                    // }`}
                    onClick={() => webLink(fb)}
                  >
                    <div className="h-full w-full flex flex-col justify-center">
                      <img
                        src="/fb.png"
                        className="h-[15px] object-contain mx-auto"
                      ></img>
                    </div>
                  </div>
                )}
                {yt != "" && yt && (
                  <div
                    className={`bg-gray-800 w-[30px] h-[30px] rounded-full z-20 cursor-pointer showMoreExtras flex mt-2`}
                    // ${
                    //   props.link == "/" ? "hidden opacity-0" : "flex"
                    // }`}
                    onClick={() => webLink(yt)}
                  >
                    <div className="h-full w-full flex flex-col justify-center">
                      <img
                        src="/yt.png"
                        className="w-[15px] object-contain mx-auto"
                      ></img>
                    </div>
                  </div>
                )}
                {tt != "" && tt && (
                  <div
                    className={`bg-gray-800 w-[30px] h-[30px] rounded-full z-20 cursor-pointer showMoreExtras flex mt-2`}
                    // ${
                    //   props.link == "/" ? "hidden opacity-0" : "flex"
                    // }`}
                    onClick={() => webLink(tt)}
                  >
                    <div className="h-full w-full flex flex-col justify-center">
                      <img
                        src="/tt.png"
                        className="w-[15px] h-[15px] object-contain mx-auto"
                      ></img>
                    </div>
                  </div>
                )}
                {url != "/" && url != "" && (
                  <div
                    className={`bg-gray-800 w-[30px] h-[30px] rounded-full z-20 cursor-pointer showMoreExtras flex mt-2`}
                    // ${
                    //   props.link == "/" ? "hidden opacity-0" : "flex"
                    // }`}
                    onClick={() => webLink(url)}
                  >
                    <div className="h-full w-full flex flex-col justify-center">
                      <img
                        src="/web.png"
                        className="w-[15px] object-contain mx-auto"
                      ></img>
                    </div>
                  </div>
                )}
              </div>
              {guidelines != "/" && (
                <div>
                  <div className="lg:ml-8 ml-4 mt-4">
                    <p className="bg-turquoise px-1 text-white text-sm uppercase font-poppins font-light inline">
                      Guidelines
                    </p>
                  </div>
                  <Link href={"guidelines"} download>
                    <a>
                      <div className="w-[150px] h-[35px] bg-turquoise rounded lg:ml-8 ml-4 mt-2 flex flex-col justify-center">
                        <p className="font-poppins text-white uppercase mx-auto text-center">
                          Download
                        </p>
                      </div>
                    </a>
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* <div className="flex flex-row gap-16 max-w-[350px] mx-auto lg:translate-x-full mt-10 h-[70%] -translate-y-16 overflow-x-scroll snap-x snap-mandatory">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              className="lg:h-[100%] w-full h-full mx-auto object-contain object-center snap-center"
            />
          ))}
        </div> */}
        </div>
      </div>

      <Contact />

      <Footer />
    </div>
  );
};
