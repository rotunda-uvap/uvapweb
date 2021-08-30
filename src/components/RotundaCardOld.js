import React from "react"
import { Link } from "gatsby"



const RotundaCard = ({Title, ID, Image}) => { 
    
    return (
      
       
         
       /*  <div className="bg-gray-100 rounded flex p-4 h-full items-center">
             <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" className="text-gray-800 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
               
               <path xmlns="http://www.w3.org/2000/svg" d="M9 5l7 7-7 7"/>
             </svg>
             <Link to={`../../title/${ ID }`}><span className="title-font font-medium">{Title}</span></Link>
        </div> */
        <div className="hover:bg-gray-100 hover:rounded flex p-4 h-full items-center">
        <img className="flex-shrink-0 mr-4" src={"https://www.upress.virginia.edu/sites/default/files/rotunda/" + Image} width="50px" alt={Title}/>
        <Link to={`../../title/${ ID }`}><span className="text-xl font-thin tracking-widest">{Title}</span></Link>
   </div>
       
      )
  }
  
  export default RotundaCard