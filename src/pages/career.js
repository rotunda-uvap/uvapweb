import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import "../utils/global.css"
import SeO from "../components/SeoComponent"
import PageHeader from "../components/PageHeader"

export default function CareerPage({ data }) {
    const pagedata = data.markdownRemark
 return (
   
        <Layout> 
          <SeO title="Career Opportunties at UVA Press"/>
           <div className="container px-5 py-12 mx-auto">
<PageHeader text={"Career Opportunties"}/>
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
