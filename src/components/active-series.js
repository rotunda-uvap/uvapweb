import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import SectionHeader from "./SectionHeader"
import sanitizeHtml from 'sanitize-html';
export default function ActiveSeries() {
  return (
    <StaticQuery
      query={graphql`
      query  {
        allMarkdownRemark(filter: {frontmatter: {type: {eq: "series"}, status: {eq: "active"}}}, sort: {fields: frontmatter___title }) {
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
            <div className="flex flex-col text-center w-full pb-4" id="active">
<SectionHeader text={'Active Series'}/>        
 <Link to={`#completed`}><div className="text-sm text-right font-thin tracking-wide text-ceci-gray-mid uppercase">Completed Series <span className="inline-flex items-center mt-4">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M19 13l-7 7-7-7m14-8l-7 7-7-7"></path>
              </svg></span></div></Link></div>

            

    <div className="flex flex-wrap text-gray-600">
    {data.allMarkdownRemark.edges.map((edge, index) => (
        
            <div className="w-full flex flex-col" key={`serinfo${index}`}>
                      <span className="inline-block py-2 uppercase text-ceci-gray-mid text-xs font-medium tracking-wider">{ edge.node.frontmatter.seriestype }</span>

      <Link  to={`../series/${ edge.node.frontmatter.seriesID }`}>
        <div className="sm:text-xl text-lg text-gray-700 tracking-wide font-serif ">{ edge.node.frontmatter.title }</div></Link>
        <article className="cms leading-relaxed py-2" dangerouslySetInnerHTML={{ __html: sanitizeHtml(edge.node.html)}}/>        <div className="flex items-center flex-wrap pb-4 my-2 border-b-2 border-gray-100  mt-auto w-full">
          <span className="text-gray-600 leading-relaxed font-serif ml-4 cms">{edge.node.frontmatter.editors}
            
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