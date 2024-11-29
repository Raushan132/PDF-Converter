import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import React, { useEffect } from 'react'

const ImgList = ({ file }) => {

   const {
      attributes,
      listeners,
      setNodeRef,
      transform,
      transition
    } = useSortable({ id:file.id})

    const style ={
      transform: CSS.Transform.toString
      (transform),
      transition,
    }

    const fileUrl = URL.createObjectURL(file.file);

    useEffect(() => {
        // Cleanup the URL when the component unmounts
        return () => URL.revokeObjectURL(fileUrl);
    }, [fileUrl]);

   return (


      <div style={style} ref={setNodeRef} {...attributes} {...listeners} className='bg-blue-300 text-center'>
         <div style={{touchAction:"none"}} className='w-44 h-48'>
             <img src={fileUrl} alt="icon" style={{width:'100%',height:'100%'}} />
         </div>

      </div>

   )
}

export default ImgList