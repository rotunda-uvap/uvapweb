import React from "react"
import { graphql } from "gatsby"

export default ({ data }) => {
    const news = data.markdownRemark
 return (
    <div>
        <h1>{news.frontmatter.title}</h1>
        <section
          dangerouslySetInnerHTML={{ __html: news.html }}
        />
    </div>
 )
}



export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
        id
        html
        frontmatter {
            title
          }
    }
  }
`
