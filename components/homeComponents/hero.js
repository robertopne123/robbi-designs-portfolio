export const Hero = () => {
  return (
    <div className="bg-offWhite w-full h-[73vh] relative pt-4 lg:pt-0">
      <div className="max-w-[1250px] mx-auto">
        <img
          src="/projectsBanner.png"
          className="absolute opacity-20 mb-[-200px] lg:flex hidden"
        />
        <h3 className="font-roboto text-turquoise uppercase text-3xl md:text-7xl font-bold px-4 mx-auto max-w-[1250px] lg:translate-y-[200px] lg:ml-4">
          HEY THERE, <br />
          I’M ROBBI
        </h3>
        <p className="font-roboto text-turquoise text-sm md:text-md xs:text-xs mt-2 px-4 mx-auto max-w-[1250px] lg:translate-y-[200px] lg:ml-4">
          I’m a visual branding designer, with experience in{" "}
          <br className="md:hidden lg:flex flex" />
          front-end design and development and digital marketing.
        </p>
      </div>

      <img
        src="/robbi.png"
        className="lg:h-[80%] w-auto h-[73%] ml-auto lg:-translate-y-[60px] object-cover mt-16 xs:mt-16 xs2:mt-12 md:mt-4 lg:mt-2"
      />
    </div>
  );
};
