import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Search from "../components/search/search"


export default function Books({ data }) {
    const books = data.allBooksJson
 return (
    
        <Layout>
            <h2>Listing of All Books</h2>
          <ul className="container px-5 py-5 mx-auto">
            {books.edges.map(edge => (
            <>
                <li  className="text-normal font-black text-blue-400 hover:text-blue-200 p-2" key={edge.node.Title}>
                  <Link to={`../title/${ edge.node.BookID }`}>{ edge.node.Title }
                  </Link>
                  </li>
            
            </>
        ))}
        </ul>
        </Layout>

 )
}



export const query = graphql`
  query {
    allBooksJson {
        edges {
          node {
            BookID
            Title
          }
        }
      }
  }
`
