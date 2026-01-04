import logo1 from "../assets/images/logo1.png";
import logo2 from "../assets/images/logo2.png";
import logo3 from "../assets/images/logo3.png";
import logo4 from "../assets/images/logo4.png";
import logo5 from "../assets/images/logo5.png";
import logo6 from "../assets/images/logo6.png";

const TrustedCompanies = () => {
  return (
    <div className="mb-30 ">
      <h2 className="font-light text-[#6F6F6F] mb-10">Trusted by:</h2>
      <div className="grid grid-cols-2 lg:grid-cols-6 gap-8">
        <img src={logo1} />
        <img src={logo2} />
        <img src={logo3} />
        <img src={logo4} />
        <img src={logo5} />
        <img src={logo6} />
      </div>
    </div>
  );
};

export default TrustedCompanies;
