import React from "react"
import { Link } from "gatsby"

const FeaturedBooks = ({id}) => {
   const cover = "https://ik.imagekit.io/uvapress/mediums/" + id + ".jpg"
   const booklink = "../../title/" + id

    return (
            <Link to={booklink} ><img src={cover} width={150} height={84} alt={cover} loading="lazy"/></Link>
  
      )
  }
  
  export default FeaturedBooks