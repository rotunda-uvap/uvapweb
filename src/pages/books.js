import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import BookCard from "../components/BookCard"
import AwardWinners from "../components/AwardWinners"
import SeO from "../components/SeoComponent"
import SectionHeader from "../components/SectionHeader"
import PageHeader from "../components/PageHeader"

export default function Books({ data }) {
  const rec = data.recent
  const sers = data.series
  const subs = data.subjects
 return (
    
        <Layout>
         <SeO 
         title="Browse all books"/>
                 {/* <section className="text-gray-600 body-font">
  <div className="container px-5 py-12 mx-auto">
  <h1 id="top" className="sm:text-3xl text-2xl p-4 mb-4 font-sans uppercase text-gray-900 text-center">Browse All Books</h1>
  <div className="flex flex-wrap -m-4 text-center">

  <div className="p-4 md:w-1/4 sm:w-1/2 w-full"><Link to={`#recent`}>
        <div className="px-4 py-6">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-gray-500 w-8 h-8 mb-3 inline-block" viewBox="0 0 24 24">
         
            <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
          </svg>
          <h2 className="title-font font-medium text-xl text-gray-900">Recently Published</h2>
        </div></Link>
      </div>
      
        <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
       <Link to={`#subjects`}> <div className="px-4 py-6">
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-gray-500 w-8 h-8 mb-3 inline-block" viewBox="0 0 24 24">
            
            <path d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path>
          </svg>
          <h2 className="title-font font-medium text-xl text-gray-900">Browse by Subject</h2>
        </div></Link>
      </div>
      
     
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full"><Link to={`#series`}>
        <div className="px-4 py-6">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-gray-500 w-8 h-8 mb-3 inline-block" viewBox="0 0 24 24">
            
            <path d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path>
          </svg>
          
          <h2 className="title-font font-medium text-xl text-gray-900">Browse by Series</h2>
        </div></Link>
      </div>
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full"><Link to={`#awardwinners`}>
        <div className="px-4 py-6">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-gray-500 w-8 h-8 mb-3 inline-block" viewBox="0 0 24 24">
            <path d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path>
          </svg>
          
          <h2 className="title-font font-medium text-xl text-gray-900">Award Winners</h2>
        </div>
      </Link></div>
      
      </div>

    </div></section> */}
<PageHeader text={"Browse our Books"}/>
<section className="flex flex-wrap gap-4 md:gap-8 items-center justify-center py-8 md:py-10 border-b-2 border-gray-100" id="top">
<div className="uppercase text-gray-500 text-md font-thin tracking-widest font-sans"><Link to={`#recent`}>Recently Published</Link></div>
<div className="uppercase text-gray-500 text-md font-thin tracking-widest font-sans"><Link to={`#subjects`}>Browse by Subject</Link></div>
<div className="uppercase text-gray-500 text-md font-thin tracking-widest font-sans"><Link to={`#series`}>Browse by Series</Link></div>
<div className="uppercase text-gray-500 text-md font-thin tracking-widest font-sans"><Link to={`#awardwinners`}>Award Winners</Link></div>

</section>
 
<SectionHeader className="py-4" text={"Our Series"}/>
<div className="p-4 text-center uppercase text-gray-700 text-xs font-thin tracking-widest mx-auto font-sans"><Link to={'../series'}>See all Active Series</Link></div>
<section className="text-gray-700 py-4 border-b-2 border-gray-100" id="series">

  <div className="container flex flex-wrap py-10 mx-auto items-center">

      {sers.edges.map(edge => (
            <>           
           <div className="md:w-1/2 mb-2 px-2 font-display" key={edge.node.id}>
          <Link to={`../series/${ edge.node.id }`} className="text-gray-600 hover:text-gray-800">{ edge.node.seriesName }</Link>
        </div>            
            </>
        ))}
    
  </div>
  <Link to={`#top`} className="uppercase text-gray-500 text-xs">Go to top</Link>

</section>


<section className="py-5 text-gray-700 border-b-2 border-gray-100" id="subjects">
  <SectionHeader text={"Our Subjects"}/> 
  <div className="container flex flex-wrap py-10 mx-auto items-center">
       
      {subs.edges.map(edge => (
            <>           
           <div className="mb-2 px-4 font-display items-center" key={edge.node.subjectid}>
          <Link to={`../../subject/${ edge.node.subjectID }`} className="text-gray-600 hover:text-gray-800">{ edge.node.subjectName }</Link>
        </div>            
            </>
        ))}
     
    
  </div>
  <Link to={`#top`} className="uppercase text-gray-500 text-xs">Go to top</Link>

</section> 

 
<section id="recent" className="py-5 text-gray-700 border-b-2 border-gray-100">
  <SectionHeader text={"Recent Releases"}/>
          <div className="container flex flex-wrap gap-2 py-5">
            {rec.edges.map(edge => (
           <>  
              <Link key={edge.node.BookID} to={`../title/${ edge.node.BookID }`}>
                <BookCard Title={edge.node.Title} Subtitle={edge.node.Subtitle} Author={edge.node.AuthorCredit} Thumb={edge.node.CoverImageMain} Bookid ={edge.node.BookID} pubdate={edge.node.PublicationDate} />
                </Link>
           </>
        ))}
        </div>
        <Link to={`#top`} className="uppercase text-gray-500 text-xs">Go to top</Link>
   </section>

<section id="awardwinners">
  <AwardWinners/>
   <Link to={`#top`} className="text-gray-500 uppercase text-xs">Go to top</Link></section>



        </Layout>

 )
}



export const query = graphql`
  query {
    series: allSeriesJson(sort: {order: ASC, fields: seriesName}) {
      edges {
        node {
            id
            seriesName
        }
      }
    }
  subjects: allSubjectsJson(sort: {fields: subjectName, order: ASC}) {
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
          CoverImageMain
        }
      }
    }
  }
`
