import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import BookCard from "../components/BookCard"




export default function RecentBooks({ data }) {
   
    const upc = data.upcoming
    const rec = data.recent

 return (
    
        <Layout>
          <div className="container px-5 py-12 mx-auto">
             <h1 className="sm:text-3xl text-2xl p-4 font-sans uppercase text-gray-900 text-center">New and Upcoming Books from UVa Press</h1>

            <section className="py-5 grid grid-cols-2 mx-auto">
            <div className="text-center text-gray-500 mx-auto font-sans tracking-wide py-4">Forthcoming Books</div>
            <a className="text-center  text-gray-500 mx-auto  font-sans tracking-wide py-4" href="#new">Books Published This Year</a>

            </section>
            
            <section>
               <ul className="container px-5 py-5 grid md:grid-cols-5 md:gap-4">
            {upc.edges.map(edge => (
           <>  

           <Link to={`../title/${ edge.node.BookID }`}>
               <BookCard Title={edge.node.Title} 
             Subtitle={edge.node.Subtitle} 
             Author={edge.node.AuthorCredit} 
             Thumb={edge.node.CoverImageMain} 
             Bookid ={edge.node.BookID} 
             pubdate={edge.node.PublicationDate} />
             
             </Link>
        </>
        ))}
        </ul>
            </section>
           
      <section id="new">
           <div className="py-5 text-center text-gray-500 mx-auto font-sans tracking-wide py-4">Recent Releases</div>
          <div className="container px-5 py-5 grid grid-cols-2 md:grid-cols-5 md:gap-4">
            {rec.edges.map(edge => (
           <>  
              <Link to={`../title/${ edge.node.BookID }`}>
                <BookCard Title={edge.node.Title} Subtitle={edge.node.Subtitle} Author={edge.node.AuthorCredit} Thumb={edge.node.CoverImageMain} Bookid ={edge.node.BookID} pubdate={edge.node.PublicationDate} />
                </Link>
           </>
        ))}
        </div>
</section>
        </div>
        </Layout>

 )
}



export const query = graphql`
  query {
    upcoming: allBooksJson(filter: {DaysSincePublication: {lt: 1}}, sort: {fields: DaysSincePublication}) {
        edges {
          node {
            BookID
            Title
            Subtitle
            PublicationDate
            AuthorCredit
            CoverImageMain
          }
        }
      }
      recent: allBooksJson(filter: {DaysSincePublication: {gt: 0, lt: 365}}, sort: {fields: DaysSincePublication}) {
        edges {
          node {
            BookID
            Title
            Subtitle
            PublicationDate
            AuthorCredit
            CoverImageMain
          }
        }
      }
      
  }
`
