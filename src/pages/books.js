import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import BookCard from "../components/BookCard"
import AwardWinners from "../components/AwardWinners"
import SeO from "../components/SeoComponent"
import SectionHeader from "../components/SectionHeader"
import PageHeader from "../components/PageHeader"
import kebabCase from "lodash/kebabCase"


// Helper function to convert text to title case
const toTitleCase = (str) => {
  return str.split(' ').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  ).join(' ');
}

export default function Books({ data }) {
  const rec = data.recent
  const sers = data.series
  const all = data.allbooks
 return (
    
        <Layout>
         <SeO 
         title="Browse all books"/>
                 
<PageHeader text={"Browse our Books"}/>

<section>
<div className="flex flex-col lg:flex-row w-10/12 mx-auto -m-4 border-b-2 border-gray-100 pb-4" id="top">
      
      <div className="p-4 lg:w-1/5">
        <div className="flex h-full greige p-3 flex-col place-content-center items-center">
            <Link to={`#AZ`}><h2 className="text-ceci-gray-dark tracking-wide text-lg uppercase font-thin">A-Z</h2></Link>
        </div>
      </div>
      <div className="p-4 lg:w-1/5">
        <div className="flex  h-full greige p-3 flex-col place-content-center items-center">
        
            
            <Link to={`#recent`}><h2 className="text-ceci-gray-dark text-lg tracking-wide uppercase font-thin">Recently Published</h2></Link>
          
        </div>
      </div>
      <div className="p-4 lg:w-1/5">
        <div className="flex  h-full greige p-3 flex-col place-content-center items-center">
          
            
            
           
            <Link to={`#subjects`}><h2 className="text-ceci-gray-dark text-lg tracking-wide uppercase font-thin">By Subject</h2></Link>
          
        </div>
      </div>
      <div className="p-4 lg:w-1/5">
        <div className="flex h-full greige p-3 flex-col place-content-center items-center">
          
            
            <Link to={`#series`}><h2 className="text-ceci-gray-dark text-lg tracking-wide uppercase font-thin">By Series</h2></Link>
          
        </div>
      </div>

      <div className="p-4 lg:w-1/5">
        <div className="flex h-full greige p-3 flex-col place-content-center items-center">
          
            <Link to={`#awardwinners`}><h2 className="text-ceci-gray-dark uppercae tracking-wide text-lg uppercase font-thin">Award Winners</h2></Link>
          
        </div>
      </div>
      </div>
  </section>
  <section className="py-5 text-ceci-gray-dark border-b-2 border-gray-100" id="imprints">
  <SectionHeader text={"Our imprints"}/> 
  <div className="container md:flex md:flex-wrap py-10 mx-auto items-center">
       
  {data.imprints.group.map((g, index) => (
                   
          <div className="mb-2 px-2 font-display items-center"  key={`imps${index}`}> 

<Link to={`../../imprints/${kebabCase(g.fieldValue) }`} className="text-ceci-gray-dark hover:text-gray-800">{ g.fieldValue } ({g.totalCount})</Link>
        </div>            
           
        ))}
     
    
  </div>


</section> 

<section className="py-5 text-ceci-gray-dark border-b-2 border-gray-100" id="subjects">
  <SectionHeader text={"Our Subjects"}/> 
  <div className="container md:flex md:flex-wrap py-10 mx-auto items-center">
       
  {data.subjects.group.map((g, index) => (
                   
          <div className="mb-2 px-2 font-display items-center"  key={`subs${index}`}> 

<Link to={`../../subject/${kebabCase(g.fieldValue) }`} className="text-ceci-gray-dark hover:text-gray-800"> { toTitleCase(g.fieldValue)  } ({g.totalCount})</Link>
        </div>            
           
        ))}
     
    
  </div>


</section> 

<section className="text-ceci-gray-dark pb-4 py-6 border-b-2 border-gray-100" id="series">
<SectionHeader className="py-4" text={"Our Series"}/><Link to={'../series'}><div className="text-sm text-right uppercase font-thin text-ceci-gray-mid">All Active Series <span className="inline-flex items-center mt-4">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M13 5l7 7-7 7M5 5l7 7-7 7"></path>
              </svg></span></div></Link>
             

              
  <div className="container flex flex-wrap py-10 mx-auto items-center">

      {sers.edges.map((edge, index) => (
                   
           <div className="md:w-1/2 mb-2 px-2 font-display" key={`sers${index}`}>
          <Link to={`../series/${ edge.node.seriesID }`} className="text-ceci-gray-dark hover:text-gray-800">{ edge.node.seriesName }</Link>
        </div>            
            
        ))}
    <Link to={`#top`} className="uppercase font-thin text-ceci-gray-mid text-xs py-4 inline-flex "><span className="pl-2">Go to top </span><svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 11l7-7 7 7M5 19l7-7 7 7"></path>
              </svg></Link>
  </div>
  

</section>




 
<section id="recent" className="py-5 text-gray-700 border-b-2 border-gray-100">
  <SectionHeader text={"Recent Releases"}/>
          <div className="flex flex-wrap gap-2 py-5">
            {rec.edges.map((edge, index) => (
          <BookCard fields={edge.node} key={`rr${index}`}/>
        
          
        ))}  <Link to={`#top`} className="uppercase font-thin text-ceci-gray-mid text-xs py-4 inline-flex "><span className="pl-2">Go to top </span><svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
        <path d="M5 11l7-7 7 7M5 19l7-7 7 7"></path>
      </svg></Link>
        </div>
       



   </section>

<section id="awardwinners">
  <AwardWinners/>
  <Link to={`#top`} className="uppercase font-thin text-ceci-gray-mid text-xs py-4 inline-flex "><span className="pl-2">Go to top </span><svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 11l7-7 7 7M5 19l7-7 7 7"></path>
              </svg></Link>
</section>

   <section id="AZ" className="py-5 text-gray-700 border-b-2 border-gray-100">
  <SectionHeader text={"All Books A - Z "}/>
          <div className="container py-5">
            {all.edges.map((edge, index) => (
           
              <Link to={`../title/${ edge.node.BookID }`} key={`all${index}`}>
                <p className="text-lg py-2 font-serif tracking-wide">{edge.node.Title} - <span className="text-sm">{edge.node.AuthorCredit}</span></p>
                </Link>
           
        ))} <Link to={`#top`} className="uppercase font-thin text-ceci-gray-mid text-xs py-4 inline-flex "><span className="pl-2">Go to top </span><svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
        <path d="M5 11l7-7 7 7M5 19l7-7 7 7"></path>
      </svg></Link>
        </div>
        

   </section>

        </Layout>

 )
}



export const query = graphql`
  query {
    series: allSeriesJson(sort: { seriesName:ASC}) {
      edges {
        node {
            seriesID
            seriesName
        }
      }
    }
    imprints: allBooksJson {
      group(field: {Imprint: {imprintName: SELECT}}) {
        totalCount
        fieldValue
      }
    }
  
    subjects: allBooksJson {
      group(field: {Subjects: {name: SELECT}}) {
        totalCount
        fieldValue
      }
    }
    
  
    recent: allBooksJson(filter: {DaysSincePublication: {gt: 0, lt: 365}}, sort: {DaysSincePublication:ASC}) {
      edges {
        node {
          ...BookQFragment
          Series {
            seriesID
            name
          }
          PublicationDate
        }
      }
    }

    allbooks: allBooksJson(sort: {Title:ASC}) {
      edges {
        node {
          BookID
          Title
          AuthorCredit
        }
      }
    }
  }
`
