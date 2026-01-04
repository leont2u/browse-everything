import footerlogo from "../assets/images/footerlogo.png";
const Footer = () => {
  return (
    <div className="mb-10">
      <div className="lg:flex gap-10 mb-10">
        <h1>Benefits</h1>
        <h1>Specifications</h1>
        <h1>How-to</h1>
      </div>
      <div className="flex justify-between">
        <div className="flex gap-7 align-bottom justify-baseline">
          <img src={footerlogo} />{" "}
          <h1 className="font-light text-[#485C11]">@Area. 2025</h1>
        </div>
        <div>
          <h1 className="font-light text-[#485C11]">All Rights Reserved</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
