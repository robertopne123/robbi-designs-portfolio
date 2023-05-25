import Head from "next/head";
import Image from "next/image";
import { Nav } from "../../components/nav";
import { Contact } from "../../components/homeComponents/contact";
import { Footer } from "../../components/homeComponents/footer";
import styles from "../../styles/Home.module.css";
import { ProjectPage } from "../../components/projectComponents/projectPage";

export default function TheRenaissaint() {
  let images = [
    {
      url: "/branding/renaissaint/thumb.jpg",
      caption:
        "A mockup of Bluprint being used on a tablet, showing a project's home dashboard.",
    },
    {
      url: "/branding/renaissaint/colours.jpg",
      caption: "A cover photo for use on Youtube, Facebook and LinkedIn.",
    },
    {
      url: "/branding/renaissaint/thumb2.jpg",
      caption:
        "A simulated animation showing various features of Bluprint being used.",
    },
  ];

  function igLink(username) {
    router.push(`https://instagram.com/${username}`);
  }

  function webLink(url) {
    router.push(url);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>
          The Renaissaint - Robbidesigns | Branding, Social Media & Website
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
        username={"/"}
        url={"https://therenaissaint.com"}
        images={images}
        title={"The Renaissaint"}
        desc={"Development of brand design and video editing"}
        about={[""]}
      />
    </div>
  );
}
