import React from "react"
import { graphql, Link } from "gatsby"

export default function RotCard( {fields: {  Title, RotID, imageFilename }}) {
   
     return (
    <>
          <Link to={`../../title/${ RotID }`}><div className="hover:bg-gray-100 flex p-2 h-full items-center">
        <img className="flex-shrink-0 h-10 w-10  object-cover mr-5" src={"https://ik.imagekit.io/uvapress/rotunda/" + imageFilename} width="50" alt={Title}/>
        <span className="text-lg text-ceci-gray-dark font-display font-thin uppercase">{Title}</span>
   </div></Link>
    </>
      
  )
}
export const query = graphql`
  fragment RotFieldFragment on RotundaJson {
        Title
        RotID
        imageFilename
        MainDescription {
          html
        }
  }
`