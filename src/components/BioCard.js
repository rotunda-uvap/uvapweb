import React from "react"
import { Link } from "gatsby"

const BioCard = ({name, title, slug, email, phone, photo}) => {
   const pho = "../" + photo
   const slink = "../staff/" + slug
    return (
    
        <div className="flex flex-auto py-5">
        <img src={pho } alt="placeholder"/>
         <ul className="flex flex-col px-10">
    <li className="font-black"><Link to={slink}>{name}</Link></li> 
            <li>{title}</li>
            <li>{phone}</li>
            <li><a href={`mailto:${ email }`}>{email}</a></li>
      </ul>
    </div>
      )
  }
  
  export default BioCard