import featureimg1 from "../assets/images/feature-1.png";
import featureimg2 from "../assets/images/feature-2.png";

const features1 = [
  "Continuous integration",
  "Development workflow",
  "Knowledge management",
];

const features2 = [
  "Dynamic dashboards",
  "Templates for everyone",
  "Development workflow",
  "Limitless business automation",
  "Knowledge management",
];

const MiddelSection = () => {
  return (
    <section className="bg-gray-100  p-6 md:p-20 dark:bg-gray-800">
      {/* Feature 1 Section */}
      <div className="flex flex-col text-center md:flex-row items-center md:items-start gap-10 md:text-left">
        {/* Text */}
        <div className="md:w-1/2 flex flex-col justify-center">
          <h1 className="text-3xl font-black mb-5 text-[#7e3af2] dark:text-purple-300">
            Work with tools you already use
          </h1>
          <p className="font-light text-gray-500 text-lg text-center dark:text-white md:text-left">
            Deliver great service experiences fast - without the complexity of
            traditional ITSM solutions. Accelerate critical development work,
            eliminate toil, and deploy changes with ease.
          </p>
          {/* List */}
          <div className="flex flex-row-reverse justify-center gap-3 my-3 text-center md:justify-end">
          <ul className="flex-col space-y-2 text-left">
            <li> Continuous integration</li>
            <li> Development workflow</li>
            <li> Knowledge management</li>
          </ul>
          <ul className="text-gray-800 flex flex-col space-y-2">
              <li>🔧</li>
              <li>🔧</li>
              <li>🔧</li>
            </ul>
          </div>
          <p className="font-light text-gray-500 text-lg dark:text-white text-center md:text-left ">
            Deliver great service experiences fast - without the complexity of
            traditional ITSM solutions.
          </p>
          {/* Features 1 List */}
        </div>

        {/* Image */}
        <div className="md:w-1/2">
          <img
            src={featureimg1}
            alt="Feature Section 1"
            className="w-full h-auto"
          />
        </div>
      </div>
      {/* Feature 2 Section */}
      <div
        id="feature-2"
        className="flex flex-col-reverse md:flex-row items-center md:items-start gap-10 mt-20"
      >
        {/* Image */}
        <div className="md:w-1/2">
          <img
            src={featureimg2}
            alt="Feature Section 2"
            className="w-full h-auto"
          />
        </div>

        {/* Text */}
        <div className="md:w-1/2 flex flex-col">
          <h1 className="text-3xl font-black mb-5 text-[#7e3af2] dark:text-purple-300 text-center md:text-left">
            We invest in the world’s potential
          </h1>
          <p className="font-light text-gray-500 text-lg dark:text-white text-center md:text-left">
            Deliver great service experiences fast - without the complexity of
            traditional ITSM solutions. Accelerate critical development work,
            eliminate toil, and deploy changes with ease.
          </p>

          {/* Features 2 List */}
          <div className="flex flex-col w-full items-center md:items-start md:my-4">
            <div className="flex flex-row-reverse gap-2 my-4 md:my-0">
            <ul className="space-y-2 text-gray-800 text-left dark:text-white ">
              <li> Dynamic reports and dashboards</li>
              <li> Templates for everyone</li>
              <li> Limitless business automation</li>
              <li> Knowledge management</li>
            </ul>
            <ul className="space-y-2 text-gray-800 text-center ">
              <li>🔧</li>
              <li>🔧</li>
              <li>🔧</li>
              <li>🔧</li>
            </ul>
          </div>
          </div>
          <p className="font-light text-gray-500 text-lg dark:text-white text-center md:text-left ">
            Deliver great service experiences fast - without the complexity of
            traditional ITSM solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MiddelSection;
