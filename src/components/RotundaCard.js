import React from "react"
import { Link } from "gatsby"

const RotundaCard = ({Title, Subtitle, ID, file}) => { 
    return (
        <div className="flex flex-col">
            <img src={"../images/" + file }/>
            <Link to={`../title/${ ID }`} className="py-3 text-light text-lg">{Title}</Link>
             {Subtitle && <span className="py-3 text-light text-lg text-italic">: {Subtitle}</span>}
        </div>
        
        
      )
  }
  
  export default RotundaCard