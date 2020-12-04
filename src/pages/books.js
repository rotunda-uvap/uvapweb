import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

export default function Books({ data }) {
    const books = data.allBooksJson
 return (
    
        <Layout>
                 <h2 className="text-3xl py-5">Listing of All Books (replace with search?)</h2>
            <div className="container">
 <ul className="grid md:grid-cols-3 md:auto-rows-fr content-center justify-center">
   <li><Link to={`/subjects`}><button className="border-b-4 border-white hover:border-black w-full h-full">Browse by Subject</button></Link></li>
   <li><Link to={`/series`}><button className="border-b-4 border-white hover:border-black w-full h-full">Browse by Series</button></Link></li>
   <li><Link to={`/recent-books`}><button className="border-b-4 border-white hover:border-black w-full h-full">Recently Published</button></Link></li>
   
 </ul>
</div>
          <ul className="container px-5 py-5 mx-auto">
            {books.edges.map(edge => (
            <>
                <li  className="text-lg hover:text-gray-600 p-2" key={edge.node.Title}>
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
