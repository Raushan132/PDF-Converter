import React from 'react'

const ImageConverter = () => {
    return (
        <>
            {/* container */}
            <div className='flex flex-col bg-blue-400 min-h-screen gap-4 p-5'>

                <div className='text-3xl font-bold flex justify-center '>JPG To PDF</div>
                <div className='text-xl flex  justify-center ' >Convert JPG/png to pdf in seconds. Easily adjust orientation and margins</div>
                <div className='flex justify-center '><div className=' text-white text-2xl  cursor-pointer px-4 py-2 bg-red-400 rounded-lg'>Select Images</div></div>
            </div>
        </>
    )
}

export default ImageConverter