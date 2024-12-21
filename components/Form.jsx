import React, { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({ email: "", subject: "", message: "" }); // Clear form
      } else {
        alert("Failed to send message");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred");
    }
  };

  return (
<div className="py-6 lg:py-4 px-4 mx-auto max-w-screen-sm sm:max-w-md md:max-w-lg border rounded-xl border-[#f4cf8b] backdrop-blur-sm">
  <h2 className="mb-4 text-3xl xl:text-4xl 2xl:text-5xl tracking-wider font-medium text-center text-[#f4cf8b]">
    Contact Us
  </h2>
  <p className="mb-3 font-light text-center text-[#f4cf8b] text-sm sm:text-lg 2xl:text-xl">
    Got a technical issue? Want to send feedback about a beta feature? Need
    details about our Business plan? Let us know.
  </p>
  <form onSubmit={handleSubmit} className="space-y-6">
    <div>
      <label
        htmlFor="email"
        className="block mb-2 text-sm font-medium text-[#f4cf8b]"
      >
        Your email
      </label>
      <input
        type="email"
        id="email"
        value={formData.email}
        onChange={handleChange}
        className="shadow-sm bg-[#000000]/50 border border-[#d8a657] text-[#f4cf8b] text-sm rounded-lg focus:ring-[#f4cf8b] focus:border-[#f4cf8b] block w-full p-2.5 placeholder-[#d8a657]"
        placeholder="Yugsetu@techfest.com"
        required
      />
    </div>
    <div>
      <label
        htmlFor="subject"
        className="block mb-2 text-sm font-medium text-[#f4cf8b]"
      >
        Subject
      </label>
      <input
        type="text"
        id="subject"
        value={formData.subject}
        onChange={handleChange}
        className="block p-3 w-full text-sm text-[#f4cf8b] bg-[#000000]/50 rounded-lg border border-[#d8a657] shadow-sm focus:ring-[#f4cf8b] focus:border-[#f4cf8b] placeholder-[#d8a657]"
        placeholder="Let us know how we can help you"
        required
      />
    </div>
    <div>
      <label
        htmlFor="message"
        className="block mb-2 text-sm font-medium text-[#f4cf8b]"
      >
        Your message
      </label>
      <textarea
        id="message"
        rows="4"
        value={formData.message}
        onChange={handleChange}
        className="block p-2.5 w-full text-sm text-[#f4cf8b] bg-[#000000]/50 rounded-lg shadow-sm border border-[#d8a657] focus:ring-[#f4cf8b] focus:border-[#f4cf8b] placeholder-[#d8a657]"
        placeholder="Leave a comment..."
      ></textarea>
    </div>
    <button
      type="submit"
      className="py-2 px-5 text-sm font-medium text-center text-[#000000] rounded-lg bg-[#f4cf8b] sm:w-fit hover:bg-[#d8a657] hover:text-[#000000] focus:ring-4 focus:outline-none focus:ring-[#d8a657]"
    >
      Send message
    </button>
  </form>
</div>


  );
}
