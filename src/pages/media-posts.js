import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"


export default function MediaArticles({ data }) {
    const media = data.allMarkdownRemark
 return (
    
        <Layout>
            {media.edges.map(edge => (
            <>
            <div className="container px-5 py-5 mx-auto flex flex-wrap">
                <h3  className="text-2xl font-black mt-16 mb-2"key={edge.node.frontmatter.title}><Link to={`../media${ edge.node.fields.slug }`}>{ edge.node.frontmatter.title }</Link></h3>
            <div key={`teaser`} dangerouslySetInnerHTML={{ __html: edge.node.html.split(' ').splice(0, 25).join(' ') + '...' }}></div>
            </div>
            
            </>
        ))}
        </Layout>

 )
}



export const query = graphql`
  query {
    allMarkdownRemark(filter: {frontmatter: {type: {eq: "media"}}}) {
        edges {
          node {
            html
            frontmatter {
              title
              type
            }
            fields {
              slug
            }
          }
        }
      }
  }
`