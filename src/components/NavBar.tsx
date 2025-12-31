const NavBar = () => {
  return (
    <div className="flex justify-between align-middle ml-20 mr-20 mt-7  ">
      <h1 className="font-bold text-2xl">Area</h1>
      <div className="flex justify-between align-middle gap-10">
        <h1>Benefits</h1>
        <h1>Specifications</h1>
        <h1>How-to</h1>
        <h1>Contact Us</h1>
      </div>

      <button className="bg-[#485C11] p-3 rounded-[1000px] text-white  ">
        Learn More
      </button>
    </div>
  );
};

export default NavBar;
