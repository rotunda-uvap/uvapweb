import React from "react"
import { graphql } from "gatsby"
import RelatedBook from "../components/RelatedBook"

import Layout from "../components/layout"

export default ({ data }) => {
    const promos = data.markdownRemark
    const related_books = data.markdownRemark.frontmatter.related_books

 return (
   <Layout>
     <div>
        <h2 className="py-10">{promos.frontmatter.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
          <article 
          dangerouslySetInnerHTML={{ __html: promos.html }}/>
          <image/>
          {related_books && related_books.map(book => (
            <> 
            <RelatedBook id={book.book_id} title={book.book_title}/>
            
            </>
        ))}
          </div>
        
    </div>
   </Layout>
    
 )
}



export const query = graphql`
  query($id: String!) {
    markdownRemark(frontmatter: {type: {nin: ["page", "news", "media", "series"]}}, id: { eq: $id }) {
        html
        id
        frontmatter {
            type
            title
            related_books {
              book_id
              book_title
            }
        }
    }
   
  }
`

