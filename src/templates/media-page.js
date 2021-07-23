import React from "react"
import { graphql } from "gatsby"
import RelatedBook from "../components/RelatedBook"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import SEO from "../components/SEO"

const mediaPage = ({ data }) => {
    const media = data.markdownRemark
    const related_books = data.markdownRemark.frontmatter.related_book
    const image = getImage(data.Img)
 return (
   <Layout>
     <SEO/>
     <div>
        <h1 className="py-5 px-5 text-2xl font-light uppercase" >{media.frontmatter.title}</h1>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
        <div className="float-left px-5 pb-5"><GatsbyImage image={image} alt="related image"   width={300}/></div>
        <p className="lg:w-3/3  leading-relaxed text-base">
  {related_books && 
            <>
             <div className="float-right px-5 pb-5">
            <h6 className="uppercase px-7 py-2">Related</h6>
            {related_books.map(book => (
            <RelatedBook id={book.id} title={book.Title}/>
           
        ))}</div></>
        } 
    <article className="cms"
          dangerouslySetInnerHTML={{ __html: media.html }}/>
          </p>
          
         
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
            related_book {
              id
              Title
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

