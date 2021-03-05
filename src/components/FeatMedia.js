import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import {FaArrowAltCircleRight} from "react-icons/fa"

export default function FeatMedia() { 
  return (
    <StaticQuery
      query={graphql`
        query MediaQuery {
            media: allMarkdownRemark(limit:1, filter: {frontmatter: {templateKey: {eq: "news"}, type: {eq: "media"}}},sort: {fields: frontmatter___date, order: DESC}) {
                edges {
                  node {
                    id
                    frontmatter {
                      description
                      date(formatString: "YYYY-MM-DD")
                      templateKey
                      type
                      title
                      related_book {
                      id
                      Title
                      }
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
        <section className="md:col-span-2 mr-5">
            {data.media.edges.map(edge => (
            <>
              <div className="flex flex-row">
                  
                    {data.media.edges[0].node.frontmatter.related_book ? <img src={'https://www.upress.virginia.edu/sites/default/files/covers/' + data.media.edges[0].node.frontmatter.related_book[0].id + "_M.jpg"} alt="cover" className="object-contain self-center justify-self-center"/> : <div></div>}
                  
                    <div className="py-6 px-10 ">
                        <div className="flex items-center"><span class="font-light text-gray-800">{data.media.edges[0].node.frontmatter.date}</span>
                        {/* <span className="px-2 py-1 bg-gray-600 text-gray-100 font-bold rounded hover:bg-gray-500">{edge.node.frontmatter.type}</span> */}
                        </div>
                        <div className="mt-2"><Link className="text-xl text-gray-700 font-bold hover:underline" to={`../${ data.media.edges[0].node.frontmatter.type }${ data.media.edges[0].node.fields.slug }`}>{ edge.node.frontmatter.title }</Link>
                          {edge.node.frontmatter.description &&  <p className="mt-2 text-gray-600 font-light" dangerouslySetInnerHTML={{ __html: data.media.edges[0].node.frontmatter.description.split(' ').splice(0, 50).join(' ') + '...' }}></p>}
                        </div>
                        <div className="flex justify-between items-center mt-4"><Link  to={`../${ data.media.edges[0].node.frontmatter.type }${ data.media.edges[0].node.fields.slug }`}><FaArrowAltCircleRight className="inline mx-4"/> Read more</Link>
                                
                            
                    </div>
                    </div>
              </div>
            <hr className="my-10"/>
            </>))}
            </section>
      )}
    />
  )
}