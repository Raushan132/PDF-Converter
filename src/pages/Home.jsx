import React from 'react'
import { FaEdit } from 'react-icons/fa'
import { MdMerge } from 'react-icons/md'
import { PiArrowsSplitBold } from 'react-icons/pi'
import { SiConvertio } from 'react-icons/si'
import { Link } from 'react-router-dom'


const Home = () => {

    const tools = [
        {
            toolName: 'Merge PDF',
            toolImage: <MdMerge size={36} color='red' />,
            desc: 'Combine PDFs in the order you want with the easiest PDF merger available.',
            link:'/merge'
        },
        {
            toolName: 'Split PDF',
            toolImage: <PiArrowsSplitBold size={36} color='yellow' />,
            desc: 'Separate one page or a whole set for easy conversion into independent PDF files.',
             link:'/split'
        },
        {
            toolName: 'Page No',
            toolImage: <FaEdit size={36} color='orange'/>,
            desc: 'Add Page No to PDF',
             link:'/pageNo'
        },
        {
            toolName: 'Image converter',
            toolImage: <SiConvertio size={36} color='green'/>,
            desc: 'Image to Pdf conveter or set of images conversion into pdf',
             link:'/image-convert'
        },
    ]

    return (
        <>
            <div className='flex flex-col  items-center mt-5 md:m-10'>
                <div className='flex flex-col  items-center w-1/2'>
                    <h1 className='text-3xl font-bold' >Every tool you need to work with PDFs in one place</h1>
                    <h3 className='text-sm mt-2 text-center text-gray-400'>Every tool you need to use PDFs, at your fingertips. All are 100% FREE and easy to use! Merge, split, compress, convert, rotate, unlock and watermark PDFs with just a few clicks.</h3>
                </div>

                <div className='w-full mt-5'>
                    <div className='flex flex-wrap gap-10 justify-center md:justify-start '>
                        {
                            tools.map((tool,index) => {
                                return (<Link key={index} to={tool.link}  className=' px-2 w-56 min-h-40 py-2 shadow-xl'>
                                    <div >
                                        {tool.toolImage}
                                    </div>

                                    <div className='font-bold text-lg'>{tool.toolName}</div>
                                    <div className='text-sm'>{tool.desc}</div>
                                </Link>)
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home