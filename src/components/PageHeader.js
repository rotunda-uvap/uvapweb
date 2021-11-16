import React from "react"

const PageHeader = ({text}) => {
   
    return (
        <>
<h4 className="hidden md:block text-center py-6 uppercase text-ceci-gray-dark font-thin tracking-wider leading-normal font-sans">{text}</h4>
<h5 className="md:hidden text-center py-3 uppercase text-ceci-gray-dark font-thin tracking-wider leading-normal font-sans">{text}</h5>
</>

      )
  }
  
  export default PageHeader

