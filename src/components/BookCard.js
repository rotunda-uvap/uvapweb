import React from "react"
import "./BookCard.css"
import { graphql, Link } from "gatsby"
import { IKImage, IKContext } from 'imagekitio-react'

export default function BookCard( {fields: {Title, Subtitle, AuthorCredit, CoverImageMain, BookID}}) {
    return (
      <Link to={`/title/${ BookID }`}  >
        <div className="flip-card">
  <div className="flip-card-inner">
  
    {CoverImageMain ? <div className="flip-card-front">
       {/* <img src={booksrc} className="mx-auto my-auto self-center" alt="cover"/> */}
        <div className="mx-auto my-auto self-center aspect-[75/112]">
          <IKContext  urlEndpoint="https://ik.imagekit.io/uvapress/mediums/tr:w-150/">
            <IKImage path={CoverImageMain}  lqip={{ active: true }}/>
          </IKContext>
          </div>
        </div>:  
       <div className="flip-card-front px-1 bg-white ">
    <h6 className="text-base text-ceci-gray-dark uppercase pt-3 px-1 underline">{Title}</h6>
    <h5 className="text-sm pt-2 text-ceci-gray-mid italic font-serif ">{Subtitle}</h5>
    <h6 className="text-xs font-light font-display text-gray-400  pt-2">{AuthorCredit}</h6>
    </div>
    }
    <div className="flip-card-back px-1 bg-white  ">
    <h6 className="text-base text-gray-700 uppercase pt-3 px-1 underline">{Title}</h6>
    <h5 className="text-sm pt-2 text-gray-500 italic font-serif ">{Subtitle}</h5>
    <h6 className="text-xs font-light font-display text-gray-400  pt-2">{AuthorCredit}</h6>
    </div>
  </div>
</div></Link>
      
        
      )
  }
  

  export const query = graphql`
    fragment BookQFragment on BooksJson {
      BookID
      Title
      Subtitle
      AuthorCredit
      CoverImageMain
  }
`
 