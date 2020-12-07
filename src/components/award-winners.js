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
        <h3 className="text-3xl py-5">Award Winners</h3>
        <p>(Make collapsible?)</p>
        <ul className="container px-5 py-5 mx-auto">
          {data.allBooksJson.edges.map(edge => (
          <>
              <li  className="text-normal font-black hover:text-green-400 p-2" key={edge.node.Title}>
                <Link to={`../title/${ edge.node.BookID }`}>{ edge.node.Title }
                </Link>
                <p className="text-sm font-normal">{edge.node.Prizes}</p>
                </li>
          
          </>
      ))}
      </ul>
      </section>
      )}
    />
  )
}