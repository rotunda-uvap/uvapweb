import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
    const item = data.rotundaJson
    const summary = data.markdownRemark
 return (
   <Layout>
     <div>
        <h2 className="py-10">{item.Title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
        <article 
          dangerouslySetInnerHTML={{ __html:summary.html }}/>
          </div>
        
    </div>
   </Layout>
    
 )
}



export const query = graphql`
  query($id: String!) {
    rotundaJson(RotID: {eq: $id}) {
        RotID
        Title
    }
    markdownRemark(frontmatter: {templateKey: {eq: "rotunda"}}, rid: { eq: $id }) {
      html
      frontmatter {
          templateKey
          title
          rid
          related_books {
            book_id
            book_title
          }
      }
  }
  }
`

