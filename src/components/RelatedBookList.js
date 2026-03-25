import React, { useState } from "react"
import { Link } from "gatsby"

const RelatedBookList = ({ id, title }) => {
   const cover = `https://ik.imagekit.io/uvapress/${id}_M.jpg`
   const bookLink = `/title/${id}`
   const [imgFailed, setImgFailed] = useState(false)

   return (
      <Link to={bookLink} className="object-cover px-2">
         {imgFailed ? (
            <div style={{ width: 150, height: 224, display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "white", border: "1px solid #e5e7eb" }}>
               <p className="text-base text-ceci-gray-dark uppercase pt-3 px-2 underline font-sans text-center">{title}</p>
            </div>
         ) : (
            <img
               src={cover}
               alt={`Cover of ${title}`}
               title={title}
               width="150"
               height="224"
               style={{ objectFit: "contain" }}
               onError={() => setImgFailed(true)}
            />
         )}
      </Link>
   )
}

export default RelatedBookList
