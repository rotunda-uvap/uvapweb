import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import "../utils/global.css"
import SEO from "../components/SEO"


export default function WalkerCowenPage({ data }) {
    const pagedata = data.markdownRemark
 return (
    
        <Layout>
          <SEO title="Walker Cowen Memorial Prize" description="The prize is awarded to the author of a scholarly book-length manuscript in eighteenth-century studies, including the Americas and the Atlantic world. "/>
            <div className="container px-5 py-12 mx-auto">

<h1 className="sm:text-3xl text-2xl p-4 font-sans uppercase text-gray-900 text-center">
            Walker Cowen Memorial Prize</h1>

         <div className="cms" dangerouslySetInnerHTML={{__html: pagedata.html}}/>

         
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
