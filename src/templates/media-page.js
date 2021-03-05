import React from "react"
import { graphql } from "gatsby"
import RelatedBook from "../components/RelatedBook"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"

const mediaPage = ({ data }) => {
    const media = data.markdownRemark
    const related_books = data.markdownRemark.frontmatter.related_books
    const image = getImage(data.Img)
 return (
   <Layout>
     <div>
        <h1 className="py-5 px-5 text-2xl font-black uppercase" >{media.frontmatter.title}</h1>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
        <div className="float-left px-5 pb-5"><GatsbyImage image={image} alt="related image"   width={300}/></div>
          <article 
          dangerouslySetInnerHTML={{ __html: media.html }}/>
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

export default mediaPage

export const query = graphql`
  query($id: String!, $relDir: String!) {
    markdownRemark(frontmatter: {type: {nin: ["page", "news", "promo"]}}, id: { eq: $id }) {
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
    Img: file(extension: {eq: "jpg"}, relativeDirectory: {eq: $relDir}) {
      childImageSharp {
        gatsbyImageData(width:300, layout: CONSTRAINED, placeholder: TRACED_SVG)
      }
    } 
  }
`

