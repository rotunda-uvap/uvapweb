import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SeO from "../components/SeoComponent"
import PageHeader from "../components/PageHeader"
import RelatedBookList from "../components/RelatedBookList"

const CollPage = ({ data }) => {
   const { title, description, related_book: relatedBooks } = data.markdownRemark.frontmatter

   return (
      <Layout>
         <SeO title={title} />
         <div className="container px-5 py-7 mx-auto">
            <PageHeader text={title} />
            <div className="lg:w-2/3 mx-auto leading-relaxed text-base py-2">
               <p className="dropCap cms">{description}</p>
            </div>
            {relatedBooks && relatedBooks.length > 0 && (
               <div className="flex flex-row flex-wrap gap-4">
                  {relatedBooks.map((book, index) => (
                     <RelatedBookList 
                        key={`related-${index}`} 
                        id={book.BookID} 
                        title={book.Title} 
                     />
                  ))}
               </div>
            )}
         </div>
      </Layout>
   )
}

export default CollPage

export const pageQuery = graphql`
   query($id: String!) {
      markdownRemark(id: { eq: $id }) {
         frontmatter {
            title
            description
            related_book {
               BookID
               Title
            }
         }
      }
   }
`
