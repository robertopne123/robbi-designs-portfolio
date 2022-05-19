import Head from "next/head";
import Image from "next/image";
import { Nav } from "../../components/nav";
import { Contact } from "../../components/homeComponents/contact";
import { Footer } from "../../components/homeComponents/footer";
import styles from "../../styles/Home.module.css";

export default function WraptorCustoms() {
  let images = ["/branding/wraptor/raptor.png", "/branding/wraptor/hat.png"];

  return (
    <div className={styles.container}>
      <Head>
        <title>Robbi Designs | Branding, Social Media & Website Designer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/icon.svg" />
      </Head>

      <Nav />

      <div>
        <div className="bg-offWhite w-full h-[73vh] relative pt-4 lg:pt-0">
          <div className="max-w-[1250px] mx-auto">
            <img
              src="/projectsBanner.png"
              className="absolute opacity-20 mb-[-200px] lg:flex hidden"
            />
            <h3 className="font-roboto text-turquoise uppercase text-3xl md:text-7xl font-bold px-4 mx-auto max-w-[1250px] lg:translate-y-[200px] lg:ml-4">
              Wraptor <br />
              Customs
            </h3>
            <p className="font-roboto text-turquoise text-sm md:text-md xs:text-xs mt-2 px-4 mx-auto max-w-[1250px] lg:translate-y-[200px] lg:ml-4">
              A realignment of Wraptor Customs branding, bringing the website,
              <br />
              social media and physical assets together visually.
            </p>
          </div>

          <div className="flex flex-row gap-16 max-w-[350px] mx-auto lg:translate-x-full mt-10 h-[70%] -translate-y-16 overflow-x-scroll snap-x snap-mandatory">
            {images.map((image, index) => (
              <img
                key={index}
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
              Wraptor Customs were previously with a different agency who were
              building them a new website and social media, which wasn&apos;t
              going in the creative direction that was best for the business and
              the client. After joining us, we set out to create some colourful
              and playful branding, which helped their business stand out from
              the sea of stealthy and luxury branded car businesses. Since
              Wraptor started, the founder Dudley Ginn, has always been about
              breaking away from the norm and creating a business which is
              vibrant and a bit bonkers! After many conversions with the client,
              I agreed with the team that really playing into the playful nature
              of the business in regard to their branding was the best direction
              to go with. Once we were set on the branding, we got to work on
              designing the website (both of which I was the design lead on).
            </p>
            <p className="bg-white px-1 text-turquoise text-sm uppercase font-poppins font-light inline">
              The Project
            </p>
            <div className="h-px w-full bg-gray-300 mt-2"></div>
            <h3 className="font-roboto text-white text-xl underline decoration-orange pt-4">
              Colours & Typography
            </h3>
            <div className="flex md:flex-row flex-col gap-10 max-w-[1250px] mx-auto mt-2">
              <div className="min-w-[35%] md:w-[35%] w-full">
                <img
                  src="/branding/wraptor/colours.jpg"
                  className="w-[100%] object-contain"
                />
              </div>
              <p className="font-roboto text-sm text-white">
                When making decisions on Wraptors branding, we didn&apos;t want
                to tear everything down and start again. Instead, there were a
                few parts that we decided to keep and work on, one of the main
                parts being the rainbow part of their colour scheme. Typically,
                we would suggest picking only 4/5 colours as part of a colour
                scheme to create some strong sense of visual direction, but in
                this case we felt that the rainbow, mixed with black and white,
                really allowed for the colours to pop and catch peoples eye. We
                felt that the rainbow was best used in small quantities e.g.
                accents and small decorations.
                <br />
                <br />
                Just like the rainbow, we also opted to continue using the font
                Ethnocentric, which was already incredibly prominent in Wraptor
                Customs merchandise, decals, and business cards. This font
                worked especially well for the logo and for headers on the
                website and on social media posts.
              </p>
            </div>
            <h3 className="font-roboto text-white text-xl underline decoration-orange mt-4">
              Website
            </h3>
            <div className="flex md:flex-row flex-col gap-10 max-w-[1250px] mx-auto mt-4">
              <p className="font-roboto text-sm text-white">
                The website had to showcase their different services, i.e.
                wrapping, tuning, customisation, diagnostics and custom
                exhausts, which we decided to associate with a colour from the
                rainbow part of the colour scheme. My job was to design the
                website according to the brand guidelines we had set out. I
                believed that imagery on this website was vital and as such
                reserved space for a completely custom drawing done by our teams
                illustrator. The image references the owners custom Jaguar, the
                Wraptor Customs garage and a dinosaur, which is present on the
                walls in the garage.
                <br />
                <br />
                Scroll down the image to the right for a preview.
              </p>
              <div className="min-w-[45%] md:w-[45%] w-full aspect-[937/476] overflow-y-scroll">
                <img
                  src="/branding/wraptor/websitefull.jpg"
                  className="w-[100%]"
                />
              </div>
            </div>
            <h3 className="font-roboto text-white text-xl underline decoration-orange mt-4">
              Social Media
            </h3>
            <div className="max-w-[1250px] mx-auto flex md:flex-row flex-col gap-10">
              <div className="flex flex-col gap-2">
                <p className="font-roboto text-sm text-white mt-4">
                  Content was very important to the Wraptor Customs brand, where
                  every project was filmed and sent over to our team for
                  editing. A mixture of images and video content was needed to
                  bring Wraptor Customs social media to life. As part of
                  determining the branding, I also set out how we would layout
                  and design social media content in each type of media. I was
                  also responsible for setting out our video editing process for
                  Dudley&apos;s content so consistency was maintained by every
                  member of the team.
                  <br />
                  <br />
                  Wraptor Customs has helped us push into realms we previously
                  hadn&apos;t done as a team. They are our first client that
                  wants to focus on Youtube as a primary social media, hence
                  video content became really important. A lot of our client
                  typically go with photo or graphical content, whereas we now
                  had to create 2-10 minute videos that really captivated the
                  audience.
                </p>
              </div>
              <div className="flex flex-col">
                <h3 className="font-roboto text-white text-xl underline decoration-orange">
                  Examples of my posts
                </h3>
                <div className="flex flex-row gap-4 mt-4">
                  <div className="w-[240px] h-[240px] aspectflex flex-row">
                    <img
                      src="/branding/wraptor/content1.png"
                      className="h-[240px] aspect-square ml-auto snap-center"
                    />
                  </div>
                </div>
                <p className="text-white font-roboto uppercase">
                  Video coming soon
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Contact />

      <Footer />
    </div>
  );
}
