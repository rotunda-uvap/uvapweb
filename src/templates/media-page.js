import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"

export default ({ data }) => {
    const media = data.markdownRemark
 return (
   <Layout>
     <div>
        <h1 className="py5 text-1xl font-black mt-16 mb-2" >{media.frontmatter.title}</h1>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
          <article 
          dangerouslySetInnerHTML={{ __html: media.html }}/>
          <image/>
          {media.frontmatter.link}
          </div>
        
    </div>
   </Layout>
    
 )
}



export const query = graphql`
  query($id: String!) {
    markdownRemark(frontmatter: {type: {eq: "media"}}, id: { eq: $id }) {
        html
        id
        frontmatter {
            type
            title
        }
    }
  }
`

