import Head from "next/head";
import Image from "next/image";
import { Nav } from "../../components/nav";
import { Contact } from "../../components/homeComponents/contact";
import { Footer } from "../../components/homeComponents/footer";
import styles from "../../styles/Home.module.css";
import { ProjectPage } from "../../components/projectComponents/projectPage";

export default function GrandVenue() {
  let images = [
    { url: "/branding/grandvenue/ad.png" },
    { url: "/branding/grandvenue/grandvenue.png" },
    { url: "/branding/grandvenue/Weddings.png" },
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>Robbi Designs | Branding, Social Media & Website Designer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/icon.svg" />
      </Head>

      <Head>
        <title>
          Grand Venue - Robbidesigns | Branding, Social Media & Website Designer
        </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/icon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins&family=Roboto:wght@400;500&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <ProjectPage
        username={"delticbusiness"}
        url={"https://delticbusiness.co.uk"}
        images={images}
        title={"Grand Venue"}
        desc={"Small brand design, website design and social media content."}
        about={[
          "Grand Venue is a venue which provides a variety of events such as Weddings, Conferences, Catering & Car Hire. Whilst at Gigawaffle, we had been contacted by Grand Venue to design another side of their website for their new venue in Preston. Instead, we proposed two seperate websites which followed exactly the same design language, but featured the correct imagery and information regarding each of their venues (Blackburn & Preston).",
          "I made adjusted in modernising and cleaning up their existing design, and then cloning it over to a new domain ready for new imagery and content. I cleaned up the imagery across both of the website and used some high quality stock photos to upgrade their catering images. Both websites also received as a welcome page, which allowed the customer to select which venue they wished to look at, promptly taking them to the respective venue website.",
        ]}
        guidelines={"/"}
      />
    </div>
  );
}