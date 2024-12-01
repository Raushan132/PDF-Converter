import React, { useRef, useState } from 'react'
import { closestCorners, DndContext, PointerSensor, TouchSensor, useSensor, useSensors } from '@dnd-kit/core';
import ImgList from '../components/ImgList';
import { arrayMove, horizontalListSortingStrategy, rectSortingStrategy, SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { PageNoPostion } from '../utils/PageNoPosition';

const ImageConverter = () => {

    const fileInput = useRef(null)
    const [files, setFiles] = useState([]);
    const [isAddPageNo, setIsAddPageNo] = useState(false);
    const [pageNoData, setPageNoData] = useState({ startingPageNo: 1, pageNoPosition: PageNoPostion.TOP_LEFT })
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

    return (
        <>
            {/* container */}
            <div className='flex flex-col bg-blue-400 min-h-screen gap-4 p-5'>

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
                        files.length > 0 && <div className=' text-white text-2xl font-bold  cursor-pointer px-4 py-2 bg-green-400 rounded-lg '> Upload</div>
                    }


                </div>

                {/* add page no. */}
                { files.length > 0 && <div className='flex flex-col justify-center items-center gap-2'>
                    <div><input type='checkbox' defaultChecked={isAddPageNo} onChange={() => setIsAddPageNo(!isAddPageNo)} /> Add Page no </div>

                    { isAddPageNo && <>
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



            </div>
        </>
    )
}

export default ImageConverter