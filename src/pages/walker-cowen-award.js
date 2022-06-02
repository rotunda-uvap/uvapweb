import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import "../utils/global.css"
import SeO from "../components/SeoComponent"
import PageHeader from "../components/PageHeader"
import sanitizeHtml from 'sanitize-html'

export default function WalkerCowenPage({ data }) {
    const pagedata = data.markdownRemark
 return (
    
        <Layout>
          <SeO title="Walker Cowen Memorial Prize" description="The prize is awarded to the author of a scholarly book-length manuscript in eighteenth-century studies, including the Americas and the Atlantic world. "/>
            <div className="container px-5 py-12 mx-auto">

            <PageHeader text={'Walker Cowen Memorial Prize'}/>


         <div className="cms" dangerouslySetInnerHTML={{__html: sanitizeHtml(pagedata.html)}}/>

         
           </div>
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
