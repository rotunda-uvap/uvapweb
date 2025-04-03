import React from "react"
import { FaFileArrowDown } from "react-icons/fa6";



const FileDownloadButton = ({name, file}) => {
   
    return (
        
        <div className="flex p-2 h-full items-center">
        <a href={'../' + file}><FaFileArrowDown className="text-gray-800 w-6 h-6 flex-shrink-0 mr-4"/>
          </a>
        <a href={'../' + file} title="Download form" className="text-ceci-gray-dark font-thin tracking-wide text-lg hover:text-gray-800">Download {name}</a>
        </div>
        // <a href={file} className="text-gray-600 hover:text-gray-800">{name}</a>
          
        
      )
  }
  
  export default FileDownloadButton