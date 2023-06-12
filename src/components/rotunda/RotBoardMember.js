import React from "react"

const RotBoardMember = ({name, title}) => {
   
    return (
        
        <div className="flex flex-col px-7 py-2">
        <h6 className="tracking-wide text-ceci-gray-mid">{name}</h6>
        <span className="text-ceci-gray-dark font-thin">{title}</span>
        </div>
          
        
      )
  }
  
  export default RotBoardMember