import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import BookCard from "./BookCard"



export default function CurrentList() {
  return (
    <StaticQuery
      query={graphql`
      query  {
        allBooksJson(filter: {List: {eq: "Fall 2021"}}) {
          edges {
            node {
              Title
              Subtitle
              BookID
              AuthorCredit
              PublicationDate
              CoverImageMain
            }
          }
        }
      }
      
      `} 
      render={data => (
        <section>
       

      <div className="container px-5 py-5 flex flex-wrap ">
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