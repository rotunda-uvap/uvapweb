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
  const all = data.allbooks
 return (
    
        <Layout>
         <SeO 
         title="Browse all books"/>
                 
<PageHeader text={"Browse our Books"}/>

<section>
<div className="flex flex-col lg:flex-row w-10/12 mx-auto -m-4 border-b-2 border-gray-100 pb-4" id="top">
      
      <div className="p-4 lg:w-1/5">
        <div className="flex rounded-lg h-full greige p-3 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-ceci-gray-mid text-white flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M19 13l-7 7-7-7m14-8l-7 7-7-7"></path>
               
              </svg>
           
            </div>
            <Link to={`#AZ`}><h2 className="text-ceci-gray-dark text-lg font-thin">A-Z</h2></Link>
          </div>
          
        </div>
      </div>
      <div className="p-4 lg:w-1/5">
        <div className="flex rounded-lg h-full greige p-3 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-ceci-gray-mid text-white flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
               
              </svg>

           
            </div>
            <Link to={`#recent`}><h2 className="text-ceci-gray-dark text-lg font-thin">Recently Published</h2></Link>
          </div>
        </div>
      </div>
      <div className="p-4 lg:w-1/5">
        <div className="flex rounded-lg h-full greige p-3 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-ceci-gray-mid text-white flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path>
               
              </svg>
            
            </div>
            <Link to={`#subjects`}><h2 className="text-ceci-gray-dark text-lg font-thin">By Subject</h2></Link>
          </div>
        </div>
      </div>
      <div className="p-4 lg:w-1/5">
        <div className="flex rounded-lg h-full greige p-3 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-ceci-gray-mid text-white flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path>
               
              </svg>
           
            </div>
            <Link to={`#series`}><h2 className="text-ceci-gray-dark text-lg font-thin">By Series</h2></Link>
          </div>
        </div>
      </div>

      <div className="p-4 lg:w-1/5">
        <div className="flex rounded-lg h-full greige p-3 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-ceci-gray-mid text-white flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path>
               
              </svg>
              
            </div>
            <Link to={`#awardwinners`}><h2 className="text-ceci-gray-dark text-lg font-thin">Award Winners</h2></Link>
          </div>
        </div>
      </div>
      </div>
  </section>

{/* <section className="flex flex-col md:flex-row gap-4 md:gap-8 items-center justify-center py-8 md:py-10 border-b-2 border-gray-100" id="top">
<div className="uppercase text-ceci-gray-mid text-md font-thin tracking-wider font-sans"><Link to={`#AZ`}>A - Z</Link></div>
<div className="uppercase text-ceci-gray-mid text-md font-thin tracking-wider font-sans"><Link to={`#recent`}>Recently Published</Link></div>
<div className="uppercase text-ceci-gray-mid text-md font-thin tracking-wider font-sans"><Link to={`#subjects`}>Browse by Subject</Link></div>
<div className="uppercase text-ceci-gray-mid text-md font-thin tracking-wider font-sans"><Link to={`#series`}>Browse by Series</Link></div>
<div className="uppercase text-ceci-gray-mid text-md font-thin tracking-wider font-sans"><Link to={`#awardwinners`}>Award Winners</Link></div>

</section> */}
 


{/* <div className="p-4 text-center uppercase text-ceci-gray-dark text-sm font-thin tracking-wide mx-auto font-sans"><Link to={'../series'}>See all Active Series</Link></div> */}

<section className="text-ceci-gray-dark pb-4 py-6 border-b-2 border-gray-100" id="series">
<SectionHeader className="py-4" text={"Our Series"}/><Link to={'../series'}><div className="text-sm text-center text-ceci-gray-mid">See all Active Series <span className="inline-flex items-center mt-4">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg></span></div></Link>
  <div className="container flex flex-wrap py-10 mx-auto items-center">

      {sers.edges.map(edge => (
            <>           
           <div className="md:w-1/2 mb-2 px-2 font-display" key={edge.node.id}>
          <Link to={`../series/${ edge.node.id }`} className="text-ceci-gray-dark hover:text-gray-800">{ edge.node.seriesName }</Link>
        </div>            
            </>
        ))}
    
  </div>
  <Link to={`#top`} className="uppercase text-ceci-gray-mid text-xs">Go to top</Link>

</section>


<section className="py-5 text-ceci-gray-dark border-b-2 border-gray-100" id="subjects">
  <SectionHeader text={"Our Subjects"}/> 
  <div className="container md:flex md:flex-wrap py-10 mx-auto items-center">
       
      {subs.edges.map(edge => (
            <>           
          <div className="mb-2 px-2 font-display items-center" key={edge.node.subjectID}> 

          <Link to={`../../subject/${ edge.node.subjectID }`} className="text-ceci-gray-dark hover:text-gray-800">{ edge.node.subjectName }</Link>
        </div>            
            </>
        ))}
     
    
  </div>
  <Link to={`#top`} className="uppercase text-ceci-gray-mid text-xs">Go to top</Link>


</section> 

 
<section id="recent" className="py-5 text-gray-700 border-b-2 border-gray-100">
  <SectionHeader text={"Recent Releases"}/>
          <div className="container grid grid-cols-2 md:flex md:flex-wrap gap-2 py-5">
            {rec.edges.map(edge => (
           <>  
              <Link key={edge.node.BookID} to={`../title/${ edge.node.BookID }`}>
                <BookCard Title={edge.node.Title} Subtitle={edge.node.Subtitle} Author={edge.node.AuthorCredit} Thumb={edge.node.CoverImageMain} Bookid ={edge.node.BookID} pubdate={edge.node.PublicationDate} />
                </Link>
           </>
        ))}
        </div>
        <Link to={`#top`} className="uppercase text-ceci-gray-mid text-xs">Go to top</Link>

   </section>

<section id="awardwinners">
  <AwardWinners/>
  <Link to={`#top`} className="uppercase text-ceci-gray-mid text-xs">Go to top</Link>
</section>

   <section id="AZ" className="py-5 text-gray-700 border-b-2 border-gray-100">
  <SectionHeader text={"All Books A - Z "}/>
          <div className="container py-5">
            {all.edges.map(edge => (
           <>  
              <Link key={edge.node.BookID} to={`../title/${ edge.node.BookID }`}>
                <p className="text-md py-2 font-display">{edge.node.Title} - <span className="text-sm">{edge.node.AuthorCredit}</span></p>
                {/* <BookCard Title={edge.node.Title} Subtitle={edge.node.Subtitle} Author={edge.node.AuthorCredit} Thumb={edge.node.CoverImageMain} Bookid ={edge.node.BookID} pubdate={edge.node.PublicationDate} /> */}
                </Link>
           </>
        ))}
        </div>
        <Link to={`#top`} className="uppercase text-ceci-gray-mid text-xs">Go to top</Link>

   </section>

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

    allbooks: allBooksJson(sort: {fields: Title}) {
      edges {
        node {
          BookID
          Title
          Subtitle
          AuthorCredit
          CoverImageMain
        }
      }
    }
  }
`
