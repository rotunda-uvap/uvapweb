import React from "react"
import { graphql } from "gatsby"
import RelatedBook from "../components/RelatedBook"
import SeO from "../components/SeoComponent"
import Layout from "../components/layout"
import PageHeader from "../components/PageHeader"
const promoPage = ({ data }) => {
    const promos = data.markdownRemark
    const related_books = data.markdownRemark.frontmatter.related_books

 return (
   <Layout>
     <SeO/>
     <div>
<PageHeader text={promos.frontmatter.title}/>    
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

export default promoPage

export const query = graphql`
  query($id: String!) {
    markdownRemark(frontmatter: {templateKey: {eq: "promo"}}, id: { eq: $id }) {
        html
        id
        frontmatter {
            templateKey
            title
            related_books {
              book_id
              book_title
            }
        }
    }
   
  }
`

