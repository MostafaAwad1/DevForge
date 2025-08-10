import ContactForm from "./Form";
// import ContactImg from "../assets/images/Contact1.png"
import ContactImg from "../assets/images/Contact3.png";

const Contacts = () => {
  return (
    <section className="flex flex-col md:flex-row mt-6 items-center md:items-start px-4 md:px-0">
      <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
        <img
          src={ContactImg}
          alt="Contact"
          className="max-w-full h-auto rounded-lg "
        />
      </div>
      <div className="w-full md:w-1/2 p-6 md:p-12">
        <ContactForm />
      </div>
    </section>
  );
};

export default Contacts;
