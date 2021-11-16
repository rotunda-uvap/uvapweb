import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import SectionHeader from "./SectionHeader"

export default function CompletedSeries() {
  return (
    <StaticQuery
      query={graphql`
      query  {
        allMarkdownRemark(filter: {frontmatter: {type: {eq: "series"}, status: {eq: "completed"}}}, sort: {fields: frontmatter___title }) {
            edges {
              node {
                frontmatter {
                  title
                  editors
                  seriesID
                  seriestype
                }
                html
              }
            }
          }
      }
      
      `}
      render={data => (
        
        <section className="overflow-hidden">
  
  <div className="container px-5 py-12 mx-auto">
            <div className="flex flex-col text-center w-full">
            <SectionHeader text={'Completed Series'}/> 
         </div>
         <Link to={`#active`}><div className="text-sm text-center text-ceci-gray-dark">Active Series <span className="inline-flex items-center mt-4">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg></span></div></Link>

    <div className="flex flex-wrap text-gray-600 body-font">
    {data.allMarkdownRemark.edges.map(edge => (
        
            <div className="px-6 py-3  w-full flex flex-col items-start">
                      <span className="inline-block py-1 px-2 rounded bg-ceci-gray-light uppercase text-ceci-gray-dark text-xs font-medium tracking-widest">{ edge.node.frontmatter.seriestype }</span>

      <Link  to={`../series/${ edge.node.frontmatter.seriesID }`}><h2 className="sm:text-xl text-lg text-gray-700 tracking-wider font-thin mt-4 mb-4">{ edge.node.frontmatter.title }</h2></Link>
        <article className="cms leading-relaxed" dangerouslySetInnerHTML={{ __html: edge.node.html}}/>
        <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
          <span className="text-gray-500 inline-flex items-center">{edge.node.frontmatter.editors}
            
          </span>
          
        </div>
        </div>
      ))}
    </div>
  </div>
</section>
        
      )}
    />
  )
}