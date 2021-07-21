import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import BookCard from "./BookCard"

export default function AwardWinners() {
  return (
    <StaticQuery
      query={graphql`
      query  {
        allBooksJson(filter: {Prizes: {regex: "/.[A-Z]/"}}) {
          edges {
            node {
              Title
              Subtitle
              BookID
              Prizes
              PublicationDate
              CoverImageMain
            }
          }
        }
      }
      
      `}
      render={data => (
        <section>
        <h3 className="text-3xl py-5">Award Winners</h3>

        <div className="container px-5 py-5 grid md:grid-cols-5 md:gap-4">
          {data.allBooksJson.edges.map(edge => (
          <>  
          <Link to={`../title/${ edge.node.BookID }`}>
          <BookCard Title={edge.node.Title} Subtitle={edge.node.Subtitle} Author={edge.node.AuthorCredit} Thumb={edge.node.CoverImageMain} Bookid ={edge.node.BookID}  /></Link>
       </>
      ))}
      </div>
      </section>
      )}
    />
  )
}