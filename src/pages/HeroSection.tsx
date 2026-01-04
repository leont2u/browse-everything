import heroimage from "../assets/images/heroimage.png";
const HeroSection = () => {
  return (
    <div className="mb-10">
      <h1 className=" text-[70px] lg:text-[140px] flex justify-center items-center ">
        Browse everything.
      </h1>
      <div className="flex justify-center items-center">
        <img src={heroimage} />
      </div>
    </div>
  );
};

export default HeroSection;
