import { useEffect, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

// Set the worker source
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.8.69/pdf.worker.min.mjs`;


const PdfList = ({ file,id }) => {

    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition
      } = useSortable({ id:id})
  
      const style ={
        transform: CSS.Transform.toString
        (transform),
        transition,
      }
  

  const [fileUrl, setFileUrl] = useState(null);
  const [numPages,setNumPages] = useState(1)

  useEffect(() => {
    if (file && file.type === "application/pdf") {
      const url = URL.createObjectURL(file);
      setFileUrl(url);
    }
  }, [file]);
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    console.log(numPages)
  }

  return (
    <div style={style} ref={setNodeRef} {...attributes} {...listeners} className='bg-blue-300 text-center'>
      
     <div style={{touchAction:"none"}} >
      {fileUrl && (
        <Document file={fileUrl} onLoadSuccess={onDocumentLoadSuccess} className=' '>
          <Page pageNumber={1} width={100} className=''  />
          
        </Document>
      )}
      </div>
    </div>
  );
};

export default PdfList;
