import React from "react"



const BoardMember = ({name, title}) => {
   
    return (
        
        <div className="flex flex-col px-7">
        <h6>{name}</h6>
        <span className="text-base font-serif">{title}</span>
        </div>
          
        
      )
  }
  
  export default BoardMember