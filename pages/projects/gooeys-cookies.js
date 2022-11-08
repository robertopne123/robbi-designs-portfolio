import Head from "next/head";
import Image from "next/image";
import { Nav } from "../../components/nav";
import { Contact } from "../../components/homeComponents/contact";
import { Footer } from "../../components/homeComponents/footer";
import styles from "../../styles/Home.module.css";
import { ProjectPage } from "../../components/projectComponents/projectPage";

export default function GooeysCookies() {
  let images = [
    { url: "/branding/gooeys/order.png" },
    { url: "/branding/gooeys/cookies.jpg" },
    { url: "/branding/gooeys/gooeyscookies.jpg" },
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
          Gooeys Cookies - Robbidesigns | Branding, Social Media & Website
          Designer
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
        username={"gooeys.cookies"}
        url={"https://gooeyscookies.co.uk"}
        images={images}
        title={"Gooeys Cookies"}
        desc={"A new website for a new online cookie shop."}
        about={[
          "Gooeys Cookies were a new online-only cookie shop that needed a website designing. They already had a small amount of branding - a cute pink text-based logo and some playful looking packaging, therefore I already had some colour elements and imagery to work with. They wanted a website which featured a small online store for people to order cookies to their door, as well as flavour recommender.",
        ]}
        guidelines={"/"}
      />
    </div>
  );
}