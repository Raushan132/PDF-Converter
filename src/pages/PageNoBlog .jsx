import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  FaListOl,
  FaLock,
  FaCheckCircle,
  FaBolt,
  FaMobileAlt,
  FaFilePdf,
} from "react-icons/fa";

const PageNoBlog = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
      {/* ✅ SEO Meta Tags */}
      <Helmet>
        <title>Add Page Numbers to PDF Online Free | Page No Generator | OnlinePDF</title>
        <meta
          name="description"
          content="Add page numbers to PDF files online for free using OnlinePDF. Fast, secure, and easy-to-use page number generator with no watermark or signup required."
        />
        <meta
          name="keywords"
          content="add page numbers to pdf, pdf page numbering, page no generator, number pdf pages online, pdf page counter, ilovepdf alternative"
        />
        <link rel="canonical" href="https://onlinepdf.in/blog/pageNo" />
        <meta property="og:title" content="Add Page Numbers to PDF | OnlinePDF" />
        <meta
          property="og:description"
          content="Easily add page numbers to your PDF files online. 100% free, secure, and watermark-free page numbering tool."
        />
        <meta property="og:url" content="https://onlinepdf.in/blog/pageNo" />
        <meta property="og:type" content="article" />

        {/* ✅ Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline:
              "How to Add Page Numbers to PDF Files Online for Free — No Watermark",
            author: { "@type": "Organization", name: "OnlinePDF" },
            publisher: {
              "@type": "Organization",
              name: "OnlinePDF",
              logo: {
                "@type": "ImageObject",
                url: "https://onlinepdf.in/logo.png",
              },
            },
            url: "https://onlinepdf.in/blog/pageNo",
            datePublished: "2025-10-19",
            dateModified: "2025-10-19",
            image: "https://onlinepdf.in/assets/logo.png",
            description:
              "Step-by-step guide to add page numbers to PDF files online for free using OnlinePDF — secure, fast, and no watermark.",
          })}
        </script>
      </Helmet>

      {/* ✅ Blog Header */}
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
          How to Add Page Numbers to PDF Files Online for Free — No Watermark
        </h1>
        <p className="text-sm text-gray-500">
          Published on October 19, 2025 · 4 min read
        </p>
      </header>

      {/* ✅ Blog Content */}
      <article className="space-y-8 leading-relaxed text-lg">
        <p>
          Need to number your PDF pages for better organization? Whether it’s a
          business report, college project, or eBook, adding page numbers makes
          your file more readable. With <strong>OnlinePDF’s Page Number
          Generator</strong>, you can add page numbers to PDF files online in
          just a few seconds — completely free and without watermarks.
        </p>

        {/* Steps */}
        <section>
          <h2 className="text-2xl font-semibold mb-3 flex items-center gap-2">
            <FaBolt className="text-yellow-500" /> Step-by-Step: Add Page Numbers to PDF
          </h2>
          <ol className="list-decimal list-inside space-y-2 ml-4">
            <li>
              Open the{" "}
              <Link
                to="/pageNo"
                className="text-blue-600 hover:underline font-medium"
              >
                Page Number Generator Tool
              </Link>{" "}
              on OnlinePDF.
            </li>
            <li>Upload your PDF file.</li>
            <li>
              Choose where to place the page number (top-left, bottom-center, etc.).
            </li>
            <li>Select font size and style if available.</li>
            <li>
              Click <strong>“Add Page Numbers”</strong> and download your new PDF instantly.
            </li>
          </ol>
        </section>

        {/* Safety Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-3 flex items-center gap-2">
            <FaLock className="text-blue-600" /> Is It Safe to Use the Page Number Tool?
          </h2>
          <p>
            Yes! Your PDFs are processed securely in the cloud and deleted
            automatically after completion. OnlinePDF uses secure HTTPS
            connections for 100% privacy.
          </p>
        </section>

        {/* Benefits Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-3 flex items-center gap-2">
            <FaCheckCircle className="text-green-500" /> Why Choose OnlinePDF’s Page Number Generator?
          </h2>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Completely free and watermark-free.</li>
            <li>Fast and secure online processing.</li>
            <li>Simple and easy-to-use interface.</li>
            <li>No signup or installation needed.</li>
          </ul>
        </section>

        {/* Mobile Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-3 flex items-center gap-2">
            <FaMobileAlt className="text-purple-600" /> Works on Any Device
          </h2>
          <p>
            The Page Number Generator works smoothly on mobile, desktop, or
            tablet devices. You can add page numbers to PDFs anytime, anywhere.
          </p>
        </section>

        {/* Related Tools */}
        <section>
          <h2 className="text-2xl font-semibold mb-3 flex items-center gap-2">
            <FaFilePdf className="text-red-600" /> Related PDF Tools
          </h2>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>
              <Link
                to="/merge"
                className="text-blue-600 hover:underline font-medium"
              >
                Merge PDF Files
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="text-blue-600 hover:underline font-medium"
              >
                Split PDF Pages
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="text-blue-600 hover:underline font-medium"
              >
                Convert PDF to Word
              </Link>
            </li>
          </ul>
        </section>

        <p className="mt-10 text-gray-700">
          <strong>OnlinePDF</strong> makes it simple to add page numbers to PDFs
          securely and instantly. Try it today — it’s free, private, and lightning-fast.
        </p>
      </article>
    </div>
  );
};

export default PageNoBlog;
