import connectimage from "../assets/images/connect-image.png";

const ConnectWithUs = () => {
  return (
    <div className=" ">
      <div className="flex justify-center items-center">
        <img src={connectimage} alt="Connect with us image" />
      </div>
      <div className="mt-10 mb-20 flex flex-col justify-center items-center  ">
        <h1 className=" text-5xl lg:text-6xl mb-5 ">Connect with us</h1>
        <p className="font-light mb-5 text-[#6F6F6F]">
          Schedule a quick call to learn how Area can turn your regional data
          into a powerful advantage.
        </p>
        <button className="rounded-[1000px] bg-[#485C11] text-white p-2 w-75">
          Learn more
        </button>
      </div>
    </div>
  );
};

export default ConnectWithUs;
