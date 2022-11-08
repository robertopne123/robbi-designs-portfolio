import Head from "next/head";
import Image from "next/image";
import { Nav } from "../../components/nav";
import { Contact } from "../../components/homeComponents/contact";
import { Footer } from "../../components/homeComponents/footer";
import styles from "../../styles/Home.module.css";
import { ProjectPage } from "../../components/projectComponents/projectPage";

export default function GigawaffleBranding() {
  let images = [
    {
      url: "/branding/gigawaffle/6.jpg",
      caption:
        "Our brand guidelines booklet (full download on the right), website and a design of mine within the frame.",
    },
    {
      url: "/branding/gigawaffle/anim.gif",
      caption:
        "A video introduction created for usage across Youtube and the website.",
    },
    {
      url: "/branding/gigawaffle/content.png",
      caption:
        "The front cover and the first slide (joined together) of a piece of our content.",
    },
    {
      url: "/branding/gigawaffle/logoguidelines.png",
      caption:
        "The logo variants page from our brand and content guidelines, showing the new logo types.",
    },
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>
          Gigawaffle - Robbidesigns | Branding, Social Media & Website Designer
        </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/icon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins&family=Roboto:wght@400;500&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <ProjectPage
        username={"gigawaffleuk"}
        url={"https://gigawaffle.co.uk"}
        images={images}
        title={"Gigawaffle"}
        desc={"A complete rebrand across all digital assets for Gigawaffle."}
        about={[
          "During my time at Gigawaffle, I was involved in the companies rebrand. Our previous branding lacked consistency and accuracy in visual identity and brand messaging, which was an issue across a large amount of our digital and physical material. A huge job was required to bring the website, social media content, physical documents and messaging into some cohesion.",
          "Our company mission statement was to offer branding, marketing and web design services, without any technical waffle - this needed developing further to provide clarity on what exactly we meant by that. We wanted to provide value through our collective knowledge and experience by producing informative content, whilst also maintaining a creative edge to our brand. To provide consistency, we created a simplistic, yet bold visual theme which would run through all of our digital and physical assets, and to increase accuracy, we agreed on how current and future assets would be developed, i.e. art style, design software, font usage, etc.",
          "Eye-catching imagery and popping colours we're heavily involved in our rebrand, which can be seen throughout the social media content we created, and across the website. We decided to stick with a similar colour scheme to what we had previously. We picked a slightly more vibrant shade of pink and swapped out the lilac for an electric blue. Combining those colours with exact black and white, and updating our logo to a modern, rounded GW monogram logo, helped us create a striking brand image, which stood out from the crowd.",
        ]}
        guidelines={"/branding/gigawaffle/guidelines/gwbrandguidelines.pdf"}
      />
    </div>
  );
}
