import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
    const book = data.booksJson
 return (
   <Layout>
     <div>
        <h2 className="py5 text-1xl font-black mt-5 mb-2">{book.Title}</h2> 
        <h3 className="py5 text-1xl italic mt-2 mb-2">{book.Subtitle}</h3>
        <h3>by {book.AuthorCredit}</h3>
    </div>
    <h3 className="py-5">Summary</h3>
    <div dangerouslySetInnerHTML={{ __html: book.MainDescription.html }}>
    </div>
    <div>
      <h3 className="py-5">Reviews</h3>
      {book.Reviews.map(review => (
            <>
            <div className="container px-5 py-5 mx-auto flex flex-wrap">
            <blockquote dangerouslySetInnerHTML={{ __html: review.html }}/>
            <h6 className="pl-8 italic text-gray-500">-{review.attribution}</h6>
            </div>
            
            </>
        ))}
    </div>
    <div>
      <h3 className="py-5">Bindings</h3>
      {book.Bindings.map(binding => (
            <>
            <div className="container px-5 py-5 mx-auto flex flex-wrap">
              <div>
                {binding.type} - ${binding.price}
              </div>
            </div>
            
            </>
        ))}
    </div>
    <div>
      <h3 className="py-5">Series</h3>

      {book.Series}
      {book.Subject}
      {book.InternalSeriesVolume}
    </div>
    




   </Layout>
    
 )
}



export const query = graphql`
  query($id: String!) {
    booksJson(id: { eq: $id }) {
      id
      BookID
      Title
      Subtitle
      Bindings {
        type
        ISBN
        price
        pages
        date
        buylink
      }
      AuthorCredit
      Reviews {
        attribution
        html
      }
      MainDescription {
        html
      }
      Series
      Subject
      InternalSeriesVolume
    }
  }
`
