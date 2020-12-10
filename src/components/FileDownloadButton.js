import React from "react"


const FileDownloadButton = ({name, file}) => {
   
    return (
        
        <a href={file} className="self-center py-3 w-full">
        <button className="rounded w-full hover:bg-blue-200 hover:text-black bg-black text-white py-3 px-7 center">{name}</button>
        </a>
        
      )
  }
  
  export default FileDownloadButton