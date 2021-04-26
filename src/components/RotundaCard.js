import React from "react"
import { Link } from "gatsby"

const RotundaCard = ({Title, Subtitle, ID}) => { 
    return (
       /*  <div className="flex flex-col">
            <Link to={`../../title/${ ID }`} className="py-3 text-light text-lg">{Title}
             {Subtitle && <span className="py-3 text-light text-lg text-italic">: {Subtitle}</span>}</Link>
        </div> */
       
         
        <div class="bg-gray-100 rounded flex p-4 h-full items-center">
             <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" class="text-gray-800 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
               
               <path xmlns="http://www.w3.org/2000/svg" d="M9 5l7 7-7 7"/>
             </svg>
             <Link to={`../../title/${ ID }`}><span class="title-font font-medium">{Title}</span></Link>
        </div>
        
      )
  }
  
  export default RotundaCard