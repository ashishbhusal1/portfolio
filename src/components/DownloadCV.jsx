import React from 'react'

function DownloadCV() {
    const handleDownload=()=>{
        const fileUrl='/Ashish-Resume.pdf';
        const link=document.createElement('a');
        link.href=fileUrl;
        link.download='ashish-cv.pdf';
        link.click();
    }
  return (
    <button onClick={handleDownload} className="border rounded-2xl py-1 px-2 ml-2 md:py-2 md:px-4 ">
        Download CV
    </button>
  )
}

export default DownloadCV