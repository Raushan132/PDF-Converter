import React, { useRef, useState } from 'react'

const ImageConverter = () => {

    const fileInput = useRef(null)
    const [files, setFile] = useState([]);

    const onChange = async e => {
        if (e.target.files && e.target.files.length > 0) {
          setFile(e.target.files)
        }
      }
      console.log(files);

    return (
        <>
            {/* container */}
            <div className='flex flex-col bg-blue-400 min-h-screen gap-4 p-5'>

                <div className='text-3xl font-bold flex justify-center '>JPG To PDF</div>
                <div className='text-xl flex  justify-center ' >Convert JPG/png to pdf in seconds. Easily adjust orientation and margins</div>
                <div className='flex justify-center '>
                    <div onClick={() => fileInput.current.click()} className=' text-white text-2xl  cursor-pointer px-4 py-2 bg-red-400 rounded-lg'>Select Images</div>
                    <input
                        type='file'
                        name='image'
                        ref={fileInput}
                        onChange={onChange}
                        style={{ display: 'none' }}
                        multiple={true}
                        accept='image/*'
                    />
                </div>

            </div>
        </>
    )
}

export default ImageConverter