import React, { useRef, useState } from 'react'
import { closestCorners, DndContext, PointerSensor, TouchSensor, useSensor, useSensors } from '@dnd-kit/core';
import ImgList from '../components/ImgList';
import { arrayMove, horizontalListSortingStrategy, rectSortingStrategy, SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { PageNoPostion } from '../utils/PageNoPosition';
import axios, { Axios } from 'axios';
import { baseUrl } from '../utils/BaseUrl';

const ImageConverter = () => {

    const fileInput = useRef(null)
    const [files, setFiles] = useState([]);
    const [isAddPageNo, setIsAddPageNo] = useState(false);
    const [pageNoData, setPageNoData] = useState({ startingPageNo: 1, pageNoPosition: PageNoPostion.TOP_LEFT })
    const [dragActive, setDragActive] = useState(false);
    const [dropableStyle, setDropableStyle] = useState('-z-10')
    

    const pagePosition = Object.keys(PageNoPostion);

    console.log(pageNoData)

    const onChange = async e => {
        const newFiles = Array.from(e.target.files).map((file, index) => ({
            id: index + files.length,
            file,
        }));
        setFiles(prevFiles => [...prevFiles, ...newFiles]);
    }


    const handleDragEnd = event => {
        const { active, over } = event;
        console.log(active)
        console.log(over)
        if (active.id === over.id) {
            return;
        }

        setFiles(() => {

            const originalPosition = getPosition(active.id);
            const LatestPosition = getPosition(over.id);
            return arrayMove(files, originalPosition, LatestPosition);

        })

    }

    const removeImageBtn = (id) => {
        setFiles(prev => prev.filter(file => file.id !== id));
    }

    const getPosition = (id) => {
        return files.findIndex((obj) => obj.id === id)
    }

    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(TouchSensor)
    )


    // handle Drag and drop from drives
    const handleDragEnterOutSideDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (dropableStyle == '-z-10') {
            setDropableStyle('z-10')
        }

    }
    const handleDrag = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (event.type === "dragleave") {
            setDragActive(false);
        }
    }

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);

        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            const newFiles = Array.from(e.dataTransfer.files).map((file, index) => ({
                id: index + files.length,
                file,
            }));
            setFiles(prevFiles => [...prevFiles, ...newFiles]);
        }
        if (dropableStyle == 'z-10') {
            setDropableStyle('-z-10')
        }
    }

    const handleUploadBtn = async () => {
        const formData = new FormData()
        files.forEach(file => formData.append("imagesFile", file.file))
        formData.append("startPageNumber",1);
        formData.append("location","BOTTOM_LEFT_SIDE")


        try {
            const resp = await axios.post(`${baseUrl}/imgtopdf/generatepdf`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data', // Set the appropriate content type
                },
            })

            const fileURL = window.URL.createObjectURL(new Blob([resp.data]));
            const link = document.createElement('a');
            link.href = fileURL;
            link.setAttribute('download', 'generated.pdf'); // Name the file
            document.body.appendChild(link);
            link.click(); // Programmatically click the link to trigger download
            document.body.removeChild(link); // Clean up

        } catch (error) {
            console.log("error===================", error);
        }


    }


    return (
        <>
            {/* container */}
            <div className='flex flex-col bg-blue-400 min-h-screen gap-4 p-5' onDragEnter={handleDragEnterOutSideDrop}>

                <div className='text-3xl font-bold flex justify-center '>JPG To PDF</div>
                <div className='text-xl flex  justify-center ' >Convert JPG/png to pdf in seconds. Easily adjust orientation and margins</div>
                <div className='flex justify-center gap-5 '>
                    <div onClick={() => fileInput.current.click()} className=' text-white text-2xl  cursor-pointer px-4 py-2 bg-red-400 rounded-lg'>Add Images</div>
                    <input
                        type='file'
                        name='image'
                        ref={fileInput}
                        onChange={onChange}
                        style={{ display: 'none' }}
                        multiple={true}
                        accept='image/*'
                    />
                    {/* Send images to backend  */}
                    {
                        files.length > 0 && <div className=' text-white text-2xl font-bold  cursor-pointer px-4 py-2 bg-green-400 rounded-lg ' onClick={handleUploadBtn} > Upload</div>
                    }


                </div>

                {/* add page no. */}
                {files.length > 0 && <div className='flex flex-col justify-center items-center gap-2'>
                    <div><input type='checkbox' defaultChecked={isAddPageNo} onChange={() => setIsAddPageNo(!isAddPageNo)} /> Add Page no </div>

                    {isAddPageNo && <>
                        <div className='flex w-1/4 justify-between'>
                            <label htmlFor=' startingPageNo'>Starting Page No:</label>
                            <input type="number" placeholder='Starting page No' onChange={(e) => setPageNoData(prev => ({ ...prev, startingPageNo: e.target.value }))} value={pageNoData.startingPageNo} />
                        </div>
                        <div className='flex w-1/4 justify-between'>
                            <label htmlFor='Page_No_Position'>Page No Position:</label>
                            <select onChange={(e) => setPageNoData(prev => ({ ...prev, pageNoPosition: PageNoPostion[e.target.value] }))} >
                                {
                                    pagePosition.map((position, index) => <option key={index} value={position}>
                                        {position}
                                    </option>)
                                }
                            </select>
                        </div>
                    </>
                    }
                </div>}

                {/* preview the images and order them */}
                {files.length > 0 && <div className='flex justify-center items-center '>

                    <DndContext sensors={sensors} onDragEnd={handleDragEnd} collisionDetection={closestCorners} >
                        <SortableContext items={files} strategy={rectSortingStrategy}>
                            <div className='bg-gray-300 px-5 py-2 grid justify-center items-center  grid-cols-5 gap-3'>
                                {
                                    files.map((file, index) => {

                                        return <div key={file.id} className="">
                                            <div className=' h-5 flex justify-between px-2  rounded-full translate-y-6'>
                                                <div className='w-5 h-5 flex justify-center items-center bg-blue-200 rounded-full'>{index + 1}</div>
                                                <div className='text-red-500 font-bold cursor-pointer' onClick={() => removeImageBtn(file.id)}>X</div>
                                            </div>
                                            <ImgList file={file} />
                                        </div>
                                    })
                                }
                            </div>
                        </SortableContext>
                    </DndContext>

                </div>
                }

                {/* drag and drop event */}
                <div
                    onDragEnter={handleDrag}
                    onDragLeave={handleDrag}
                    onDragOver={handleDrag}
                    onDrop={handleDrop}
                    className={`w-full h-screen left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                         bg-[#9d8be3f5] absolute ${dropableStyle} flex justify-center items-center
                         font-bold text-2xl
                         p-20
                         `}
                >
                    <div className='border-2 border-gray-600  border-dashed w-full h-full flex justify-center items-center'>

                        Drag and Drop Here
                    </div>
                </div>


            </div>
        </>
    )
}

export default ImageConverter