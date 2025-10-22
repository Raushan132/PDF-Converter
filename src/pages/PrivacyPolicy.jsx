import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen py-10 px-6 md:px-20">
      <section className="text-center mb-10">
        <h1 className="text-4xl font-bold text-blue-600 mb-3">Privacy Policy</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          This Privacy Policy describes how OnlinePDF.in collects, uses, and protects your information when you use our website and tools.
        </p>
      </section>

      <div className="max-w-4xl mx-auto space-y-8 leading-relaxed text-justify">
        <section>
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">1. Information We Collect</h2>
          <p>
            We do not require users to create an account or provide personal data to use our tools. 
            However, we may collect limited information such as:
          </p>
          <ul className="list-disc ml-6 mt-2 text-gray-700">
            <li>Anonymous usage data for analytics (e.g., page visits, browser type).</li>
            <li>Files temporarily uploaded for processing (not stored permanently).</li>
            <li>Feedback or contact form submissions (name, email, message).</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">2. How We Use Your Information</h2>
          <p>
            The information we collect is used solely to:
          </p>
          <ul className="list-disc ml-6 mt-2 text-gray-700">
            <li>Provide and improve our services.</li>
            <li>Ensure smooth functioning of tools and resolve errors.</li>
            <li>Respond to customer inquiries or support requests.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">3. File Security and Storage</h2>
          <p>
            Your uploaded files are processed securely and deleted automatically after a short time.
            We do <strong>not store, view, or share</strong> your files once processing is complete.
            All file handling occurs on secure servers to ensure your privacy.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">4. Cookies and Analytics</h2>
          <p>
            We may use cookies or analytics tools like Google Analytics to understand how users interact with our website.
            These cookies help us enhance performance and user experience.
            You can disable cookies through your browser settings at any time.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">5. Third-Party Services</h2>
          <p>
            Our website may contain links to third-party websites. 
            We are not responsible for the content or privacy practices of those external sites.
            Please review their respective policies before sharing any personal information.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">6. Data Protection</h2>
          <p>
            We implement appropriate technical and organizational measures to safeguard your information against unauthorized access, disclosure, or destruction.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">7. Children’s Privacy</h2>
          <p>
            OnlinePDF.in is not directed toward children under 13. 
            We do not knowingly collect personal information from children. 
            If we learn that we have inadvertently done so, we will delete it promptly.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">8. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy periodically. 
            The updated version will be posted on this page with a revised date.
            Continued use of our website after changes means you accept the updated terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">9. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy or our practices, please contact us:
          </p>
          <p className="mt-2">
            <strong>Email:</strong> <a href="mailto:support@onlinepdf.in" className="text-blue-600 hover:underline">support@onlinepdf.in</a>
          </p>
          <p><strong>Website:</strong> <a href="https://www.onlinepdf.in" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">www.onlinepdf.in</a></p>
        </section>

        <p className="text-center text-gray-600 mt-10">
          <em>Last updated: {new Date().toLocaleDateString()}</em>
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
