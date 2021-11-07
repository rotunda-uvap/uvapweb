import React from "react"



const FileDownloadButton = ({name, file}) => {
   
    return (
        
        <div className="flex p-2 h-full items-center">
        <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" strokeWidth="1" className="text-gray-800 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
          
          <path xmlns="http://www.w3.org/2000/svg" d="M9 5l7 7-7 7"/>
        </svg>
        <a href={'../' + file} title="Download form" className="text-gray-600 font-thin tracking-widest font-display hover:text-gray-800">Download {name}</a>
        </div>
        // <a href={file} className="text-gray-600 hover:text-gray-800">{name}</a>
          
        
      )
  }
  
  export default FileDownloadButton