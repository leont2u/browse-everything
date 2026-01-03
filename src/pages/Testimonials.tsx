import testimonialImage from "../assets/images/testimonials-image.png";
const Testimonials = () => {
  return (
    <div className="mb-20 grid grid-cols-2 gap-8">
      <img src={testimonialImage} alt="Testimonials" className="h-100 w-100" />
      <div className="flex justify-center items-center flex-col">
        <p className="font-semibold text-2xl mb-3">
          “I was skeptical, but Area has completely transformed the way I manage
          my business. The data visualizations are so clear and intuitive, and
          the platform is so easy to use. I can't imagine running my company
          without it.”
        </p>
        <div>
          <h1 className="mb:3"> John Smith</h1>
          <h1>Head of data</h1>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
