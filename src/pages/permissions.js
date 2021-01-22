import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import "../utils/global.css"


export default function RightsandPermissionsPage({ data }) {
    const pagedata = data.markdownRemark
 return (
    
        <Layout>
            <h2 className="py-10">Rights and Permissions</h2>

         <p dangerouslySetInnerHTML={{__html: pagedata.html}}/>

         
           
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
