import React from 'react'
import { Link } from "react-router-dom";
import { FaFilePdf, FaArrowRight } from "react-icons/fa";

const Blog = () => {
    const blogsData = [
    {
      title: "Merge PDF Files Online Easily",
      description:
        "Learn how to merge multiple PDF files quickly and securely with OnlinePDF.in. Our step-by-step guide and free tool let you combine PDFs without losing quality.",
      link: "/blog/merge-pdf",
    },
    {
      title: "Add Page Numbers to Your PDF",
      description:
        "Add custom page numbers to your PDF files using OnlinePDF.in's free and fast tool. Perfect for professional or academic documents.",
      link: "/blog/pageNo",
    },
  ];
    return (
        <>
            <div className='flex justify-center flex-col items-center m-5'>
                {/* Headline */}
                <div className='flex flex-col items-center uppercase underline gap-4' >

                    <h1 className='text-3xl '>Blogs</h1>
                    <h2 className='text-2xl'>Online Pdf</h2>
                </div>

                <div className=' w-full flex justify-center '>
                    <div className='flex flex-col justify-start items-start gap-4'>
                        <div>
                            <div className='text-xl underline'>Latest Blogs</div>
                        </div>
                        <div className='flex flex-col sm:flex-row gap-5 justify-center flex-wrap'>
                            {blogsData.map((data)=>{

                                return <div className="bg-white shadow-md w-72 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-col justify-between">
                                {/* Card Content */}
                                <div className="p-6">
                                    <div className="flex items-center gap-2 mb-3 text-blue-600">
                                        <FaFilePdf className="text-2xl" />
                                        <h2 className="text-2xl font-semibold">{data.title}</h2>
                                    </div>

                                    <p className="text-gray-700 mb-4 leading-relaxed">
                                        {data.description.length > 150
                                            ? data.description.slice(0, 150) + "..."
                                            : data.description}
                                    </p>
                                </div>

                                {/* Button / Link */}
                                <div className="px-6 pb-5">
                                    <Link
                                        to={data.link}
                                        className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-800 transition-all"
                                        >
                                        Read More <FaArrowRight />
                                    </Link>
                                </div>
                            </div>
                                    })}
                           
                        </div>
                    </div>

                </div>
                <div className=' w-full flex justify-center '>
                    <div className='flex flex-col justify-start items-start gap-4'>
                        <div>
                            <div className='text-xl underline'>Other Links</div>
                        </div>
                        <div className='flex flex-col sm:flex-row gap-5 justify-center flex-wrap '>
                            <div className='w-72 h-72 bg-blue-400'>
                            </div>
                            <div className='w-72 h-72 bg-blue-400'>
                            </div>
                            <div className='w-72 h-72 bg-blue-400'>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Blog