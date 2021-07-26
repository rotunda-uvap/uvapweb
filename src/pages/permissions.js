import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import "../utils/global.css"
import SeO from "../components/SeoComponent"


export default function RightsandPermissionsPage({ data }) {
    const pagedata = data.markdownRemark
 return (
    
        <Layout>
          <SeO title="Rights and Permissions"/>
          <div className="container px-5 py-12 mx-auto">
          <h1 className="sm:text-3xl text-2xl p-4 font-sans uppercase text-gray-900 text-center">Rights and Permissions</h1>

         <div className="cms" dangerouslySetInnerHTML={{__html: pagedata.html}}/></div>
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
