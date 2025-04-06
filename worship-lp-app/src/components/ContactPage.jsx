import React from "react";

function ContactPage() {
  return (
    <>
    <div className="contact-page bg-white">
      <h1 className="text-black text-4xl text-center font-bold p-10">
        Contact Us
      </h1>
      <p className="text-black text-lg text-center p-4">
        If you have any questions, suggestions, or feedback, feel free to reach
        out to us!
      </p>
      <form className="flex flex-col items-center p-4">
        <input
          type="text"
          placeholder="Your Name"
          className="mb-4 p-2 border border-gray-300 rounded"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          className="mb-4 p-2 border border-gray-300 rounded"
          required
        />
        <textarea
          placeholder="Your Message"
          className="mb-4 p-6 border border-gray-300 rounded"
          required
        ></textarea>
        <button type="submit" className="bg-green-800 text-white p-2 rounded">
          Send Message
        </button>
      </form>
    </div>
    </>
  );
}

export default ContactPage;
