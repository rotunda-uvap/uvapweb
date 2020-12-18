import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import BookCard from "../components/BookCard"
import AwardWinners from "../components/AwardWinners"

export default function Books({ data }) {
  const rec = data.recent
  const sers = data.series
  const subs = data.subjects
 return (
    
        <Layout>
                 <h2 id="top" className="py-10">Browse All Books</h2>
            <div className="container">
 <ul className="grid md:grid-cols-4 md:auto-rows-fr content-center justify-center py-7">
   <li><Link to={`#subjects`}><button className="border-b-4 border-white hover:border-black w-full h-full uppercase">Browse by Subject</button></Link></li>
   <li><Link to={`#series`}><button className="border-b-4 border-white hover:border-black w-full h-full uppercase">Browse by Series</button></Link></li>
   <li><Link to={`#awardwinners`}><button className="border-b-4 border-white hover:border-black w-full h-full uppercase">Award Winners</button></Link></li>
   <li><Link to={`#recent`}><button className="border-b-4 border-white hover:border-black w-full h-full uppercase">Recently Published</button></Link></li>

 </ul>
</div>
   
   <section id="recent">
   <h4 className="py-10 text-2xl  uppercase">Recent Releases</h4>
          <div className="container px-5 py-5 grid md:grid-cols-5 md:gap-4">
            {rec.edges.map(edge => (
           <>  
              <Link key={edge.node.BookID} to={`../title/${ edge.node.BookID }`}>
                <BookCard Title={edge.node.Title} Subtitle={edge.node.Subtitle} Author={edge.node.AuthorCredit} Thumb={edge.node.CoverImageThumb} Bookid ={edge.node.BookID} pubdate={edge.node.PublicationDate} />
                </Link>
           </>
        ))}
        </div>
   </section>
   <section id="awardwinners"><AwardWinners/>
   <Link to={`#top`} className="uppercase text-xs">Go to top</Link></section>

    
   <section id="series" >
             <h2 className="py-5 text-2xl">Series</h2>
            <div className="grid md:grid-cols-4 md:grid-4">
            {sers.distinct.map(serie => (
            <>
           
                <button className="text-md py-3 px-7 hover:bg-black hover:text-white" key={serie}><Link to={`../series/${ serie }`}>{ serie }</Link></button>
            
            
            </>
        ))}
        </div>
        <Link to={`#top`} className="uppercase text-xs">Go to top</Link>
          </section>

        <section id="subjects">
        <h2 className="py-5 text-2xl">Subjects</h2>
          <div className="grid md:grid-cols-4 md:grid-4">
            {subs.distinct.map(d => (
            <>
           
           <button className="text-md py-3 px-7 hover:bg-black hover:text-white" key={d}><Link to={`../../subject/${ d }`}>{ d }</Link></button>
            
            
            </>
        ))}
        </div>
        <Link to={`#top`} className="uppercase text-xs">Go to top</Link>
        </section>



        </Layout>

 )
}



export const query = graphql`
  query {
    series: allBooksJson {
      distinct(field: Series)
  }
  subjects: allBooksJson {
    distinct(field: Subject)
}
    recent: allBooksJson(filter: {DaysSincePublication: {gt: 0, lt: 365}}, sort: {fields: DaysSincePublication}) {
      edges {
        node {
          BookID
          Title
          PublicationDate
          AuthorCredit
          CoverImageThumb
        }
      }
    }
  }
`
