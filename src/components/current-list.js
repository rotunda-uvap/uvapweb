import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

export default function CurrentList() {
  return (
    <StaticQuery
      query={graphql`
      query  {
        allBooksJson(filter: {List: {eq: "Fall 2020"}}) {
          edges {
            node {
              Title
              BookID
            }
          }
        }
      }
      
      `}
      render={data => (
        <section>
        <h2>Books in Current Catalog</h2>
        <ul className="container px-5 py-5 mx-auto">
          {data.allBooksJson.edges.map(edge => (
          <>
              <li  className="text-normal font-black text-blue-400 hover:text-blue-200 p-2" key={edge.node.Title}>
                <Link to={`../title/${ edge.node.BookID }`}>{ edge.node.Title }
                </Link>
                </li>
          
          </>
      ))}
      </ul>
      </section>
      )}
    />
  )
}