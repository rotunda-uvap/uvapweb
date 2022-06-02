import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import "../utils/global.css"
import SeO from "../components/SeoComponent"
import PageHeader from "../components/PageHeader"
import sanitizeHtml from 'sanitize-html'

export default function RightsandPermissionsPage({ data }) {
    const pagedata = data.markdownRemark
 return (
    
        <Layout>
          <SeO title="Rights and Permissions"/>
          <div className="mx-auto">
          <PageHeader text={'Rights and Permissions'}/>

         <div className="cms" dangerouslySetInnerHTML={{__html: sanitizeHtml(pagedata.html)}}/></div>
        </Layout>

 )
}



export const query = graphql`
  query {
   
      markdownRemark(frontmatter: {type: {eq: "page"}, title: {eq: "Permissions"}}) {
        html
      }
  }
`
