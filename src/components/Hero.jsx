import HeroImage from "../assets/images/hero.png";

const Hero = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between mx-5 md:mx-20 mb-10 dark:bg-gray-800 bg-white">
      
      {/* Left - Text */}
      <div className="w-full md:w-1/2 mt-8 md:mt-0 text-center md:text-left px-4 md:px-0">
        <h1 className="font-extrabold text-4xl md:text-5xl text-[#7e3af2] dark:text-purple-300 mb-6">
          Building digital <br /> products & brands.
        </h1>
        <p className="text-gray-600 dark:text-white text-lg leading-relaxed">
          This professional and responsive website template <br />
          is designed for companies offering software <br />
          and digital services. Built with Tailwind CSS utility <br />
          classes, it provides a solid foundation for showcasing your business,
          engaging clients, and promoting your solutions effectively.
        </p>
      </div>

      {/* Right - Image */}
      <div className="w-full md:w-1/2 mb-6 md:mb-0 px-4 md:px-10">
        <img src={HeroImage} alt="hero" className="w-full h-auto ml-5" />
      </div>
    </section>
  );
};

export default Hero;
