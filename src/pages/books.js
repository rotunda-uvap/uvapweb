import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

export default function Books({ data }) {
    const books = data.allBooksJson
 return (
    
        <Layout>
                 <h2 className="text-3xl py-5">All Books (replace with search?)</h2>
            <div className="container">
 <ul className="grid md:grid-cols-3 md:auto-rows-fr content-center justify-center">
   <li><Link to={`/subjects`}><button className="hover:bg-green-400 bg-gray-800 text-white p-4 w-full h-full">Browse by Subject</button></Link></li>
   <li><Link to={`/series`}><button className="hover:bg-green-400 bg-gray-800 p-4 text-white w-full h-full">Browse by Series</button></Link></li>
   <li><Link to={`/recent-books`}><button className="hover:bg-green-400 bg-gray-800 p-4 text-white w-full h-full">Recently Published</button></Link></li>
   
 </ul>
</div>
          <ul className="container px-5 py-5 mx-auto">
            {books.edges.map(edge => (
            <>
                <li  className="text-normal font-black hover:text-gray-400 p-2" key={edge.node.Title}>
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
