import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import BookCard from "../components/BookCard"




export default function RecentBooks({ data }) {
   
    const upc = data.upcoming
    const rec = data.recent

 return (
    
        <Layout>
            <h2 className="py-10">New and Upcoming Books from UVa Press</h2>

            <section className="py-5 grid grid-cols-2 mx-auto">
            <div className="p-3 border-b-4 border-white hover:border-black w-full hover:bg-gray-800 hover:text-white">Forthcoming Books</div>
            <a className="p-3 border-b-4 border-white hover:border-black w-full hover:bg-bg-800 hover:text-white" href="#new"><button > Books Published This Year</button></a>

            </section>
            
            <section>
               <ul className="container px-5 py-5 grid md:grid-cols-5 md:gap-4">
            {upc.edges.map(edge => (
           <>  

           <Link to={`../title/${ edge.node.BookID }`}>
               <BookCard Title={edge.node.Title} 
             Subtitle={edge.node.Subtitle} 
             Author={edge.node.AuthorCredit} 
             Thumb={edge.node.CoverImageThumb} 
             Bookid ={edge.node.BookID} 
             pubdate={edge.node.PublicationDate} />
             
             </Link>
        </>
        ))}
        </ul>
            </section>
           
      <section id="new">
           <h4 className="py-10 text-2xl font-black">Recent Releases</h4>
          <div className="container px-5 py-5 grid grid-cols-2 md:grid-cols-5 md:gap-4">
            {rec.edges.map(edge => (
           <>  
              <Link to={`../title/${ edge.node.BookID }`}>
                <BookCard Title={edge.node.Title} Subtitle={edge.node.Subtitle} Author={edge.node.AuthorCredit} Thumb={edge.node.CoverImageThumb} Bookid ={edge.node.BookID} pubdate={edge.node.PublicationDate} />
                </Link>
           </>
        ))}
        </div>
</section>
        
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
            CoverImageThumb
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
            CoverImageThumb
          }
        }
      }
      
  }
`
