import React from "react"
import { Link } from "gatsby"

const RelatedBookList = ({id, title}) => {
   const cover = "https://covers.upress.virginia.edu/mediums/" + id + "_M.jpg"
   const booklink = "../../title/" + id

    return (
            <Link to={booklink} className="object-cover"><img src={cover} alt={title} title={title}/></Link>
  
      )
  }
  
  export default RelatedBookList