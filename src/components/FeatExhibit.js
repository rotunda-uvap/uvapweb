import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
export default function FeatExhibit() {
  return (
    <StaticQuery
      query={graphql`
        query ExhibitQuery {
            exhibit: allMarkdownRemark(limit:1, filter: {frontmatter: {templateKey: {eq: "exhibit"}, featured: {eq: true}}}) {
                edges {
                  node {
                    frontmatter {
                      templateKey
                      title
                    }
                    fields {
                      slug
                    }
                  }
                }
              } 
        }
      `}
      render={data => (
        <article className="flex flex-wrap place-content-center p-5 hover:bg-black hover:text-white">
              <div><Link to={'/all-exhibits'}><button className="px-4 py-2 border-2 border-gray-700 uppercase">exhibits</button></Link></div>
               <div className="mx-auto w-4/5"><Link to={'/exhibits' + data.exhibit.edges[0].node.fields.slug}><h3 className="text-2xl font-black uppercase py-5 text-center" >{data.exhibit.edges[0].node.frontmatter.title}</h3></Link>
                </div>
                  <Link to={'/all-exhibits'}><button className="rounded bg-gray-400 text-white text-lg px-5 py-2 text-center uppercase">see all</button></Link>
        </article>
      )}
    />
  )
}