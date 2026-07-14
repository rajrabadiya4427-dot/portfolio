import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      await emailjs.sendForm(
        "raj.rabadiya4427",
        "template_ao5e7gs",
        form.current,
        "tEgCxj6sV-PPZRjgL"
      );


      alert("Message sent successfully!");
      form.current.reset();
    } catch (error) {
      console.log(error);
      alert("Failed to send message.");
    }

    setLoading(false);
  };

  return (
    <section 
      id="contact"
      className="bg-background px-6 relative py-24 z-9999"
    >
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-4 text-center text-4xl font-bold text-white">
          Contact Me
        </h2>

        <p className="mb-12 text-center text-gray-400">
          Have a project in mind? Let's talk.
        </p>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="space-y-6"
        >
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full rounded-xl border border-white/10 bg-white/5 p-4 text-white outline-none"
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full rounded-xl border border-white/10 bg-white/5 p-4 text-white outline-none"
          />
          <select name="project-type" id="" className="w-full rounded-xl border border-white/10 bg-white/5 p-4 text-white outline-none">
            <option value="" className="text-black">Select your project type</option>
            <option value="Website" className="text-black">Website</option>
            <option value="Web App" className="text-black">Application</option>
          </select>

          <textarea
            rows="6"
            name="message"
            placeholder="Your Message or explain your project"
            required
            className="w-full rounded-xl border border-white/10 bg-white/5 p-4 text-white outline-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-purple-600 py-4 font-semibold text-white transition hover:bg-purple-700"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;