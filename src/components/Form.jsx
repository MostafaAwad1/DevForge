import React from "react";
import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit] = useForm("xvgqvkrg");
  if (state.succeeded) {
    return <p>Thanks for Your Massage!</p>;
  }
  return (
    <form
      onSubmit={handleSubmit}
      className=" flex flex-col  space-y-5 text-left"
    >
      <label htmlFor="Name" className="text-[#0000009c] dark:text-purple-200">
        Name
      </label>
      <input
        id="name"
        type="name"
        name="name"
        className="bg-[#f1f2f3] py-3 px-5 rounded-md focus:outline-purple-800  focus:bg-white focus:transition duration-400 dark:text-black"
        placeholder="Your Name"
        required
      />
      <ValidationError prefix="Name" field="email" errors={state.errors} />
      <label htmlFor="email" className="text-[#0000009c] dark:text-purple-200">
        Email Address
      </label>
      <input
        id="email"
        type="email"
        name="email"
        className="bg-[#f1f2f3] py-3 px-5 rounded-md focus:outline-purple-800 focus:bg-white focus:transition duration-400 dark:text-black"
        placeholder="Your Email"
        required
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <label htmlFor="massage" className="text-[#0000009c] dark:text-purple-200">
        Massage
      </label>
      <textarea
        id="message"
        name="message"
        className="bg-[#f1f2f3] min-h-40 px-5 py-3 focus:outline-purple-800  focus:bg-white focus:transition duration-400 rounded-md dark:text-black"
        placeholder="Your Massage"
        required
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button
        type="submit"
        disabled={state.submitting}
        className="bg-purple-900 py-[15px] rounded-md text-center text-white hover:bg-purple-600 transition duration-300 cursor-pointer shadow-2xl  border-[ff825c] font-medium w-50 mt-5 "
      >
        Submit
      </button>
    </form>
  );
}


export default ContactForm;
