import React, { useState, useRef } from 'react';
import { PageNoPosition } from '../utils/PageNoPosition';
import PDFPageNo from '../components/PDFPageNo';
import axios from 'axios';
import { baseUrl } from '../utils/BaseUrl';
import UploadingProgress from '../components/UploadingProgress';

const AddPageNo = () => {
  const [pageNoData, setPageNoData] = useState({
    startingPageNo: 1,
    pageNoPosition: PageNoPosition.TOP_LEFT,
    fontSize: 12,
    textFormat: 1,
    customText: '{n} of {p}',
    fromPage: 1,
    toPage: -1,
  });

  const [isUploading, setUploading] = useState(true);
  const [progressValue, setProgressValue] = useState(50);
  const [status, setStatus] = useState(1);
  const [downloadFile, setDownloadFile] = useState(null)
  const [file, setFile] = useState(null);
  const [draggedOver, setDraggedOver] = useState(false);
  const dragCounter = useRef(0);

  const pagePositionKeys = Object.keys(PageNoPosition);

  const handleDowanload = () => {

    if (downloadFile == null) return;
    const fileURL = window.URL.createObjectURL(new Blob([resp.data]));
    const link = document.createElement('a');
    link.href = fileURL;
    link.setAttribute('download', 'generated.pdf'); // Name the file
    document.body.appendChild(link);
    link.click(); // Programmatically click the link to trigger download
    document.body.removeChild(link);
  }

  const handleCancelBtn = () => {
    setDownloadFile(null);
    setFile(null);
    setStatus(0);
    setProgressValue(0)
    setUploading(false)

  }



  const fontSizeOptions = Array.from({ length: 18 }, (_, i) => 10 + i);

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

  const handleDragOver = (e) => {
    e.preventDefault();
  };

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
    setFile(e.target.files[0]);
  };

  const handleUploadBtn = async () => {
    if (file == null) return;
    const formData = new FormData();
    formData.append("file", file);
    formData.append("position", String(pageNoData.pageNoPosition));
    formData.append("startingPage", String(pageNoData.fromPage));
    formData.append("fontSize", String(pageNoData.fontSize));
    formData.append("initialPageNo", String(pageNoData.startingPageNo));
    formData.append("endPageNo", String(pageNoData.toPage));

    setUploading(true);
    setStatus(0);

    try {
      const resp = await axios.post(`${baseUrl}/pdf/addPageNo`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Set the appropriate content type
        },
        responseType: 'blob',
        onUploadProgress: (progressEvent) => {
          setProgressValue(Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          ))
        },

      })

      console.log(resp.data)
      setStatus(1);
      setDownloadFile(resp.data)
      const fileURL = window.URL.createObjectURL(new Blob([resp.data]));
      const link = document.createElement('a');
      link.href = fileURL;
      link.setAttribute('download', 'generated.pdf'); // Name the file
      document.body.appendChild(link);
      link.click(); // Programmatically click the link to trigger download
      document.body.removeChild(link); // Clean up

    } catch (error) {
      console.log("error===================", error);
      setUploading(false)
    }



  }


  return (
    <div className='flex flex-col md:flex-row justify-between min-h-screen'>
      {isUploading && <UploadingProgress progressValue={progressValue} status={status} cancelBtn={handleCancelBtn} downloadBtn={handleDowanload} />}

      {/* Left Section */}
      <section
        className='bg-blue-400 flex w-full md:w-3/4 relative'
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <div className='w-full'>
          <form>
            <div className={`w-full absolute z-10 top-0 left-0 h-full bg-blue-200/70 flex justify-center items-center ${draggedOver ? '' : 'hidden'}`}>
              <div className='border-2 border-dotted border-black px-20 py-20 text-center'>
                Drag and Drop Here
              </div>
            </div>
            <input type='file' id='pdf_file' onChange={onChange} hidden accept='application/pdf' />
          </form>

          <div className='flex flex-col items-center gap-4'>
            <h1>Add Page No to PDF</h1>
            <label htmlFor='pdf_file' className='px-4 py-2 text-2xl text-white bg-red-500 rounded-md cursor-pointer'>
              Add PDF
            </label>
          </div>

          <div className='relative overflow-hidden h-64 px-4'>
            {file && (
              <>

                <PDFPageNo file={file} id={1} pageNoPosition={pageNoData.pageNoPosition} />
              </>
            )}
          </div>
        </div>
      </section>

      {/* Right Section */}
      <section className='flex justify-center font-semibold w-full md:w-1/4 shadow-md shadow-black p-4 bg-white'>
        <div className='w-full'>
          <h1 className='text-center text-3xl py-4'>Page Number Options</h1>
          <hr className='border-black mb-6' />

          <form className='flex flex-col gap-6'>
            <div className='flex gap-2 items-center'>
              <label>Position:</label>
              <select
                className='border-2 border-gray-400'
                onChange={(e) =>
                  setPageNoData(prev => ({ ...prev, pageNoPosition: Number(e.target.value) }))
                }
                value={pageNoData.pageNoPosition}
              >
                {pagePositionKeys.map((position, index) => (
                  <option key={index} value={PageNoPosition[position]}>
                    {position}
                  </option>
                ))}
              </select>
            </div>

            <div className='flex gap-2 items-center'>
              <label>First Number:</label>
              <input
                type='number'
                className='w-16 border-2 border-gray-400 px-2'
                min={1}
                value={pageNoData.startingPageNo}
                onChange={(e) =>
                  setPageNoData(prev => ({ ...prev, startingPageNo: Number(e.target.value) }))
                }
              />
            </div>

            <div className='flex gap-2 items-center'>
              <label>Font Size:</label>
              <select
                className='border-2 border-gray-400'
                value={pageNoData.fontSize}
                onChange={(e) => setPageNoData(prev => ({ ...prev, fontSize: Number(e.target.value) }))}
              >
                {fontSizeOptions.map(size => (
                  <option key={size} value={size}>{size}</option>
                ))}
              </select>
            </div>

            <div className='flex flex-col gap-2'>
              <label>Which pages do you want to number?</label>
              <div className='flex gap-2'>
                <input
                  type='number'
                  className='border-2 border-gray-400 w-16'
                  min={1}
                  value={pageNoData.fromPage}
                  onChange={(e) => setPageNoData(prev => ({ ...prev, fromPage: Number(e.target.value) }))}
                />
                <span>to</span>
                <input
                  type='number'
                  className='border-2 border-gray-400 w-16'
                  min={-1}
                  value={pageNoData.toPage}
                  onChange={(e) => setPageNoData(prev => ({ ...prev, toPage: Number(e.target.value) }))}
                />
              </div>
              <h3 className='text-gray-400'><span className='font-bold'>-1</span> means Last page</h3>
            </div>

            <div className='flex flex-col'>
              <label>Text Format:</label>
              <select
                className='border-2 border-gray-400'
                value={pageNoData.textFormat}
                onChange={(e) => setPageNoData(prev => ({ ...prev, textFormat: Number(e.target.value) }))}
              >
                <option value={1}>Insert Only Page Number</option>
                <option value={2}>Page {`{n}`}</option>
                <option value={3}>Page {`{n}`} of {`{p}`}</option>
                <option value={4}>Custom</option>
              </select>
              {pageNoData.textFormat === 4 && (
                <input
                  type='text'
                  className='border-2 border-gray-400 mt-2 w-full'
                  value={pageNoData.customText}
                  onChange={(e) => setPageNoData(prev => ({ ...prev, customText: e.target.value }))}
                />
              )}
            </div>

            <button type='button' className='px-4 py-2 rounded-lg shadow-sm shadow-black bg-red-500 text-white text-xl w-full mt-4' onClick={handleUploadBtn}>
              Add Page Numbers
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default AddPageNo;
