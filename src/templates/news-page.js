import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"

export default ({ data }) => {
    const news = data.markdownRemark
 return (
   <Layout>
     <div>
        <h1 className="py5 text-1xl font-black mt-16 mb-2" >{news.frontmatter.title}</h1>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
          <article 
          dangerouslySetInnerHTML={{ __html: news.html }}/>
          <image/>
          {news.frontmatter.relbook && <Link to={`../../title/${news.frontmatter.relbook}`}>Related Book: {news.frontmatter.relbook}</Link>}

          </div>
        
    </div>
   </Layout>
    
 )
}



export const query = graphql`
  query($id: String!) {
    markdownRemark(frontmatter: {type: {nin: ["page", "media"]}},id: { eq: $id }) {
      id
        html
        frontmatter {
            title
            type
            relbook
          }
    }
  }
`
