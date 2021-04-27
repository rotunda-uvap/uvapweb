import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

export default function ActiveSeries() {
  return (
    <StaticQuery
      query={graphql`
      query  {
        allMarkdownRemark(filter: {frontmatter: {type: {eq: "series"}, status: {eq: "active"}}}) {
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
    <h5 className="text-2xl font-light">Active Series</h5>
    <div className="flex flex-wrap text-gray-600 body-font">
    {data.allMarkdownRemark.edges.map(edge => (
        
            <div className="px-6 py-3  flex flex-col items-start">
                      <span className="inline-block py-1 px-2 rounded bg-indigo-50 text-gray-500 text-xs font-medium tracking-widest">{ edge.node.frontmatter.seriestype }</span>

      <Link  to={`../series/${ edge.node.frontmatter.seriesID }`}><h2 className="sm:text-2xl text-xl title-font font-medium text-gray-900 mt-4 mb-4">{ edge.node.frontmatter.title }</h2></Link>
        <p className="leading-relaxed"><span dangerouslySetInnerHTML={{ __html: edge.node.html}}/></p>
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