import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SeO from "../components/SeoComponent"
import PageHeader from "../components/PageHeader"

export default function AllExhibits({ data }) {
    const exhibitList = data.allMarkdownRemark
 return (
    
        <Layout>
          <SeO title="Current Exhibits"/>
          <div className="container px-5 py-2 mx-auto">
<PageHeader text={"Exhibits"}/>            {exhibitList.edges.map((edge, index) => (
           
             <div key={`ex${index}`}>
                    <div className="px-10">
                        <div className="mt-2"><Link className="text-lg font-display text-gray-700 tracking-wider hover:underline" to={`../exhibits/${ edge.node.frontmatter.exhibit_slug }`}>{ edge.node.frontmatter.title }</Link>
                        </div>
                    </div>
            </div>
            
           
        ))}</div>
        </Layout>

 )
}



export const query = graphql`
  query {
    allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "exhibit"}}},sort: {fields: frontmatter___date, order: DESC}) {
        edges {
          node {
            frontmatter {
              title
              exhibit_slug
              templateKey
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