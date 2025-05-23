import { useEffect, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { CSS } from '@dnd-kit/utilities';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
// import { useSortable } from '@dnd-kit/sortable';

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.8.69/pdf.worker.min.mjs`;

const PDFPageNo = ({ file, id, pageNoPosition }) => {
    // const {
    //     attributes,
    //     listeners,
    //     setNodeRef,
    //     transform,
    //     transition
    // } = useSortable({ id: id });

    // const style = {
    //     transform: CSS.Transform.toString(transform),
    //     transition,
    // };

    const pageNoPositionStyle = {
        1: 'top-0 left-0',
        2: 'top-0 left-1/2',
        3: 'top-0 right-0',
        4: 'bottom-0 left-0',
        5: 'bottom-0 left-1/2',
        6: 'bottom-0 right-0',
    }[pageNoPosition] || 'top-0 left-0'; // default position

    const [fileUrl, setFileUrl] = useState(null);
    const [numPages, setNumPages] = useState(1);

    useEffect(() => {
        if (typeof file === 'string') {
            setFileUrl(file);
        } else if (file && file.type === "application/pdf") {
            const url = URL.createObjectURL(file);
            setFileUrl(url);
            return () => URL.revokeObjectURL(url);
        }
    }, [file]);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
        console.log('Total pages:', numPages);
    }

    return (
        // <div style={style} ref={setNodeRef} {...attributes} {...listeners} className='bg-blue-300 text-center h-64 relative w-[200px]'>
        <div className='bg-blue-300 text-center h-64 relative w-[200px]'>
            <div className={`w-3 h-3 bg-red-500 absolute z-40 rounded-full ${pageNoPositionStyle}`}></div>
            <div style={{ touchAction: "none" }} className='flex gap-3 flex-wrap'>
                {fileUrl && (
                    <Document file={fileUrl} onLoadSuccess={onDocumentLoadSuccess}>
                        <Page pageNumber={1} width={200} />
                    </Document>
                )}
            </div>
        </div>
    );
};

export default PDFPageNo;
