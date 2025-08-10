import { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Partners from "./components/Partners";
import MainSection from "./components/MainSection";
import TrustedSection from "./components/TrustedSection";
import Quote from "./components/Quote";
import Offers from "./components/Offers";
import Trial from "./components/Trial";
import LinksSection from "./components/LinksSection";
import Footer from "./components/Footer";
import Contacts from "./components/Contacts";
import MiddelSection from "./components/MiddelSection";
function App() {
  const [dark, setDark] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme === "dark";
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const html = document.documentElement;
    if (dark) {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);
  return (
    <div className="font-poppins bg-white dark:bg-gray-800 text-black dark:text-white min-h-screen ">
      <Header dark={dark} setDark={setDark} />
      <Hero />
      <Partners />
      {/* <MainSection /> */}
      <MiddelSection />
      <TrustedSection />
      <Quote />
      <Offers />
      <Trial />
      <Contacts />
      <LinksSection />
      <Footer />
    </div>
  );
}

export default App;
