import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"

export default ({ data }) => {
    const media = data.markdownRemark
    const related_books = data.markdownRemark.frontmatter.relbook.split(',')
 return (
   <Layout>
     <div>
        <h1 className="py-5 text-2xl font-black uppercase" >{media.frontmatter.title}</h1>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
          <article 
          dangerouslySetInnerHTML={{ __html: media.html }}/>
          <image/>
          {related_books && related_books.map(book => (
            <> 
            <Link to={`../../title/${book}`}>Related Book: {book}</Link>
            
            </>
        ))}
          </div>
        
    </div>
   </Layout>
    
 )
}



export const query = graphql`
  query($id: String!) {
    markdownRemark(frontmatter: {type: {nin: ["page", "news", "promo"]}}, id: { eq: $id }) {
        html
        id
        frontmatter {
            type
            title
            relbook
        }
    }
    
  }
`

