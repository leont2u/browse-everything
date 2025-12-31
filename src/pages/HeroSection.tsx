import heroimage from "../assets/images/heroimage.png";
const HeroSection = () => {
  return (
    <div>
      <h1 className="font-bold text-[140px] flex justify-center align-middle ">
        Browse everything.
      </h1>
      <div className="flex justify-center align-middle">
        <img src={heroimage} />
      </div>
    </div>
  );
};

export default HeroSection;
