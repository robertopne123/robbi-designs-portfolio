import Head from "next/head";
import Image from "next/image";
import { Hero } from "../components/homeComponents/hero";
import { IntroResume } from "../components/homeComponents/introResume";
import { Nav } from "../components/nav";
import { Projects } from "../components/homeComponents/projects";
import { Contact } from "../components/homeComponents/contact";
import { Footer } from "../components/homeComponents/footer";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Robbi Designs | Branding, Social Media & Website Designer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/icon.svg" />
      </Head>

      <Nav />

      <Hero />

      <IntroResume />

      <Projects />

      <Contact />

      <Footer />
    </div>
  );
}
