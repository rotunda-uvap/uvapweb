import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import "../utils/global.css"
import SeO from "../components/SeoComponent"
import PageHeader from "../components/PageHeader"
import sanitizeHtml from 'sanitize-html'

export default function OrderPage({ data }) {
    const pagedata = data.markdownRemark
 return (
    
        <Layout>
          <SeO title="How to Order Books"/>
                     <div className="container p-5 mx-auto">

<PageHeader text={'Order Books'}/>
         <div className="cms" dangerouslySetInnerHTML={{__html: sanitizeHtml(pagedata.html)}}/>

         </div> 
        </Layout>

 )
}



export const query = graphql`
  query {
   
      markdownRemark(frontmatter: {templateKey: {eq: "page"}, title: {eq: "Order"}}) {
        html
      }
  }
`
