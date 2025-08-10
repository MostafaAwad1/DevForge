const Offers = () => {
  return (
    <section className="py-10 px-4 md:px-10">
      <div className="flex flex-col text-center mb-10">
        <h1 className="text-3xl font-black mb-3 dark:text-white">
          Designed for business teams like yours
        </h1>
        <p className="text-xl font-light text-gray-500 dark:text-gray-200">
          Here at DevForge we focus on markets where technology, innovation, and capital can
          <br />
          unlock long-term value and drive economic growth.
        </p>
      </div>

      {/* Cards Container */}
      <div className="flex flex-col md:flex-row justify-evenly space-y-8 md:space-y-0 md:space-x-8 bg-white dark:bg-gray-800 dark:text-white text-gray-800">
        {/* CARD1 */}
        <div className="flex flex-col text-center px-5 py-10 w-full max-w-md mx-auto md:max-w-sm space-y-5 shadow-md border border-purple-500 rounded-2xl bg-white dark:bg-gray-800 dark:text-white">
          <h6 className="font-medium text-2xl">Starter</h6>
          <p className="text-lg font-light text-gray-500 dark:text-gray-200">
            Best option for personal use & for your next project.
          </p>
          <p>
            <span className="font-black text-[50px]">$29</span>/month
          </p>
          <ul role="list" className="mb-8 space-y-4 text-left font-bold">
            {[
              "Individual configuration",
              "No setup, or hidden fees",
              "Team size: 1 developer",
              "Premium support: 6 months",
              "Free updates: 6 months",
            ].map((item, idx) => (
              <li key={idx} className="flex items-center space-x-3 ">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className={item.includes(":") ? "font-semibold" : ""}>
                  {item}
                </span>
              </li>
            ))}
          </ul>
          <button className="bg-purple-700 hover:bg-purple-800 text-white font-medium py-2 rounded-lg">
            Get started
          </button>
        </div>

        {/* CARD2 */}
        <div className="flex flex-col text-center px-5 py-10 w-full max-w-md mx-auto md:max-w-sm space-y-5 shadow-md border border-purple-500 rounded-2xl bg-white dark:bg-gray-800 dark:text-white">
          <h6 className="font-medium text-2xl">Company</h6>
          <p className="text-xl font-light text-gray-500 dark:text-gray-200">
            Relevant for multiple users, extended & premium support.
          </p>
          <p>
            <span className="font-black text-[50px]">$99</span>/month
          </p>
          <ul role="list" className="mb-8 space-y-4 text-left font-bold">
            {[
              "Individual configuration",
              "No setup, or hidden fees",
              "Team size: 8 developer",
              "Premium support: 24 months",
              "Free updates: 24 months",
            ].map((item, idx) => (
              <li key={idx} className="flex items-center space-x-3">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className={item.includes(":") ? "font-semibold" : ""}>
                  {item}
                </span>
              </li>
            ))}
          </ul>
          <button className="bg-purple-700 hover:bg-purple-800 text-white font-medium py-2 rounded-lg">
            Get started
          </button>
        </div>

        {/* CARD3 */}
        <div className="flex flex-col text-center px-5 py-10 w-full max-w-md mx-auto md:max-w-sm space-y-5 shadow-md border border-purple-500 rounded-2xl bg-white dark:bg-gray-800 dark:text-white">
          <h6 className="font-medium text-2xl">Enterprise</h6>
          <p className="text-xl font-light text-gray-500 dark:text-gray-200">
            Best for large scale uses and extended redistribution rights.
          </p>
          <p>
            <span className="font-black text-[50px]">$499</span>/month
          </p>
          <ul role="list" className="mb-8 space-y-4 text-left font-bold">
            {[
              "Individual configuration",
              "No setup, or hidden fees",
              "Team size: 100+ developer",
              "Premium support: 36 months",
              "Free updates: 36 months",
            ].map((item, idx) => (
              <li key={idx} className="flex items-center space-x-3">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className={item.includes(":") ? "font-semibold" : ""}>
                  {item}
                </span>
              </li>
            ))}
          </ul>
          <button className="bg-purple-700 hover:bg-purple-800 text-white font-medium py-2 rounded-lg">
            Get started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Offers;
