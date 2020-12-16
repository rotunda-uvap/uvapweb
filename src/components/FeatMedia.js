import React from "react"
import { Link } from "gatsby"

const FeatMedia = ({title, slug}) => {
   const slink = "../media" + slug
    return (
        <article className="flex flex-wrap place-content-center p-5 hover:bg-black hover:text-white">
        <div><button className="px-4 py-2 border-2 border-gray-700 uppercase">media</button></div>
    <div className="mx-auto"><h3 className="text-xl font-black uppercase py-5 text-center"><Link to={slink}>{title}</Link></h3>
          </div>
          <Link to={slink}>
            <button className="rounded bg-blue-400 text-white text-lg px-5 py-2 text-center uppercase">read</button></Link>
          </article>
        
      )
  }
  
  export default FeatMedia