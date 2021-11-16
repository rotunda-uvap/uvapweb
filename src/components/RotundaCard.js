import React from "react"
import { Link } from "gatsby"



const RotundaCard = ({Title, ID, Image}) => { 
    
    return (
      
       
         
   
        <div className="hover:bg-gray-100 flex p-2 h-full items-center">
        <img className="flex-shrink-0 h-10 w-10 rounded-full object-cover mr-5" src={"https://ik.imagekit.io/uvapress/rotunda/" + Image} width="50px" alt={Title}/>
        <Link to={`../../title/${ ID }`}><span className="text-lg text-ceci-gray-dark font-display uppercase">{Title}</span></Link>
   </div>


       
      )
  }
  
  export default RotundaCard