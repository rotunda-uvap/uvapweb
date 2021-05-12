import React from "react"
import { Link } from "gatsby"

const RelatedBookList = ({id, title}) => {
   const cover = "https://www.upress.virginia.edu/sites/default/files/covers/" + id + "_M.jpg"
   const booklink = "../../title/" + id

    return (
            <Link to={booklink} className="object-contain shadow-lg"><img src={cover} alt={title} title={title}/></Link>
  
      )
  }
  
  export default RelatedBookList