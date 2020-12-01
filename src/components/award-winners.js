import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

export default function AwardWinners() {
  return (
    <StaticQuery
      query={graphql`
      query  {
        allBooksJson(filter: {Prizes: {regex: "/.[A-Z]/"}}) {
          edges {
            node {
              Title
              BookID
              Prizes
            }
          }
        }
      }
      
      `}
      render={data => (
        <section>
        <h2>Award Winners (make collapsible?)</h2>
        <ul className="container px-5 py-5 mx-auto">
          {data.allBooksJson.edges.map(edge => (
          <>
              <li  className="text-normal font-black text-blue-400 hover:text-blue-200 p-2" key={edge.node.Title}>
                <Link to={`../title/${ edge.node.BookID }`}>{ edge.node.Title }
                </Link>
                <p>{edge.node.Prizes}</p>
                </li>
          
          </>
      ))}
      </ul>
      </section>
      )}
    />
  )
}