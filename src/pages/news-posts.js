import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/SeoComponent"
export default function Articles({ data }) {
    const news = data.allMarkdownRemark
 return (
    
        <Layout>
          <SEO/>
           <div className="container px-5 py-12 mx-auto">
           <h1 className="sm:text-3xl text-2xl p-4 font-sans uppercase text-gray-900 text-center">All News</h1>
          
            {news.edges.map(edge => (
            <>
            <div className="grid grid-cols-3">
                  {edge.node.frontmatter.related_book ? <img src={'https://www.upress.virginia.edu/sites/default/files/covers/' + edge.node.frontmatter.related_book[0].id + "_M.jpg"} alt="cover" className="justify-self-center object-cover"/> : <div></div>}
                    <div className="py-6 bg-white col-span-2">
                        <div className="flex justify-between items-center"><span className="font-light text-gray-800">{edge.node.frontmatter.date}</span><span
                                className="px-2 py-1 bg-gray-600 text-gray-100 font-bold rounded hover:bg-gray-500">{edge.node.frontmatter.type}</span>
                        </div>
                        <div className="mt-2"><Link className="text-2xl text-gray-700 font-bold hover:underline" to={`../${ edge.node.frontmatter.type }${ edge.node.fields.slug }`}>{ edge.node.frontmatter.title }</Link>
                          {edge.node.frontmatter.description &&  <article className="mt-2 text-gray-600 font-light leading-relaxed text-base cms" dangerouslySetInnerHTML={{ __html: edge.node.frontmatter.description.split(' ').splice(0, 50).join(' ') + '...' }}></article>}
                        </div>
                        <div className="flex justify-between items-center mt-4"><Link  to={`../${ edge.node.frontmatter.type }${ edge.node.fields.slug }`}>Read more</Link>
                                
                            
                        </div>
                    </div>
            </div>
            </>
        ))}</div>
        </Layout>

 )
}



export const query = graphql`
  query {
    allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "news"}}},sort: {fields: frontmatter___date, order: DESC}) {
      edges {
          node {
            html
            frontmatter {
              title
              type
              related_book {
              id
              Title
            }
              description
              date(formatString: "YYYY-MM-DD")
            }
            fields {
              slug
            }
          }
        }
      }
  }
`
