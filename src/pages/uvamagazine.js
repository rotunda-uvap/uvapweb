import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import "../utils/global.css"
import SeO from "../components/SeoComponent"
import PageHeader from "../components/PageHeader"
import sanitizeHtml from 'sanitize-html'
export default function PrivacyPage({ data }) {
    const pagedata = data.markdownRemark
 return (
   
        <Layout> 
          <SeO title="UVA Magazine"/>
           <div className="container px-5 py-12 mx-auto">
           <PageHeader text={'UVA Magazine'}/>

         <div className="cms" dangerouslySetInnerHTML={{__html: sanitizeHtml(pagedata.html)}}/>

         
           </div>
        </Layout>

 )
}

export const query = graphql`
  query {
   
      markdownRemark(frontmatter: {templateKey: {eq: "page"}, title: {eq: "UVA Magazine"}}) {
        html
      }
  }
`