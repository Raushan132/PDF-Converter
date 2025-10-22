import React, { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In future you can send this data to your backend
    console.log("Form Submitted:", formData);
    alert("Thank you for contacting us! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen py-10 px-6 md:px-20">
      {/* Header */}
      <section className="text-center mb-10">
        <h1 className="text-4xl font-bold text-blue-600 mb-3">Contact Us</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Have questions, feedback, or need help with our PDF tools?  
          We're here to help — reach out anytime!
        </p>
      </section>

      {/* Contact Info */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-12">
        <div className="bg-white p-6 shadow rounded-2xl hover:shadow-lg transition">
          <FaEnvelope className="text-blue-500 text-3xl mx-auto mb-3" />
          <h3 className="font-semibold text-lg mb-2">Email</h3>
          <a href="mailto:support@onlinepdf.in" className="text-gray-600 hover:text-blue-600">
            support@onlinepdf.in
          </a>
        </div>

        <div className="bg-white p-6 shadow rounded-2xl hover:shadow-lg transition">
          <FaPhoneAlt className="text-green-500 text-3xl mx-auto mb-3" />
          <h3 className="font-semibold text-lg mb-2">Phone</h3>
          <p className="text-gray-600">+91 8340XXXXXX</p>
        </div>

        <div className="bg-white p-6 shadow rounded-2xl hover:shadow-lg transition">
          <FaMapMarkerAlt className="text-red-500 text-3xl mx-auto mb-3" />
          <h3 className="font-semibold text-lg mb-2">Location</h3>
          <p className="text-gray-600">Patna Bihar, India</p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow">
        <h2 className="text-2xl font-semibold text-center mb-6 text-blue-600">Send Us a Message</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea
              name="message"
              required
              rows="5"
              value={formData.message}
              onChange={handleChange}
              placeholder="Type your message here..."
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </section>

      {/* Social Links */}
      <section className="text-center mt-10">
        <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
        <div className="flex justify-center space-x-5 text-xl">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600"><FaFacebookF /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400"><FaTwitter /></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700"><FaLinkedinIn /></a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
