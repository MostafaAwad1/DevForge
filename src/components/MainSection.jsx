import featureimg1 from "../assets/images/feature-1.png";
import featureimg2 from "../assets/images/feature-2.png";

const features1 = [
  "Continuous integration ",
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

const MainSection = () => {
  return (
    <section className="bg-gray-100 p-6 md:p-20 dark:bg-gray-800">
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

          {/* Features 1 List */}
          <ul className="pt-8 space-y-5 my-7 w-full mx-auto md:mx-0 flex flex-col md:items-start md:text-left md:justify-start ">
            {features1.map((feature, index) => (
              <li
                key={index}
                className="
        flex items-center justify-center
        md:flex md:items-center md:justify-start
        md:space-x-3
        w-full
        md:pl-0
        md:pr-0
        pr-5
        pl-12
        text-center md:text-left
      "
              >
                <span
                  className="
          w-6 h-6 flex-shrink-0 flex justify-center items-center
          text-purple-500 dark:text-purple-400
        "
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
                <span className="text-base font-medium text-gray-900 dark:text-white flex-1">
                  {feature}
                </span>
              </li>
            ))}
          </ul>

          <p className="font-light text-gray-500 text-lg dark:text-white text-center md:text-left ">
            Deliver great service experiences fast - without the complexity of
            traditional ITSM solutions.
          </p>
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
          <ul className="pt-8 space-y-5 my-7  w-full max-w-md  md:mx-0">
            {features2.map((feature, index) => (
              <li
                key={index}
                className="
                  flex items-center
                  justify-center md:justify-start
                   md:space-x-3
                  w-full
                  pl-10
                  md:pl-0
                  text-center md:text-left
                "
              >
                <span
                  className="
                    w-6 h-6 flex-shrink-0 flex justify-center items-center
                    text-purple-500 dark:text-purple-400
                  "
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
                <span className="text-base font-medium text-gray-900 dark:text-white flex-1">
                  {feature}
                </span>
              </li>
            ))}
          </ul>

          <p className="font-light text-gray-500 text-lg dark:text-white text-center md:text-left ">
            Deliver great service experiences fast - without the complexity of
            traditional ITSM solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
