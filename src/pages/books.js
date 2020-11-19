import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"


export default function Books({ data }) {
    const books = data.allBooksJson
 return (
    
        <Layout>
            {books.edges.map(edge => (
            <>
            <div className="container px-5 py-5 mx-auto flex flex-wrap">
                <h3  className="text-2xl font-black mt-16 mb-2"key={edge.node.Title}><Link to={`../title/${ edge.node.BookID }`}>{ edge.node.Title }</Link></h3>
            </div>
            
            </>
        ))}
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
