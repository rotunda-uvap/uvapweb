import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

export default ({ data }) => {
    const page = data.markdownRemark
 return (
   <Layout>
     <div>
        <h2 className="py-10" >{page.frontmatter.title}</h2>
        <section
          dangerouslySetInnerHTML={{ __html: page.html }}
        />
    </div>
   </Layout>
    
 )
}



export const query = graphql`
  query($id: String!) {
    markdownRemark(frontmatter: {templateKey: {eq: "page"}}, id: { eq: $id }) {
        html
        id
        frontmatter {
            templateKey
            title
        }
    }
  }
`
