import React from "react"
import { Link } from "gatsby"



const RotundaCard = ({Title, ID, Image}) => { 
    
    return (
      
       
         
   
        <div className="hover:bg-gray-100 hover:rounded flex p-4 h-full items-center">
        <img className="flex-shrink-0 h-10 w-10 rounded-full object-cover mr-5" src={"https://covers.upress.virginia.edu/rotunda/" + Image} width="50px" alt={Title}/>
        <Link to={`../../title/${ ID }`}><span className="text-xl font-thin tracking-widest">{Title}</span></Link>
   </div>


       
      )
  }
  
  export default RotundaCard