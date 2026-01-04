const MapYourSuccess = () => {
  const success = [
    {
      success_number: "01",
      title: "Get Started",
      description:
        "With our intuitive setup, you’re up and running in minutes.",
    },
    {
      success_number: "02",
      title: "Customize and Configure",
      description: "Adapt Area to your specific requirements and preferences.",
    },
    {
      success_number: "03",
      title: "Grow Your Business",
      description: "Make informed decisions to exceed your goals.",
    },
  ];

  return (
    <div className="mb-20">
      <div className="flex flex-col  lg:flex-row lg:justify-between mb-10">
        <h1 className="text-[30px] mb-5 lg:mb-0">Map Your Success</h1>
        <button className="rounded-[1000px] p-3 bg-[#DFECC6]">
          Discover More
        </button>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
        {success.map((index) => (
          <div>
            <h1 className="text-5xl mb-4 text-[#929292]">
              {index.success_number}
            </h1>
            <h3>{index.title}</h3>
            <p className="text-[#929292] font-light">{index.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MapYourSuccess;
