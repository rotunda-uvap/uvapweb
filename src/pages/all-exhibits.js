import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SeO from "../components/SeoComponent"


export default function AllExhibits({ data }) {
    const exhibitList = data.allMarkdownRemark
 return (
    
        <Layout>
          <SeO title="Current Exhibits"/>
          <div className="container px-5 py-12 mx-auto">
          <h1 className="sm:text-3xl text-2xl p-4 font-sans uppercase text-gray-900 text-center">Current Exhibits</h1>
            {exhibitList.edges.map(edge => (
            <>
             <div className="mt-6">
                    <div className="max-w-4xl px-10 py-6 bg-white rounded-lg shadow-md">
                        <div className="flex justify-between items-center"><span className="font-light text-gray-800">{edge.node.frontmatter.date}</span>
                        </div>
                        <div className="mt-2"><Link className="text-2xl text-gray-700 font-bold hover:underline" to={`../exhibits${ edge.node.fields.slug }`}>{ edge.node.frontmatter.title }</Link>
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
    allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "exhibit"}}}) {
        edges {
          node {
            html
            frontmatter {
              title
              templateKey
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