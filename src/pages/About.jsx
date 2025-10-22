import React from "react";
import { FaTools, FaLock, FaRocket, FaUserShield } from "react-icons/fa";

const About = () => {
  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen py-10 px-6 md:px-20">
      {/* Header */}
      <section className="text-center mb-10">
        <h1 className="text-4xl font-bold text-blue-600 mb-3">About OnlinePDF.in</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          OnlinePDF.in is your all-in-one solution for managing PDF files online —
          fast, secure, and completely free to use.
        </p>
      </section>

      {/* Our Mission */}
      <section className="mb-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
          Our goal is to make document handling easier for everyone.
          Whether you’re a student, professional, or business owner — 
          OnlinePDF.in provides seamless tools to merge, split, convert, and manage PDFs effortlessly,
          without any software installation or signup.
        </p>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center mb-16">
        <div className="bg-white p-6 shadow rounded-2xl hover:shadow-lg transition">
          <FaTools className="text-blue-500 text-4xl mx-auto mb-3" />
          <h3 className="text-xl font-semibold mb-2">All-in-One Tools</h3>
          <p className="text-sm text-gray-600">
            Merge, split, compress, and convert PDFs — all in one place.
          </p>
        </div>

        <div className="bg-white p-6 shadow rounded-2xl hover:shadow-lg transition">
          <FaLock className="text-green-500 text-4xl mx-auto mb-3" />
          <h3 className="text-xl font-semibold mb-2">100% Secure</h3>
          <p className="text-sm text-gray-600">
            Your files are processed safely and deleted automatically after use.
          </p>
        </div>

        <div className="bg-white p-6 shadow rounded-2xl hover:shadow-lg transition">
          <FaRocket className="text-purple-500 text-4xl mx-auto mb-3" />
          <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
          <p className="text-sm text-gray-600">
            Enjoy blazing-fast conversions and uploads powered by modern servers.
          </p>
        </div>

        <div className="bg-white p-6 shadow rounded-2xl hover:shadow-lg transition">
          <FaUserShield className="text-red-500 text-4xl mx-auto mb-3" />
          <h3 className="text-xl font-semibold mb-2">Privacy Focused</h3>
          <p className="text-sm text-gray-600">
            We respect your privacy — no tracking, no ads, no hidden charges.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
        <p className="text-gray-700 leading-relaxed">
          OnlinePDF.in was born out of the need for a clean, reliable, and ad-free
          PDF utility website for everyday users. We wanted to provide a space
          where users could edit and convert PDFs easily without worrying about
          complex software or privacy issues.
        </p>
      </section>

      {/* Contact */}
      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-3">Get in Touch</h2>
        <p className="text-gray-700 mb-4">
          Have suggestions, feedback, or partnership ideas? We’d love to hear from you!
        </p>
        <a
          href="mailto:support@onlinepdf.in"
          className="inline-block bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default About;
