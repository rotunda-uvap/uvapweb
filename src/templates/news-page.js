import React from "react"
import { graphql } from "gatsby"
import RelatedBook from "../components/RelatedBook"
import Layout from "../components/layout"

export default ({ data }) => {
    const news = data.markdownRemark
    const related_books = data.markdownRemark.frontmatter.related_books
    
 return (
   <Layout>
     <div>
        <h1 className="py-5 text-2xl font-black uppercase" >{news.frontmatter.title}</h1>
        <div className="grid grid-cols-1">
          <article 
          dangerouslySetInnerHTML={{ __html: news.html }}/>
          <image/>
          <h4 className="py-5">Related Books</h4>
          <section>
          <div className="grid md:grid-cols-5 md:gap-2">
            
            {related_books && related_books.map(book => (
            <> 
            <RelatedBook id={book.book_id} title={book.book_title}/>
            </>
        ))}
        </div>
          </section>
          </div>
        
    </div>
   </Layout>
    
 )
}



export const query = graphql`
  query($id: String!) {
    markdownRemark(frontmatter: {type: {nin: ["page", "media", "promo"]}},id: { eq: $id }) {
      id
        html
        frontmatter {
            title
            type
            related_books {
              book_id
              book_title
            }
          }
    }
  }
`
