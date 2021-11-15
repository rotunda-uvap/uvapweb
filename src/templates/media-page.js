import React from "react"
import { graphql } from "gatsby"
import RelatedBook from "../components/RelatedBook"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import SeO from "../components/SeoComponent"
import ShareButtons from "../components/ShareButtons"
import PageHeader from "../components/PageHeader"


const mediaPage = ({ data }) => {
    const media = data.markdownRemark
    const related_books = data.markdownRemark.frontmatter.related_book
    const url = data.site.siteMetadata.siteUrl + "/media" + media.fields.slug
    const image = getImage(data.Img)
   
 return (
   <Layout>
     <SeO title={media.frontmatter.title}
  description={media.html.substring(0, 150)}
  pathname={media.fields.slug}
  image={"/uvap_sm.png"}
  article={true}/>
     <section className="text-gray-600 body-font">
  <div className="container px-5 py-12 mx-auto">
  
  <div className="flex flex-col  w-full mb-10">
     <PageHeader text={media.frontmatter.title}/>    
         <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
        <div className="float-left px-5 pb-5"><GatsbyImage image={image} alt="related image"/></div>
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
          <div className="px-10">
          <ShareButtons title={media.frontmatter.title} url={url}/>
</div>
         
          </div>
        
    </div>
    </div>
    </section>
   </Layout>
    
 )
}

export default mediaPage

export const query = graphql`
  query($id: String!, $relDir: String!) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    markdownRemark(frontmatter: {type: {eq: "media"}}, id: { eq: $id }) {
        html
        id
        fields {
          slug
        }
        frontmatter {
            type
            title
            related_book {
              id
              Title
            }
      }
    }
    Img: file(extension: {regex: "/(jpeg|jpg|gif|png)/"}, relativeDirectory: {eq: $relDir}) {
      publicURL
            childImageSharp {
        gatsbyImageData(width:300, layout: CONSTRAINED, placeholder: TRACED_SVG, formats: [AUTO, WEBP, AVIF])
        
      }
    }
  }
`

