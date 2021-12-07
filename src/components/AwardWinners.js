import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import BookCard from "./BookCard"
import SectionHeader from "./SectionHeader"

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
<SectionHeader text={'Award Winners'}/>
        <div className="container px-5 py-5 flex flex-wrap">
          {data.allBooksJson.edges.map((edge, index) => (
         
          <Link to={`../title/${ edge.node.BookID }`} key={index}>
          <BookCard Title={edge.node.Title} Subtitle={edge.node.Subtitle} Author={edge.node.AuthorCredit} Thumb={edge.node.CoverImageMain} Bookid ={edge.node.BookID}  /></Link>
      
      ))}
      </div>
      </section>
      )}
    />
  )
}