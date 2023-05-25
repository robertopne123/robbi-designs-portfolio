import Head from "next/head";
import Image from "next/image";
import { Nav } from "../../components/nav";
import { Contact } from "../../components/homeComponents/contact";
import { Footer } from "../../components/homeComponents/footer";
import styles from "../../styles/Home.module.css";
import { ProjectPage } from "../../components/projectComponents/projectPage";

export default function LoveCoco() {
  let images = [
    {
      url: "/branding/lovecoco/website.jpg",
      caption:
        "A mockup of Bluprint being used on a tablet, showing a project's home dashboard.",
    },
    {
      url: "/branding/lovecoco/bowl.jpg",
      caption: "A cover photo for use on Youtube, Facebook and LinkedIn.",
    },
    {
      url: "/branding/lovecoco/pool.jpg",
      caption:
        "A simulated animation showing various features of Bluprint being used.",
    },
    {
      url: "/branding/lovecoco/blog.jpg",
      caption:
        "A little look at the website I designed and built for Wraptor Customs.",
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
          Love Coco - Robbidesigns | Branding, Social Media & Website Designer
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
        username={"love_coco_ibiza"}
        url={"https://lovecoco.com"}
        images={images}
        title={"Love Coco"}
        desc={"Development of brand design and new website design"}
        about={[
          "Love Coco were looking to overhaul their website design. They tasked my company, Quirk. Studio, with establishing a new brand direction and developing a top quality website design to help their sustainable coconut bowls stand out from the crowd.",
        ]}
      />
    </div>
  );
}