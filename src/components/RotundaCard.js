import React from "react"
import { Link } from "gatsby"

const RotundaCard = ({Title, Subtitle, ID}) => { 
    return (
        <div className="flex flex-col">
            <Link to={`../title/${ ID }`} className="py-3 text-light text-lg">{Title}
             {Subtitle && <span className="py-3 text-light text-lg text-italic">: {Subtitle}</span>}</Link>
        </div>
        
        
      )
  }
  
  export default RotundaCard