import React from "react"
import { Link } from "gatsby"

const FeaturedBooks = ({id}) => {
   const cover = "https://ik.imagekit.io/uvapress/mediums/" + id + ".jpg"
   const booklink = "../../title/" + id

    return (
            <Link to={booklink} ><img src={cover} alt={cover}/></Link>
  
      )
  }
  
  export default FeaturedBooks