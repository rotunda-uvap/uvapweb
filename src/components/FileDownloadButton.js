import React from "react"
import {FaCloudDownloadAlt} from "react-icons/fa"


const FileDownloadButton = ({name, file}) => {
   
    return (
        
       
        <a href={file} className="text-gray-600 hover:text-gray-800">{name}</a>
          
        
      )
  }
  
  export default FileDownloadButton