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
              Subtitle
              BookID
              AuthorCredit
            }
          }
        }
      }
      
      `}
      render={data => (
        <section>
        <h2>Books in Current Catalog</h2>
        <ul className="container px-5 py-5 grid md:grid-cols-6 md:gap-4">
          {data.allBooksJson.edges.map(edge => (
          <>
              <li  className="text-normal border-2 border-gray-800 p-2 hover:bg-green-400 hover:text-white" key={edge.node.Title}>
                <div className="flex flex-col">
                  <Link className="font-black" to={`../title/${ edge.node.BookID }`}>{ edge.node.Title } </Link>
          {edge.node.Subtitle &&  <h5>{edge.node.Subtitle}</h5>}
          <h6 className="uppercase">{edge.node.AuthorCredit}</h6>
                  </div>
                </li>
          
          </>
      ))}
      </ul>
      </section>
      )}
    />
  )
}