import React from "react"
import {FaCloudDownloadAlt} from "react-icons/fa"


const FileDownloadButton = ({name, file}) => {
   
    return (
        
        <li className="lg:w-1/3 mb-1 w-1/2" key={name}>
        <a href={file} className="text-gray-600 hover:text-gray-800">{name}</a></li>
          
        
      )
  }
  
  export default FileDownloadButton