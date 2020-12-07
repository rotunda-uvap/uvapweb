import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import BookCard from "../components/BookCard"

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
   
    <div className="container px-5 py-5 grid md:grid-cols-5 md:gap-4">
          {books.edges.map(edge => (
            <>  
              <Link to={`../title/${ edge.node.BookID }`}>
                <BookCard Title={edge.node.Title} Subtitle={edge.node.Subtitle} Author={edge.node.AuthorCredit} Thumb={edge.node.CoverImageThumb} Bookid ={edge.node.BookID} /></Link>
           </>
        ))}
      </div>

        </Layout>

 )
}



export const query = graphql`
  query {
    allBooksJson(sort: {fields: DaysSincePublication}) {
        edges {
          node {
            BookID
            Subtitle
            Title
            AuthorCredit
            CoverImageThumb
          }
        }
      }
  }
`
