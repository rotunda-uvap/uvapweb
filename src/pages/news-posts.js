import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"


export default function Articles({ data }) {
    const news = data.allMarkdownRemark
 return (
    
        <Layout>
          <h2 className="py-10">All News Posts</h2>
            {news.edges.map(edge => (
            <>
            <div className="mt-6">
                    <div className="max-w-4xl px-10 py-6 bg-white rounded-lg shadow-md">
                        <div className="flex justify-between items-center"><span class="font-light text-gray-800">{edge.node.frontmatter.date}</span><span
                                className="px-2 py-1 bg-gray-600 text-gray-100 font-bold rounded hover:bg-gray-500">{edge.node.frontmatter.type}</span>
                        </div>
                        <div className="mt-2"><Link className="text-2xl text-gray-700 font-bold hover:underline" to={`../${ edge.node.frontmatter.type }${ edge.node.fields.slug }`}>{ edge.node.frontmatter.title }</Link>
                            <p className="mt-2 text-gray-600" dangerouslySetInnerHTML={{ __html: edge.node.frontmatter.description.split(' ').splice(0, 50).join(' ') + '...' }}></p>
                        </div>
                        <div className="flex justify-between items-center mt-4"><Link  to={`../${ edge.node.frontmatter.type }${ edge.node.fields.slug }`}>Read more</Link>
                                
                            
                        </div>
                    </div>
            </div>
            </>
        ))}
        </Layout>

 )
}



export const query = graphql`
  query {
    allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "news"}}}) {
      edges {
          node {
            html
            frontmatter {
              title
              type
              relbook
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
