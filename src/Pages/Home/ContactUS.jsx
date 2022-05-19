import React from "react";
import bg from "../../assets/images/appointment.png";

const ContactUS = () => {
  return (
    <section className="p-16" style={{ background: `url(${bg})` }}>
      <div className="text-center mb-5">
        <h2 className="text-xl text-primary">Contact Us</h2>
        <h3 className="text-3xl text-white">Stay Connected With Us</h3>
      </div>
      <div className="grid justify-center mt-4 gap-3 mb-3">
        <input
          type="text"
          placeholder="Email Address"
          className="input input-bordered input-sm w-80 max-w-md"
        />
        <input
          type="text"
          placeholder="Subject"
          className="input input-bordered input-sm w-full max-w-md"
        />

        <textarea
          type="text-area"
          placeholder="Your Message"
          className="input input-bordered input-lg w-full max-w-md h-44"
        />
        <button className="btn btn-primary uppercase text-white font-semibold bg-gradient-to-r from-secondary to-primary w-40 mx-auto">
          Submit
        </button>
      </div>
    </section>
  );
};

export default ContactUS;
