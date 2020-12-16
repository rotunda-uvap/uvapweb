import React from "react"
import { Link } from "gatsby"

const RelatedBook = ({id}) => {
   const cover = "../" + id + "_T.jpg"
   const booklink = "../../title/" + id
    return (
            <Link to={booklink}><img src={cover} alt="link to related book"/></Link>
  
      )
  }
  
  export default RelatedBook