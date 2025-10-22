import React, { useState, useRef } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet-async';
import UploadingProgress from '../components/UploadingProgress';
import PDFPageNo from '../components/PDFPageNo';
import { baseUrl } from '../utils/BaseUrl';
import keywords_1 from '../utils/SEO_Keywords';

const SplitPdf = () => {
  const [file, setFile] = useState(null);
  const [splitPoints, setSplitPoints] = useState('');
  const [isUploading, setUploading] = useState(false);
  const [progressValue, setProgressValue] = useState(0);
  const [status, setStatus] = useState(1);
  const [downloadFiles, setDownloadFiles] = useState([]);
  const [draggedOver, setDraggedOver] = useState(false);
  const dragCounter = useRef(0);
  const fileInputRef = useRef(null);

  const handleDragEnter = (e) => {
    e.preventDefault();
    dragCounter.current += 1;
    setDraggedOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    dragCounter.current -= 1;
    if (dragCounter.current === 0) setDraggedOver(false);
  };

  const handleDragOver = (e) => e.preventDefault();

  const handleDrop = (e) => {
    e.preventDefault();
    dragCounter.current = 0;
    setDraggedOver(false);
    if (e.dataTransfer.files?.length > 0) {
      setFile(e.dataTransfer.files[0]);
      e.dataTransfer.clearData();
    }
  };

  const onChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile?.type === 'application/pdf') {
      setFile(selectedFile);
    } else {
      alert('Please upload a PDF file');
    }
  };

  const handleCancelBtn = () => {
    setFile(null);
    setDownloadFiles([]);
    setUploading(false);
    setProgressValue(0);
    setStatus(0);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleDownloadAll = () => {
    downloadFiles.forEach((fileName) => {
      window.open(`${baseUrl}/pdf/download/${fileName}`, '_blank');
    });
  };

  const handleUploadBtn = async () => {
    if (!file || !splitPoints.trim()) {
      alert('Please upload a file and enter split page numbers.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('splitPoints', splitPoints);

    setUploading(true);
    setStatus(0);

    try {
      const resp = await axios.post(`${baseUrl}/pdf/split`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
        onUploadProgress: (progressEvent) => {
          const progress = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          setProgressValue(progress);
        },
      });

      setStatus(1);
      setUploading(false);
      setDownloadFiles(resp.data.fileNames || []);
      handleDownloadAll();
    } catch (error) {
      console.error('Upload failed:', error);
      setUploading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Split PDF Online - Free & Unlimited | OnlinePDF.in</title>
        <meta
          name="description"
          content="Split PDF pages into multiple smaller files online for free. Unlimited usage, no login or watermark. Fast and secure PDF splitting tool."
        />
        <meta
          name="keywords"
          content={
            keywords_1[0] +
            'split pdf, divide pdf, separate pdf pages, extract pdf pages, online pdf splitter, ilovepdf split pdf, onlinepdf.in'
          }
        />
        <meta property="og:title" content="Split PDF Online - Free PDF Splitter | OnlinePDF.in" />
        <meta
          property="og:description"
          content="Free and unlimited PDF splitting tool. Quickly split PDF pages into multiple files online. No signup, no watermark."
        />
      </Helmet>

      <div className="flex flex-col md:flex-row justify-between min-h-screen">
        {isUploading && (
          <UploadingProgress
            progressValue={progressValue}
            status={status}
            cancelBtn={handleCancelBtn}
            downloadBtn={handleDownloadAll}
          />
        )}

        {/* Left Section: Drop area + Preview */}
        <section
          className="bg-blue-400 flex w-full md:w-3/4 relative"
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <div className="w-full">
            <form>
              <div
                className={`w-full absolute z-10 top-0 left-0 h-full bg-blue-200/70 flex justify-center items-center ${
                  draggedOver ? '' : 'hidden'
                }`}
              >
                <div className="border-2 border-dotted border-black px-20 py-20 text-center">
                  Drag and Drop Here
                </div>
              </div>
              <input
                type="file"
                ref={fileInputRef}
                id="pdf_file"
                onChange={onChange}
                hidden
                accept="application/pdf"
              />
            </form>

            <div className="flex flex-col items-center gap-4 py-4">
              <h1 className="text-white text-3xl">Split PDF</h1>
              <label
                htmlFor="pdf_file"
                className="px-4 py-2 text-2xl text-white bg-red-500 rounded-md cursor-pointer"
              >
                Add PDF
              </label>
            </div>

            <div className="relative overflow-hidden h-64 px-4">
              {file && <PDFPageNo file={file} id={1} pageNoPosition={1} />}
            </div>
          </div>
        </section>

        {/* Right Section: Options */}
        <section className="flex justify-center font-semibold w-full md:w-1/4 shadow-md shadow-black p-4 bg-white">
          <div className="w-full">
            <h1 className="text-center text-3xl py-4">Split Options</h1>
            <hr className="border-black mb-6" />

            <form className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label>Enter page numbers to split after:</label>
                <input
                  type="text"
                  className="border-2 border-gray-400 px-2 py-1 w-full"
                  placeholder="e.g. 2, 5, 8"
                  value={splitPoints}
                  onChange={(e) => setSplitPoints(e.target.value)}
                />
                <small className="text-gray-500">
                  Example: Enter <b>2, 5</b> to create 3 PDFs: (1-2), (3-5), (6-end)
                </small>
              </div>

              <button
                type="button"
                className="px-4 py-2 rounded-lg shadow-sm shadow-black bg-red-500 text-white text-xl w-full mt-4"
                onClick={handleUploadBtn}
              >
                Split PDF
              </button>

              {downloadFiles.length > 0 && (
                <div className="flex flex-col gap-2 mt-4">
                  <h3 className="text-green-600 text-center">Your files are ready!</h3>
                  {downloadFiles.map((fileName, index) => (
                    <button
                      key={index}
                      onClick={() => window.open(`${baseUrl}/pdf/download/${fileName}`, '_blank')}
                      className="border border-blue-400 py-2 rounded-md text-blue-600 hover:bg-blue-100"
                    >
                      Download File {index + 1}
                    </button>
                  ))}
                  <button
                    onClick={handleDownloadAll}
                    className="bg-blue-500 text-white py-2 rounded-md mt-2"
                  >
                    Download All
                  </button>
                </div>
              )}
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default SplitPdf;
