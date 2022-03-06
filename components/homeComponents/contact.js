import Link from "next/link";

export const Contact = () => {
  return (
    <div className="bg-turquoise w-full px-4 py-8">
      <h4 className="font-roboto font-bold text-white text-2xl">
        Get in touch with me...
      </h4>
      <p className="font-roboto text-white text-sm mt-2 mb-4">
        If you want to get in touch with me regarding work, questions of any my
        projects or you just want a chat, then just fill out the handy form
        below, or click any of the social media links below
      </p>
      <form
        className="flex flex-col"
        name="inquiryForm"
        method="POST"
        action="/success"
        netlify-honeypot="bot-field"
        data-netlify="true"
      >
        <input type="hidden" name="form-name" value="inquiryForm" />
        <p className="hidden">
          <label>
            Don&apos;t fill this out if you&apos;re human:{" "}
            <input name="bot-field" />
          </label>
        </p>
        <div className="grid grid-cols-6 gap-4">
          <div className="col-span-full md:col-span-full">
            <label
              htmlFor="name"
              className="bg-white px-1 text-turquoise text-sm uppercase font-poppins font-light inline"
            >
              Name <span className="text-orange-500">*</span>
            </label>
            <input
              className="bg-white shadow appearance-none border h-[30px] mt-2 mb-2 w-full py-2 px-1 text-gray-700 text-poppins leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              name="name"
              required
            ></input>
          </div>

          <div className="col-span-full">
            <label
              htmlFor="email"
              className="bg-white px-1 text-turquoise text-sm uppercase font-poppins font-light inline"
            >
              Email <span className="text-orange-500">*</span>
            </label>
            <input
              className="bg-white shadow appearance-none border h-[30px] mt-2 mb-2 w-full py-2 px-1 text-gray-700 text-poppins leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              name="email"
              required
            ></input>
          </div>

          <div className="col-span-full md:col-span-full">
            <label
              htmlFor="message"
              className="bg-white px-1 text-turquoise text-sm uppercase font-poppins font-light inline"
            >
              Message <span className="text-orange-500">*</span>
            </label>
            <textarea
              className="bg-white shadow appearance-none border mt-2 mb-2 w-full py-2 px-1 text-gray-700 font-poppins leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              type="text"
              name="message"
              required
            ></textarea>
          </div>
          <div className="col-span-2 md:col-span-2 col-start-5">
            <button
              className="bg-white text-turquoise font-poppins uppercase h-[30px] leading-[30px] w-full shadow-xl border-white hover:bg-secondary"
              type="submit"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
      <div className="h-[60px] p-1 rounded-full w-full bg-white mt-8 flex flex-row gap-2">
        <div className="h-[52px] relative">
          <img
            src="https://media-exp1.licdn.com/dms/image/C4E03AQFmCRsTEM5OFg/profile-displayphoto-shrink_200_200/0/1636041167005?e=1651708800&v=beta&t=0hDV2LQUaV0FH1fxDRV1RYTH4DtY_9XLYiAE0BmiSWo"
            className="rounded-full h-[52px]"
          ></img>
          <div className="absolute bottom-0 right-0 bg-turquoise rounded-full">
            <img
              src="/linkedin-in.svg"
              className="h-[20px] w-[20px] p-1 invert"
            ></img>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <p className="font-poppins text-md font-semibold text-turquoise">
            Robert Graham
          </p>
          <Link href="https://www.linkedin.com/in/robert-graham-8123b512a/">
            <a className="">
              <p className="font-poppins text-sm text-turquoise">
                View Profile
              </p>
            </a>
          </Link>
        </div>
      </div>
      <div className="h-[60px] p-1 rounded-full w-full bg-white mt-4 flex flex-row gap-2">
        <div className="h-[52px] relative">
          <img
            src="https://pbs.twimg.com/profile_images/1292468434576519171/ZGIRO810_400x400.jpg"
            className="rounded-full h-[52px]"
          ></img>
          <div className="absolute bottom-0 right-0 bg-turquoise rounded-full">
            <img
              src="/twitter.svg"
              className="h-[20px] w-[20px] p-1 invert"
            ></img>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <p className="font-poppins text-md text-turquoise font-semibold">
            @robbi______
          </p>
          <Link href="https://twitter.com/robbi______">
            <a className="">
              <p className="font-poppins text-sm text-turquoise">
                View Profile
              </p>
            </a>
          </Link>
        </div>
      </div>
      <div className="h-[60px] p-1 rounded-full w-full bg-white mt-4 flex flex-row gap-2">
        <div className="h-[52px] relative">
          <img
            src="https://pbs.twimg.com/profile_images/1292468434576519171/ZGIRO810_400x400.jpg"
            className="rounded-full h-[52px]"
          ></img>
          <div className="absolute bottom-0 right-0 bg-turquoise rounded-full">
            <img
              src="/instagram.svg"
              className="h-[20px] w-[20px] p-1 invert"
            ></img>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <p className="font-poppins text-md text-turquoise font-semibold">
            @robbi_graham_98
          </p>
          <Link href="https://instagram.com/robbi_graham_98">
            <a className="">
              <p className="font-poppins text-sm text-turquoise">
                View Profile
              </p>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};
