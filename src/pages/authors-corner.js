import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SeO from "../components/SeoComponent"
import PageHeader from "../components/PageHeader"
export default function Articles({ data }) {
    const news = data.allMarkdownRemark
 return (
    
        <Layout>
          <SeO/>
           <div className="container px-5 py-12 mx-auto">
<PageHeader text={"Author's Corner"}/>          
            {news.edges.map(edge => (
            <>
            <div className="grid grid-cols-3">
                  {edge.node.frontmatter.related_book ? <img src={'https://ik.imagekit.io/uvapress/mediums/' + edge.node.frontmatter.related_book[0].id + "_M.jpg"} alt="cover" className="justify-self-center object-cover"/> : <div></div>}
                    <div className="py-6 bg-white col-span-2">
                        <div className="flex justify-between items-center"><span className="font-light text-gray-800">{edge.node.frontmatter.date}</span>
                        </div>
                        <div className="mt-2"><Link className="text-2xl text-gray-700 font-bold hover:underline" to={`../${ edge.node.frontmatter.type }${ edge.node.fields.slug }`}>{ edge.node.frontmatter.title }</Link>
                          {edge.node.frontmatter.description &&  <article className="mt-2 text-gray-600 font-light leading-relaxed text-base cms" dangerouslySetInnerHTML={{ __html: edge.node.frontmatter.description.split(' ').splice(0, 50).join(' ') + '...' }}></article>}
                        </div>
                        <div className="flex justify-between items-center mt-4"><Link  to={`../author-corner${ edge.node.fields.slug }`}>Read more</Link>
                                
                            
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
    allMarkdownRemark(filter: {frontmatter: {type: {eq: "author-corner"}}},sort: {fields: frontmatter___date, order: DESC}) {
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
