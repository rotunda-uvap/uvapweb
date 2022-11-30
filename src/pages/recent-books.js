import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import BookCard from "../components/BookCard"
import SeO from "../components/SeoComponent"
import PageHeader from "../components/PageHeader"
import SectionHeader from "../components/SectionHeader"



export default function RecentBooks({ data }) {
   
    const upc = data.upcoming
    const rec = data.recent

 return (
    
        <Layout>
          <SeO title="Books most recently published by the University of Virginia Press"/>
          <div className="container px-5 py-12 mx-auto" id="top">
          <PageHeader text={'New and Forthcoming Books'}/>

            <section className="py-5 flex md:flex-row items-center gap-4 md:gap-8 justify-center flex-col mx-auto border-b">
       
            <span className="text-center font-thin pb-4 text-ceci-gray-mid tracking-wide uppercase"><Link to={'#upc'}>
            Forthcoming Books 
              </Link></span>
            <span className="font-thin text-center pb-4 text-ceci-gray-mid tracking-wide uppercase"><Link to={'#new'}>
            Books Published This Year 
              </Link></span>
            </section>
            
           
           
      <section id="new">
      <SectionHeader className="py-4" text={"Recent Releases"}/>
          <div className="container flex flex-wrap gap-2 py-5">
            {rec.edges.map((edge, index) => (
           
              <BookCard fields={edge.node} key={`rec${index}`}/>
          
        ))}<Link to={`#top`} className="uppercase text-ceci-gray-mid text-xs p-2 ">Go to top</Link>
        </div>
        
</section>
<section id="upc">
            <SectionHeader className="py-4" text={"Coming Soon"}/>
               <ul className="container flex flex-wrap gap-2 py-5">
            {upc.edges.map((edge, index) => (
           

          <BookCard fields={edge.node} key={`cs${index}`}/>
             
           
        ))}
        </ul>
        <Link to={`#top`} className="uppercase text-ceci-gray-mid text-xs p-2 ">Go to top</Link>
            </section>
        </div>
        </Layout>

 )
}



export const query = graphql`
  query {
    upcoming: allBooksJson(filter: {DaysSincePublication: {lt: 1}}, sort: { DaysSincePublication:ASC}) {
        edges {
          node {
            ...BookQFragment
            PublicationDate
          }
        }
      }
      recent: allBooksJson(filter: {DaysSincePublication: {gt: 0, lt: 365}}, sort: {DaysSincePublication:ASC}) {
        edges {
          node {
            ...BookQFragment
            PublicationDate
          }
        }
      }
      
  }
`
