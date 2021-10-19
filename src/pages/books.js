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
<section className="flex flex-col md:flex-row gap-4 md:gap-8 items-center justify-center py-8 md:py-10 border-b-2 border-gray-100" id="top">
<div className="uppercase text-gray-500 text-md font-thin tracking-widest font-sans"><Link to={`#AZ`}>A - Z</Link></div>
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
          <div className="container grid grid-cols-2 md:flex md:flex-wrap gap-2 py-5">
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
        <Link to={`#top`} className="uppercase text-gray-500 text-xs">Go to top</Link>
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
