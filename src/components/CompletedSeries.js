import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import SectionHeader from "./SectionHeader"

const CompletedSeries = () => {
  const data = useStaticQuery(graphql`
  query  {
    allMarkdownRemark(filter: {frontmatter: {type: {eq: "series"}, status: {eq: "completed"}}}, sort: { frontmatter: {title: ASC }}) {
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
  
  `);
  return <section className="overflow-hidden">
  
  <div className="container px-5 py-12 mx-auto">
            <div className="flex flex-col text-center w-full pb-4" id="completed">
<SectionHeader text={'Completed Series'}/>        
<Link to={`#active`}><div className="text-sm text-right font-thin tracking-wide text-ceci-gray-mid uppercase">Active Series <span className="inline-flex items-center mt-4">
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
          <path d="M5 11l7-7 7 7M5 19l7-7 7 7"></path>
        </svg></span></div></Link></div>
     
    <div className="flex flex-wrap text-gray-600">
    {data.allMarkdownRemark.edges.map((edge, index) => (
        
            <div className="w-full flex flex-col py-4" key={`serinfo${index}`}>
                      <span className="inline-block py-2 uppercase text-ceci-gray-mid text-xs font-medium tracking-wider">{ edge.node.frontmatter.seriestype }</span>

      <Link  to={`../series/${ edge.node.frontmatter.seriesID }`} className="sm:text-xl font-serif text-lg text-gray-700 tracking-wide ">
        { edge.node.frontmatter.title }</Link>
        </div>
      ))}
    </div>
  </div>
</section>;
}

export default CompletedSeries


