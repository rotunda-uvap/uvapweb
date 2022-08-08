import React from "react"
import { Link } from "gatsby"

const RelatedBook = ({id, title}) => {
   const cover = "https://ik.imagekit.io/uvapress/" + id + "_M.jpg"
   const booklink = "../../title/" + id

    return (
            <Link to={booklink} ><img src={cover} alt={title} title={title}/></Link>
  
      )
  }
  
  export default RelatedBook