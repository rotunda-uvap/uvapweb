import React from "react"
import { graphql, Link } from "gatsby"
import sanitizeHtml from 'sanitize-html';

export default function RotCardBig( {fields: { Title, RotID, imageFilename, MainDescription }}) {
   
     return (
       
            <div class=" snap-center flex-shrink-0 w-full grid lg:grid-cols-2 flex items-center overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <div class="mb-4 lg:mb-0">
                <div class="block rounded-lg shadow-lg px-6 py-12 md:px-12 lg:-mr-14 rotCard" >
                  <h2 class="text-3xl font-bold mb-6">{Title}</h2>
                  
                 
                  <div className="text-gray-500 mb-6 pb-2 lg:pb-0" dangerouslySetInnerHTML={{ __html: sanitizeHtml(MainDescription.html) }}></div>

                </div>
              </div>
      
              <div className="flex-shrink-0">
                <img src={"https://ik.imagekit.io/uvapress/rotunda/" + imageFilename} class="w-full rounded-lg shadow-lg"
                  alt="" />
              </div>
            </div>
          
  
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