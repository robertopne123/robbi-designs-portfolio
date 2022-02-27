export const Hero = () => {
  return (
    <div className="bg-offWhite w-full pt-4">
      <h3 className="font-roboto text-turquoise uppercase text-3xl font-bold px-4">
        HEY THERE, <br />
        I’M ROBBI
      </h3>
      <p className="font-roboto text-turquoise text-sm w-3/4 mt-2 px-4">
        I’m a visual designer, with experience in front-end development and
        digital marketing.
      </p>
      <img
        src="/robbi.png"
        width="100%"
        height="100%"
        className="w-full h-[80%] mt-4"
      />
    </div>
  );
};
