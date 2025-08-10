const TrustedSection = () => {
  return (
    <section className="flex flex-col lg:flex-row p-6 md:p-20 gap-10">
      {/* Left Content */}
      <div className="w-full lg:w-1/2">
        <div className="flex flex-col space-y-3">
          <h6 className="text-[#7e3af2] font-medium text-lg dark:text-purple-300 text-center md:text-left">
            Trusted Worldwide
          </h6>
          <h1 className="font-black text-3xl dark:text-white text-center md:text-left">
            Trusted by over 600 million users and 10,000 teams
          </h1>
          <p className="text-lg font-light text-gray-500 dark:text-white text-center md:text-left">
            Our rigorous security and compliance standards are at the heart of
            all we do. We work tirelessly to protect you and your customers.
          </p>
          <hr className="text-gray-200 mt-2" />
          <div className="mt-5 mb-2 flex flex-col items-center md:items-start">
            <a
              href="#"
              className="flex items-center text-base font-medium text-purple-600 hover:text-purple-800 dark:text-purple-200 dark:hover:text-purple-400"
            >
              Explore Legality Guide
              <svg
                className="w-5 h-5 ml-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <a
              href="#"
             className="inline-flex items-center text-base font-medium text-purple-600 hover:text-purple-800 dark:text-purple-200 dark:hover:text-purple-400"
            >
              Visit the Trust Center
              <svg
                className="w-5 h-5 ml-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Right Cards */}
      <div className="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-10 ">
        {/* Card 1 */}
        <div className="flex flex-col items-center md:items-start">
          <svg
            className="w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 dark:text-purple-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M2 5a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm14 1a1 1 0 11-2 0 1 1 0 012 0zM2 13a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2zm14 1a1 1 0 11-2 0 1 1 0 012 0z"
              clipRule="evenodd"
            />
          </svg>
          <h3 className="mb-2 text-2xl font-bold text-black dark:text-white">
            99.99% uptime
          </h3>
          <p className="font-light text-gray-500 dark:text-gray-200 text-center md:text-left">
            For DevForge, with zero maintenance downtime
          </p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center md:items-start">
          <svg
            className="w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 dark:text-purple-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
          </svg>
          <h3 className="mb-2 text-2xl font-bold text-black dark:text-white text-center md:text-left">
            600M+ Users
          </h3>
          <p className="font-light text-gray-500 dark:text-gray-400 text-center md:text-left">
            Trusted by over 600 million users around the world
          </p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center md:items-start">
          <svg
            className="w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 dark:text-purple-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z"
              clipRule="evenodd"
            />
          </svg>
          <h3 className="mb-2 text-2xl font-bold text-black dark:text-white">
            100+ countries
          </h3>
          <p className="font-light text-gray-500 dark:text-gray-200 text-center md:text-left">
            Have used DevForge to create functional websites
          </p>
        </div>

        {/* Card 4 */}
        <div className="flex flex-col items-center md:items-start">
          <svg
            className="w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 dark:text-purple-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
          </svg>
          <h3 className="mb-2 text-2xl font-bold text-black dark:text-white">
            5+ Million
          </h3>
          <p className="font-light text-gray-500 dark:text-gray-200 text-center md:text-left">
            Transactions per day
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrustedSection;
