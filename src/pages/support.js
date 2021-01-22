import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import "../utils/global.css"


export default function SupportPage({ data }) {
    const pagedata = data.markdownRemark
 return (
    
        <Layout>
            <h2 className="py-10">Support UVA Press</h2>

         <p dangerouslySetInnerHTML={{__html: pagedata.html}}/>

         
           
        </Layout>

 )
}



export const query = graphql`
  query {
   
      markdownRemark(frontmatter: {type: {eq: "page"}, title: {eq: "Support UVa Press"}}) {
        html
      }
  }
`
