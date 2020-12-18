import React from "react"
import { Link } from "gatsby"

const BioCard = ({name, title, slug, email, phone, photo}) => {
   const pho = "../" + photo
   const slink = "../staff/" + slug
    return (
    <div className="flex">
        <img src={pho } alt="placeholder"/>
         <ul className="flex flex-col px-10">
            <li key={"1" + slug} className="font-black"><Link to={slink}>{name}</Link></li> 
            <li key={"2" + slug}>{title}</li>
            <li key={"3" + slug}>{phone}</li>
            <li key={"4" + slug}><a href={`mailto:${ email }`}>{email}</a></li>
      </ul>
      </div>
      )
  }
  
  export default BioCard