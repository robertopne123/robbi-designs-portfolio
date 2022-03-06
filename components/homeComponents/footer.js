export const Footer = () => {
  return (
    <div className="bg-stone-800 h-screen w-full flex flex-col px-4 pt-8">
      <img src="/logo.svg" className="w-[150px] mx-auto"></img>

      <div className="flex flex-col mx-auto mt-8">
        <p className="text-sm font-poppins text-gray-300 text-center">LINKS</p>
        <p className="text-md font-poppins text-white text-center">Resume</p>
        <p className="text-md font-poppins text-white text-center">Projects</p>
      </div>
    </div>
  );
};
