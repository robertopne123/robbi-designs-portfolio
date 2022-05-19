import Link from "next/link";

export const Footer = () => {
  return (
    <div className="bg-stone-800 w-full flex flex-col px-4 py-8">
      <img src="/logo.svg" className="w-[150px] mx-auto"></img>

      <div className="flex flex-col mx-auto mt-8">
        <p className="text-sm font-poppins text-gray-300 text-center">LINKS</p>
        <Link href="/resume">
          <a>
            <p className="text-md font-poppins text-white text-center hover:text-orange">
              Resume
            </p>
          </a>
        </Link>
        <Link href="/projects">
          <a>
            <p className="text-md font-poppins text-white text-center hover:text-orange">
              Projects
            </p>
          </a>
        </Link>
      </div>

      <div className="flex flex-col mx-auto mt-8">
        <p className="text-sm font-poppins text-gray-300 text-center">
          SOCIALS
        </p>
        <Link href="https://instagram.com/robbi_graham_98">
          <a>
            <p className="text-md font-poppins text-white text-center hover:text-orange">
              Instagram
            </p>
          </a>
        </Link>
        <Link href="https://twitter.com/robbi______">
          <a>
            <p className="text-md font-poppins text-white text-center hover:text-orange">
              Twitter
            </p>
          </a>
        </Link>
        <Link href="https://www.linkedin.com/in/robert-graham-8123b512a/">
          <a>
            <p className="text-md font-poppins text-white text-center hover:text-orange">
              LinkedIn
            </p>
          </a>
        </Link>
      </div>
    </div>
  );
};
