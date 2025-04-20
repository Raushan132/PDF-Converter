import React, { useState, useRef } from 'react'
import { PageNoPosition } from '../utils/PageNoPosition';

const AddPageNo = () => {

  const [pageNoData, setPageNoData] = useState({ startingPageNo: 1, pageNoPosition: PageNoPosition.TOP_LEFT });
  const [file, setFile] = useState(null);
  const [draggedOver, setDraggedOver] = useState(false);
  const dragCounter = useRef(0);

  const pagePosition = Object.keys(PageNoPosition);

  const range = (start, stop, step) =>
    Array.from({ length: Math.ceil((stop - start) / step) }, (_, i) => start + i * step);
  const fontSizeOptions = range(10, 28, 1);

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dragCounter.current += 1;
    setDraggedOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dragCounter.current -= 1;
    if (dragCounter.current === 0) {
      setDraggedOver(false);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dragCounter.current = 0;
    setDraggedOver(false);

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      setFile(e.dataTransfer.files[0]);
      e.dataTransfer.clearData();
    }
  };

  return (
    <div className='flex flex-col md:flex-row justify-between min-h-screen'>

      {/* Left Section - Drag & Drop */}
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
            <input type='file' id='pdf_file' hidden accept='application/pdf' />
          </form>
        </div>
      </section>

      {/* Right Section - Options */}
      <section className='flex justify-center font-semibold w-full md:w-1/4 shadow-md shadow-black p-4 bg-white'>

        <div className='w-full'>
          <div className='flex flex-col gap-2 py-4'>
            <h1 className='flex justify-center text-3xl'>Page Number Options</h1>
            <hr className='w-full border-black' />
          </div>

          <form className='flex flex-col gap-6'>
            <div className='flex gap-2 items-center'>
              <label>Position:</label>
              <select
                className='border-2 border-gray-400'
                onChange={(e) => setPageNoData(prev => ({ ...prev, pageNoPosition: PageNoPosition[e.target.value] }))}
              >
                {pagePosition.map((position, index) => (
                  <option key={index} value={position}>{position}</option>
                ))}
              </select>
            </div>

            <div className='flex gap-2 items-center'>
              <label>Margin:</label>
              <select className='border-2 border-gray-400'>
                <option>small</option>
                <option>medium</option>
                <option>large</option>
              </select>
            </div>

            <div className='flex gap-2 items-center'>
              <label>First Number:</label>
              <input type='number' value={1} className='w-16 border-2 border-gray-400 px-2' min={1} />
            </div>

            <div className='flex gap-2 items-center'>
              <label>Font Size:</label>
              <select className='border-2 border-gray-400'>
                {fontSizeOptions.map((size, index) => (
                  <option key={index} value={size}>{size}</option>
                ))}
              </select>
            </div>

            <div>
              <h1>Which pages do you want to number?</h1>
              <div className='flex gap-2 mt-2'>
                <div className='flex gap-2 items-center'>
                  <label>From Page:</label>
                  <input type='number' className='border-2 border-gray-400 w-16' min={0} />
                </div>
                <div className='flex gap-2 items-center'>
                  <label>To:</label>
                  <input type='number' className='border-2 border-gray-400 w-16' min={-1} />
                </div>
              </div>
            </div>

            <div>
              <label>Text Format:</label>
              <select className='border-2 border-gray-400 text-gray-400'>
                <option value={1}>Insert Only Page Number</option>
                <option value={2}>Page {`{n}`}</option>
                <option value={3}>Page {`{n}`} of {`{p}`}</option>
                <option value={4}>Custom</option>
              </select>
              <input
                type='text'
                className='border-2 border-gray-400 text-gray-400 mt-2 w-full'
                value={`{n} of {p}`}
              />
            </div>

            <button className='px-4 py-2 rounded-lg cursor-pointer shadow-sm shadow-black bg-red-500 text-white text-xl w-full mt-4'>
              Add Page Numbers
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default AddPageNo;
