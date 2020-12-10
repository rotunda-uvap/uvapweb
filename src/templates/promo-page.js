import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"

export default ({ data }) => {
    const promos = data.markdownRemark
    const related_books = data.markdownRemark.frontmatter.relbook.split(',')

 return (
   <Layout>
     <div>
        <h1 className="py5 text-1xl font-black mt-16 mb-2" >{promos.frontmatter.title}</h1>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
          <article 
          dangerouslySetInnerHTML={{ __html: promos.html }}/>
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
    markdownRemark(frontmatter: {type: {nin: ["page", "news", "media", "series"]}}, id: { eq: $id }) {
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

