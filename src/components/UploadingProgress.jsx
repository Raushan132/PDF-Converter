import React from 'react'
import ProgressBar from './ProgressBar'

const UploadingProgress = ({ setUploading, progressValue, status, cancelBtn, downloadBtn }) => {



    return (
        <div className='absolute z-50 top-0 w-full h-screen overflow-hidden bg-black/95 flex justify-center items-center'>
            <div className='p-10 w-1/2 h-1/2 bg-white'>
                {status == 0 && <div>
                    {progressValue < 100 && <div>Uploading</div>}
                    {progressValue > 99 && <div>Processing</div>}
                    <ProgressBar percent={progressValue} color="green" />
                </div>

                }

                {
                    status==1 && <div className='flex flex-col justify-center items-center text-center'>
                                    <div>Completed</div>
                                    <div>If Automatic download not working then click the download Button</div>
                                    <div onClick={downloadBtn} className='px-4 py-2 border-2 rounded-xl bg-orange-500 text-white cursor-pointer'>Download</div>

                                </div>
                }

                <div className='flex justify-between '>
                    <div onClick={cancelBtn} className='px-4 py-2 border-2 rounded-xl border-blue-600 cursor-pointer'>Cancel</div>
                   
                </div>
            </div>
        </div>
    )
}

export default UploadingProgress