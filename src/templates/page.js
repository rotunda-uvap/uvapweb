import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

export default ({ data }) => {
    const page = data.file.childMarkdownRemark
 return (
   <Layout>
     <div>
        <h1 className="py5 text-1xl font-black mt-16 mb-2" >{page.frontmatter.title}</h1>
        <section
          dangerouslySetInnerHTML={{ __html: page.html }}
        />
    </div>
   </Layout>
    
 )
}



export const query = graphql`
  query($id: String!) {
    file(id: { eq: $id }) {
        childMarkdownRemark {
            html
            frontmatter {
              title
            }
            fields {
              slug
            }
          }
    }
  }
`
