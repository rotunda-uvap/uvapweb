import React from "react"
import { Link } from "gatsby"

const RelatedBook = ({id, title}) => {
   const cover = "https://www.upress.virginia.edu/sites/default/files/covers/" + id + "_T.jpg"
   const booklink = "../../title/" + id

    return (
            <Link to={booklink}><img src={cover} alt="link to related book"/>{title}</Link>
  
      )
  }
  
  export default RelatedBook