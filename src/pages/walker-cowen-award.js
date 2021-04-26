import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import "../utils/global.css"


export default function WalkerCowenPage({ data }) {
    const pagedata = data.markdownRemark
 return (
    
        <Layout>
            <h2 className="py-10 px-3 font-light">Walker Cowen Memorial Prize</h2>

         <div dangerouslySetInnerHTML={{__html: pagedata.html}}/>

         
           
        </Layout>

 )
}



export const query = graphql`
  query {
      markdownRemark(frontmatter: {templateKey: {eq: "page"}, title: {eq: "Walker Cowen Memorial Prize"}}) {
        html
      }
  }
`
