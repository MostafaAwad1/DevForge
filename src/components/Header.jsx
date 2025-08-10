import { useState } from "react";

const Header = ({ dark, setDark }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const navItems = [
    "Home",
    "Company",
    "Marketplace",
    "Features",
    "Team",
    "Contact",
  ];

  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <header className="flex justify-between items-center px-6 py-4 shadow-md dark:bg-gray-800 bg-white relative z-50">
      {/* Logo */}
      <div className="font-bold text-2xl text-gray-700 dark:text-white">
        <a href="/" className="hover:text-[#6c29d9] transition-colors">
          DevForge
        </a>
      </div>

      {/* Desktop nav */}
      <nav className="hidden md:flex space-x-6 font-semibold items-center">
        {navItems.map((item) => (
          <a
            key={item}
            href="#"
            className={`hover:text-[#6c29d9] ${
              item === "Home"
                ? "text-[#6c29d9]"
                : "text-gray-700 dark:text-white"
            }`}
          >
            {item}
          </a>
        ))}
        <button
          onClick={() => setDark((prev) => !prev)}
          className="ml-4 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-black dark:text-white border border-blue-600 rounded-full"
        >
          {dark ? "☀️" : "🌙"}
        </button>
      </nav>

      {/* Hamburger - Mobile only */}
      <button
        onClick={() => setIsDrawerOpen(true)}
        className="md:hidden text-2xl dark:text-white"
        aria-label="Open menu"
      >
        ☰
      </button>

      {/* Overlay */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0  z-40"
          onClick={closeDrawer}
        ></div>
      )}

      {/* Drawer Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-900 z-50 transform transition-transform duration-300 ${
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b dark:border-gray-700">
          <span className="text-xl font-bold text-gray-700 dark:text-white">
            DevForge
          </span>
          <button onClick={closeDrawer} className="text-2xl dark:text-white">
            ✖️
          </button>
        </div>
        <nav className="flex flex-col px-6 py-4 space-y-4 font-semibold">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="hover:text-[#6c29d9] text-gray-700 dark:text-white"
              onClick={closeDrawer}
            >
              {item}
            </a>
          ))}
          <button
            onClick={() => {
              setDark((prev) => !prev);
              closeDrawer();
            }}
            className="mt-4 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-black dark:text-white border border-blue-600 rounded-full"
          >
            {dark ? "☀️" : "🌙"}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
