import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

export default ({ data }) => {
    const news = data.markdownRemark
 return (
   <Layout>
     <div>
       <h2>news</h2>
        <h1 className="py5 text-1xl font-black mt-16 mb-2" >{news.frontmatter.title}</h1>
        <section
          dangerouslySetInnerHTML={{ __html: news.html }}
        />
    </div>
   </Layout>
    
 )
}



export const query = graphql`
  query($id: String!) {
    markdownRemark(frontmatter: {type: {ne: "page"}},id: { eq: $id }) {
        id
        html
        frontmatter {
            title
            type
          }
    }
  }
`
