import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SeO from "../components/SeoComponent"
import PageHeader from "../components/PageHeader"
import Gallery from "../components/RelCarousel.js"

const collPage = ({ data }) => {
 return (
   <Layout>
     <SeO title={data.markdownRemark.frontmatter.title}/>
     <div className="container px-5 py-7 mx-auto">
       <PageHeader text={data.markdownRemark.frontmatter.title}/>
       <div className="lg:w-2/3 mx-auto leading-relaxed text-base py-7"><p className="dropCap cms">{data.markdownRemark.frontmatter.description}</p></div>
 
           <div>
               <Gallery book_obj_array={data.markdownRemark.frontmatter.related_book}/>
           </div>
       </div>
   
    
   </Layout>
    
 )
}

export default collPage

export const query = graphql`
  query($id: String!) {
    markdownRemark(frontmatter: {templateKey: {eq: "collection"}}, id: { eq: $id }) {
      id
      frontmatter {
          templateKey
          title
          description
          related_book {
            Title
            id
          }
        }
    }
  } 
`
