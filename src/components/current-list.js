import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import BookCard from "./BookCard"



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
              PublicationDate
              CoverImageThumb
            }
          }
        }
      }
      
      `}
      render={data => (
        <section>
       <h3 className="text-2xl py-5 uppercase text-gray-500">Books in Current Catalog</h3>
       

      <div className="container px-5 py-5 grid md:grid-cols-5 md:gap-4">
          {data.allBooksJson.edges.map(edge => (
            <>  
              <Link to={`../title/${ edge.node.BookID }`}>
                <BookCard Title={edge.node.Title} Subtitle={edge.node.Subtitle} Author={edge.node.AuthorCredit} Thumb={edge.node.CoverImageThumb} Bookid ={edge.node.BookID}  /></Link>
           </>
        ))}
      </div>
      </section>
      )}
    />
  )
}