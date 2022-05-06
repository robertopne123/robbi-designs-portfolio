export const Hero = () => {
  return (
    <div className="bg-offWhite w-full pt-4">
      <h3 className="font-roboto text-turquoise uppercase text-3xl md:text-7xl font-bold px-4 mx-auto max-w-[1250px] md:translate-y-[300px]">
        HEY THERE, <br />
        I’M ROBBI
      </h3>
      <p className="font-roboto text-turquoise text-sm md:text-lg w-3/4 mt-2 px-4 mx-auto max-w-[1250px] md:translate-y-[300px]">
        I’m a visual branding designer, with experience in{" "}
        <br className="hidden md:flex" />
        front-end design and development and digital marketing.
      </p>
      <img
        src="/robbi.png"
        className="w-full md:w-[30%] md:h-[60%] h-[80%] mt-4 ml-auto"
      />
    </div>
  );
};
