import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"


export default function RecentBooks({ data }) {
    const books = data.allBooksJson
 return (
    
        <Layout>
            <h2>Recent Books</h2>
          <ul className="container px-5 py-5 mx-auto">
            {books.edges.map(edge => (
            <>
                <li  className="text-normal font-black text-blue-400 hover:text-blue-200 p-2" key={edge.node.Title}>
                  <Link to={`../title/${ edge.node.BookID }`}>{ edge.node.Title }
                  </Link><br/>
                  Published on: {edge.node.PublicationDate}
                  </li>
            
            </>
        ))}
        </ul>
        </Layout>

 )
}



export const query = graphql`
  query {
    allBooksJson(filter: {DaysSincePublication: {lt: 160}}) {
        edges {
          node {
            BookID
            Title
            PublicationDate
            AuthorCredit
          }
        }
      }
  }
`
