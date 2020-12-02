import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"


export default function Articles({ data }) {
    const news = data.allMarkdownRemark
 return (
    
        <Layout>
            <h2 className="text-5xl">Publicity</h2>
            {news.edges.map(edge => (
            <>
            <div className="container px-5 py-5 mx-auto flex flex-wrap">
                <h3  className="text-2xl font-black mt-16 mb-2"key={edge.node.frontmatter.title}><Link to={`../news${ edge.node.fields.slug }`}>{ edge.node.frontmatter.title }</Link></h3>
            <div key={`teaser`} dangerouslySetInnerHTML={{ __html: edge.node.html.split(' ').splice(0, 25).join(' ') + '...' }}></div>
            </div>

            </>
        ))}
        </Layout>

 )
}



export const query = graphql`
  query {
    allMarkdownRemark(filter: {frontmatter: {type: {in: ["news", "media", "event"]}}}) {
      edges {
          node {
            html
            frontmatter {
              title
              type
              relbook
            }
            fields {
              slug
            }
          }
        }
      }
  }
`
