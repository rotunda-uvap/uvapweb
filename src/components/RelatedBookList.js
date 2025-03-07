import React from "react"
import { Link } from "gatsby"

const RelatedBookList = ({ id, title }) => {
   const cover = `https://ik.imagekit.io/uvapress/${id}_M.jpg`
   const bookLink = `/title/${id}`

   return (
      <Link to={bookLink} className="object-cover px-2">
         <img src={cover} alt={`Cover of ${title}`} title={title} />
      </Link>
   )
}

export default RelatedBookList
/* import React from "react"
import { Link } from "gatsby"

const RelatedBookList = ({id, title}) => {
   const cover = "https://ik.imagekit.io/uvapress/" + id + "_M.jpg"
   const booklink = "../../title/" + id

    return (
            <Link to={booklink} className="object-cover px-2"><img src={cover} alt={title} title={title}/></Link>
  
      )
  }
  
  export default RelatedBookList */