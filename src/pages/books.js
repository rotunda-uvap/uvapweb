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
   

   


<section className="text-gray-700 body-font" id="series">
  <div className="container flex flex-wrap px-5 py-24 mx-auto items-center">
    <div className="md:w-1/3 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-300">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Our Series</h1>
      <p className="leading-relaxed text-base">This paragraph should have introductory information about our series.</p>
      <Link className="text-teal-500 inline-flex items-center mt-4">Learn More
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </Link>
    </div>
    <div className="flex flex-col md:w-2/3 md:pl-12">
      <h2 className="title-font font-medium text-gray-800 tracking-widest text-sm mb-3">SERIES CATEGORIES</h2>
      <nav className="flex flex-wrap list-none -mb-1">
      {sers.distinct.map(serie => (
            <>
           
           <li className="lg:w-1/3 mb-1 w-1/2" key={serie}>
          <Link to={`../series/${ serie }`} className="text-gray-600 hover:text-gray-800">{ serie }</Link>
        </li>
            
            </>
        ))}
        
       
      </nav>
    </div>
  </div>
</section>

<section className="text-gray-700 body-font" id="subjects">
  <div className="container flex flex-wrap px-5 py-24 mx-auto items-center">
    <div className="md:w-1/3 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-300">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Our Subject Categories</h1>
      <p className="leading-relaxed text-base">This paragraph should have introductory information about our subjects.</p>
      <Link className="text-teal-500 inline-flex items-center mt-4">Learn More
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </Link>
    </div>
    <div className="flex flex-col md:w-2/3 md:pl-12">
      <h2 className="title-font font-medium text-gray-800 tracking-widest text-sm mb-3">CATEGORIES</h2>
      <nav className="flex flex-wrap list-none -mb-1">
      {subs.distinct.map(sub => (
            <>
           
           <li className="lg:w-1/3 mb-1 w-1/2" key={sub}>
          <Link to={`../../subject/${ sub }`} className="text-gray-600 hover:text-gray-800">{ sub }</Link>
        </li>
            
            </>
        ))}
        
       
      </nav>
    </div>
  </div>
</section>
   
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
        <Link to={`#top`} className="uppercase text-xs">Go to top</Link>
   </section>

<section id="awardwinners"><AwardWinners/>
   <Link to={`#top`} className="uppercase text-xs">Go to top</Link></section>



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
          Subtitle
          PublicationDate
          AuthorCredit
          CoverImageThumb
        }
      }
    }
  }
`
