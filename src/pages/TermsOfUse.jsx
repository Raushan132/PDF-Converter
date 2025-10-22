import React from "react";
import { Helmet } from "react-helmet-async";

const TermsOfUse = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 text-gray-800">
      <Helmet>
        <title>Terms of Use | OnlinePDF.in</title>
        <meta
          name="description"
          content="Read the Terms of Use for OnlinePDF.in, outlining your rights and responsibilities when using our free online PDF tools."
        />
      </Helmet>

      <h1 className="text-4xl font-bold mb-6 text-center text-blue-700">
        Terms of Use
      </h1>

      <p className="mb-6">
        Welcome to <strong>OnlinePDF.in</strong>. By accessing or using our website,
        you agree to comply with and be bound by these Terms of Use. Please read
        them carefully before using our services.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-blue-600">
        1. Acceptance of Terms
      </h2>
      <p className="mb-4">
        By using OnlinePDF.in, you agree to these Terms of Use and our Privacy
        Policy. If you do not agree, you must not access or use our website or
        services.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-blue-600">
        2. Description of Service
      </h2>
      <p className="mb-4">
        OnlinePDF.in provides free online tools for working with PDF documents,
        including merging, splitting, converting, and editing. These tools are
        provided for personal and business use at your own discretion.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-blue-600">
        3. User Responsibilities
      </h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Do not use our services for illegal or harmful purposes.</li>
        <li>
          You are responsible for ensuring that the documents you upload do not
          contain confidential or prohibited material.
        </li>
        <li>
          You must not attempt to gain unauthorized access to any part of the
          website.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-blue-600">
        4. Intellectual Property Rights
      </h2>
      <p className="mb-4">
        All content, logos, and branding on OnlinePDF.in are the property of
        their respective owners. You may not reproduce or distribute any part of
        our website without prior written consent.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-blue-600">
        5. Disclaimer of Warranties
      </h2>
      <p className="mb-4">
        OnlinePDF.in is provided “as is” without any warranties of any kind. We
        do not guarantee that our tools will be error-free or always available.
        Use our service at your own risk.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-blue-600">
        6. Limitation of Liability
      </h2>
      <p className="mb-4">
        OnlinePDF.in shall not be liable for any damages arising from the use of
        or inability to use our website or tools, including but not limited to
        data loss or service interruption.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-blue-600">
        7. Changes to These Terms
      </h2>
      <p className="mb-4">
        We may update these Terms of Use periodically. You are encouraged to
        review this page regularly to stay informed of any updates.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-blue-600">
        8. Contact Us
      </h2>
      <p className="mb-6">
        If you have any questions regarding these Terms of Use, please contact
        us at: <br />
        <strong>Email:</strong> support@onlinepdf.in
      </p>

      <p className="text-center text-gray-500 mt-8">
        Last updated: {new Date().toLocaleDateString()}
      </p>
    </div>
  );
};

export default TermsOfUse;
