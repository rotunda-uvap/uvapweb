import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import BookCard from "../components/BookCard"
import SeO from "../components/SeoComponent"
import PageHeader from "../components/PageHeader"



export default function RecentBooks({ data }) {
   
    const upc = data.upcoming
    const rec = data.recent

 return (
    
        <Layout>
          <SeO title="Books most recently published by the University of Virginia Press"/>
          <div className="container px-5 py-12 mx-auto">
          <PageHeader text={'New and Forthcoming Books'}/>

            <section className="py-5 grid grid-cols-2 mx-auto">
            {/* <div className="text-center text-gray-500 mx-auto font-sans tracking-wide py-4">Forthcoming Books</div> */}
            {/* <a className="text-center  text-gray-500 mx-auto  font-sans tracking-wide py-4" href="#new">Books Published This Year</a> */}
            <span className="text-center font-medium pb-4 text-gray-500"><Link to={'#upc'}>
            Forthcoming Books <span className="inline-flex items-center mt-4">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M16 17l-4 4m0 0l-4-4m4 4V3"></path>
              </svg></span>
              </Link></span>
            <span className="font-medium text-center pb-4 text-gray-500"><Link to={'#new'}>
            Books Published This Year <span className="inline-flex items-center mt-4">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg></span>
              </Link></span>
            </section>
            
            <section id="upc">
               <ul className="container grid grid-cols-2 md:flex md:flex-wrap gap-2 py-5">
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
          <div className="container grid grid-cols-2 md:flex md:flex-wrap gap-2 py-5">
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
