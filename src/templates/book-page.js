import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
    const book = data.booksJson
 return (
   <Layout>
     <div>
        <h2 className="py5 text-1xl font-black mt-16 mb-2">{book.Title}</h2> 
        <h3>by {book.Authors.Author}</h3>
    </div>
    <h3 className="py-5">Summary</h3>
    <div dangerouslySetInnerHTML={{ __html: book.MainDescription.html }}>
    </div>
    <div>
      <h3 className="py-5">Reviews</h3>
      {book.Reviews.map(review => (
            <>
            <div className="container px-5 py-5 mx-auto flex flex-wrap">
            <div key={`teaser`} dangerouslySetInnerHTML={{ __html: review.html.split(' ').splice(0, 25).join(' ') + '...' }}></div>
            <h6>{review.attribution}</h6>
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

   </Layout>
    
 )
}



export const query = graphql`
  query($id: String!) {
    booksJson(id: { eq: $id }) {
      id
      BookID
      Title
      Bindings {
        type
        ISBN
        price
        pages
        date
        buylink
      }
      Authors {
        Author
      }
      Reviews {
        attribution
        html
      }
      MainDescription {
        html
      }
        Subject
    }
  }
`
