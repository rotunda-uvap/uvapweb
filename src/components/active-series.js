import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

export default function ActiveSeries() {
  return (
    <StaticQuery
      query={graphql`
      query  {
        allMarkdownRemark(filter: {frontmatter: {type: {eq: "series"}, status: {eq: "active"}}}) {
            edges {
              node {
                frontmatter {
                  title
                  editors
                }
                html
              }
            }
          }
      }
      
      `}
      render={data => (
        <section>
        <h3 className="text-2xl py-2">Active Series</h3>
        <ul className="container px-5 py-5 mx-auto">
          {data.allMarkdownRemark.edges.map(edge => (
          <>
              <li key={edge.node.frontmatter.title}>
                <Link className="hover:text-gray-400 text-lg font-black p-2 " to={`../series/${ edge.node.frontmatter.title }`}>{ edge.node.frontmatter.title }
                </Link>
                <h6 className="text-sm p-2">{edge.node.frontmatter.editors}</h6>
                <p className="p-2" dangerouslySetInnerHTML={{ __html: edge.node.html}}/>
                </li>
          
          </>
      ))}
      </ul>
      </section>
      )}
    />
  )
}