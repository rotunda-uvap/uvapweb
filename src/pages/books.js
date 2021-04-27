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
          <h1 id="top" className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Browse All Books</h1>

                 

                 <section className="text-gray-600 body-font">
  <div className="container px-5 py-12 mx-auto">
  <div className="flex flex-wrap -m-4 text-center">
  <div className="p-4 md:w-1/4 sm:w-1/2 w-full"><Link to={`#recent`}>
        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="text-gray-500 w-8 h-8 mb-3 inline-block" viewBox="0 0 24 24">
         
            <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
          </svg>
          <h2 className="title-font font-medium text-xl text-gray-900">Recently Published</h2>
        </div></Link>
      </div>
      
        <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
       <Link to={`#subjects`}> <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="text-gray-500 w-8 h-8 mb-3 inline-block" viewBox="0 0 24 24">
            
            <path d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path>
          </svg>
          <h2 className="title-font font-medium text-xl text-gray-900">Browse by Subject</h2>
        </div></Link>
      </div>
      
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full"><Link to={`#series`}>
        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="text-gray-500 w-8 h-8 mb-3 inline-block" viewBox="0 0 24 24">
            
            <path d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path>
          </svg>
          
          <h2 className="title-font font-medium text-xl text-gray-900">Browse by Series</h2>
        </div></Link>
      </div>
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full"><Link to={`#awardwinners`}>
        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="text-gray-500 w-8 h-8 mb-3 inline-block" viewBox="0 0 24 24">
            <path d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path>
          </svg>
          
          <h2 className="title-font font-medium text-xl text-gray-900">Award Winners</h2>
        </div>
      </Link></div>
      
      </div>

    </div></section>

  {/*           <div className="container">
 <ul className="grid md:grid-cols-4 md:auto-rows-fr content-center justify-center py-7">
 <li><Link to={`#recent`}><button className="border-b-4 border-white hover:border-black w-full h-full uppercase">Recently Published</button></Link></li>
<li><Link to={`#subjects`}><button className="border-b-4 border-white hover:border-black w-full h-full uppercase">Browse by Subject</button></Link></li>
   <li><Link to={`#series`}><button className="border-b-4 border-white hover:border-black w-full h-full uppercase">Browse by Series</button></Link></li>
   <li><Link to={`#awardwinners`}><button className="border-b-4 border-white hover:border-black w-full h-full uppercase">Award Winners</button></Link></li>

 </ul>
</div> */}
   
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
      {sers.edges.map(edge => (
            <>           
           <li className="lg:w-1/3 mb-1 w-1/2" key={edge.node.id}>
          <Link to={`../series/${ edge.node.id }`} className="text-gray-600 hover:text-gray-800">{ edge.node.seriesName }</Link>
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
      {subs.edges.map(edge => (
            <>
           
           <li className="lg:w-1/3 mb-1 w-1/2" key={edge.node.subjectID}>
          <Link to={`../../subject/${ edge.node.subjectID }`} className="text-gray-600 hover:text-gray-800">{ edge.node.subjectName }</Link>
        </li>
            
            </>
        ))}
        
       
      </nav>
    </div>
  </div>
</section>
   
<section id="recent">
<h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Recent Releases</h1>
 
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
    series: allSeriesJson {
      edges {
        node {
            id
            seriesName
        }
      }
    }
  subjects: allSubjectsJson {
    edges {
      node {
          subjectID
          subjectName
        
      }
    }
  }


    recent: allBooksJson(filter: {DaysSincePublication: {gt: 0, lt: 365}}, sort: {fields: DaysSincePublication}) {
      edges {
        node {
          BookID
          Title
          Series {
            seriesID
            name
          }
          Subtitle
          PublicationDate
          AuthorCredit
          CoverImageThumb
        }
      }
    }
  }
`
