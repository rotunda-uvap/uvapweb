import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import "../utils/global.css"
import SEO from "../components/SeoComponent"

export default function CareerPage({ data }) {
    const pagedata = data.markdownRemark
 return (
   
        <Layout> 
          <SEO title="Career Opportunties at UVA Press"/>
           <div className="container px-5 py-12 mx-auto">
          <h1 className="sm:text-3xl text-2xl p-4 font-sans uppercase text-gray-900 text-center">Job Opportunties at UVA Press</h1>

         <div className="cms" dangerouslySetInnerHTML={{__html: pagedata.html}}/>

         
           </div>
        </Layout>

 )
}



export const query = graphql`
  query {
   
      markdownRemark(frontmatter: {templateKey: {eq: "page"}, title: {eq: "Career"}}) {
        html
      }
  }
`
