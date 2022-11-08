import Head from "next/head";
import Image from "next/image";
import { Nav } from "../../components/nav";
import { Contact } from "../../components/homeComponents/contact";
import { Footer } from "../../components/homeComponents/footer";
import styles from "../../styles/Home.module.css";
import { ProjectPage } from "../../components/projectComponents/projectPage";

export default function WereDigital() {
  let images = [
    { url: "/branding/weredigital/ad.jpg" },
    { url: "/branding/weredigital/mac.png" },
    { url: "/branding/weredigital/weredigital.png" },
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>Robbidesigns | Branding, Social Media & Website Designer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/icon.svg" />
      </Head>

      <Head>
        <title>
          We&apos;re Digital - Robbidesigns | Branding, Social Media & Website
          Designer
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
        username={"weredigital.co"}
        url={"https://weredigital.co"}
        images={images}
        title={"We're Digital"}
        desc={"A website design for a website design business I co-launched."}
        about={[
          "I've previously co-launched We're Digital, a website design business. We had no visual identity as a business, therefore I designed a logo, picked a colour scheme and picked some fonts, before setting out on designing a website that allowed viewers to see our services and the pricing options we had available.",
        ]}
        guidelines={"/"}
      />
    </div>
  );
}
