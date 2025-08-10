const LinksSection = () => {
  return (
    <section
      className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6  md:gap-x-0 text-center my-20 px-6 md:px-0"
      aria-label="Footer navigation"
    >
      {/* COMPANY */}
      <div className="flex flex-col space-y-4">
        <h6 className="font-semibold text-[#7e3af2] dark:text-purple-400">COMPANY</h6>
        <a href="#" className="text-gray-500 hover:underline hover:text-gray-700 dark:text-purple-100 dark:hover:text-purple-300">About</a>
        <a href="#" className="text-gray-500 hover:underline hover:text-gray-700 dark:text-purple-100 dark:hover:text-purple-300">Careers</a>
        <a href="#" className="text-gray-500 hover:underline hover:text-gray-700 dark:text-purple-100 dark:hover:text-purple-300">Brand Center</a>
        <a href="#" className="text-gray-500 hover:underline hover:text-gray-700 dark:text-purple-100 dark:hover:text-purple-300">Blog</a>
      </div>

      {/* HELP CENTER */}
      <div className="flex flex-col space-y-4">
        <h6 className="font-semibold text-[#7e3af2] dark:text-purple-400">HELP CENTER</h6>
        <a href="#" className="text-gray-500 hover:underline hover:text-gray-700 dark:text-purple-100 dark:hover:text-purple-300">Discord Server</a>
        <a href="#" className="text-gray-500 hover:underline hover:text-gray-700 dark:text-purple-100 dark:hover:text-purple-300">Twitter</a>
        <a href="#" className="text-gray-500 hover:underline hover:text-gray-700 dark:text-purple-100 dark:hover:text-purple-300">Facebook</a>
        <a href="#" className="text-gray-500 hover:underline hover:text-gray-700 dark:text-purple-100 dark:hover:text-purple-300">Contact Us</a>
      </div>

      {/* LEGAL */}
      <div className="flex flex-col space-y-4">
        <h6 className="font-semibold text-[#7e3af2] dark:text-purple-400">LEGAL</h6>
        <a href="#" className="text-gray-500 hover:underline hover:text-gray-700 dark:text-purple-100 dark:hover:text-purple-300">Privacy Policy</a>
        <a href="#" className="text-gray-500 hover:underline hover:text-gray-700 dark:text-purple-100 dark:hover:text-purple-300">Licensing</a>
        <a href="#" className="text-gray-500 hover:underline hover:text-gray-700 dark:text-purple-100 dark:hover:text-purple-300">Terms</a>
      </div>

      {/* DOWNLOAD */}
      <div className="flex flex-col space-y-4">
        <h6 className="font-semibold text-[#7e3af2] dark:text-purple-400">DOWNLOAD</h6>
        <a href="#" className="text-gray-500 hover:underline hover:text-gray-700 dark:text-purple-100 dark:hover:text-purple-300">iOS</a>
        <a href="#" className="text-gray-500 hover:underline hover:text-gray-700 dark:text-purple-100 dark:hover:text-purple-300">Android</a>
        <a href="#" className="text-gray-500 hover:underline hover:text-gray-700 dark:text-purple-100 dark:hover:text-purple-300">Windows</a>
        <a href="#" className="text-gray-500 hover:underline hover:text-gray-700 dark:text-purple-100 dark:hover:text-purple-300">MacOS</a>
      </div>
    </section>
  );
};

export default LinksSection;
