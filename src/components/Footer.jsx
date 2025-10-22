import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub, FaEnvelope, FaFilePdf } from "react-icons/fa";

const Footer = () => {
  const [visitorCount, setVisitorcount] = useState(135214);
  const [isFirstTime, setFirstTime] = useState(true);
  const FetchVisitorCounter = async () => {
    try {
      const resp = await axios.get(`${baseUrl}/visit`)
      console.log(resp.data);
      setVisitorcount(prev => prev + resp.data);

    } catch (err) {
      console.log(err)
      
    }
  }

  useEffect(() => {
    FetchVisitorCounter();
  }, [isFirstTime])

  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6 md:px-16 mt-10 border-t border-gray-700">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Logo and About */}
        <div>
          <div className="flex items-center mb-3">
            <FaFilePdf className="text-red-500 text-3xl mr-2" />
            <h2 className="text-xl font-bold text-white">OnlinePDF.in</h2>
          </div>
          <p className="text-sm text-gray-400 leading-6">
            Simplify your document workflow with free, fast, and secure online PDF tools.
            Merge, split, convert, and manage your PDFs with ease — anytime, anywhere.
          </p>
        </div>

        {/* Tools Section */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Tools</h3>
          <ul className="space-y-2">
            <li><Link to="/merge" className="hover:text-white transition">Merge PDF</Link></li>
            <li><Link to="/split" className="hover:text-white transition">Split PDF</Link></li>
            <li><Link to="/image-convert" className="hover:text-white transition">Image to PDF</Link></li>
            <li><Link to="/" className="hover:text-white transition">PDF to Word</Link></li>
            <li><Link to="/pageNo" className="hover:text-white transition">Add Page Numbers</Link></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/about" className="hover:text-white transition">About Us</Link></li>
            <li><Link to="/blog" className="hover:text-white transition">Blog</Link></li>
            <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>
            <li><Link to="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-white transition">Terms of Use</Link></li>
          </ul>
        </div>

        {/* Contact / Social Section */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Connect With Us</h3>
          <div className="flex space-x-4 mb-4">
            <a href="mailto:support@onlinepdf.in" className="hover:text-red-500 transition"><FaEnvelope size={20} /></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition"><FaFacebook size={20} /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition"><FaTwitter size={20} /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition"><FaLinkedin size={20} /></a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition"><FaGithub size={20} /></a>
          </div>
          <p className="text-sm text-gray-400">
            📧 support@onlinepdf.in
            <br />
            🌐 onlinepdf.in
          </p>
        </div>
      </div>

      <div>
        <span className=' text-[12px]'>Total Visitor counter-{visitorCount}</span>
      </div>
      {/* Copyright */}
      <div className="border-t border-gray-700  pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} <span className="text-white font-medium">OnlinePDF.in</span> — All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
