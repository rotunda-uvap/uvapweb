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
<PageHeader text={"Exhibits"}/>   
<div className="flex flex-col">
         {exhibitList.edges.map((edge, index) => (
             < >
                        <Link  className="p-4 md:px-10 text-lg font-display text-gray-700 tracking-wider hover:underline" to={`../exhibits/${ edge.node.frontmatter.exhibit_slug }`}>{ edge.node.frontmatter.title }</Link>
                      
            </>
            
           
        ))}</div></div>
        </Layout>

 )
}



export const query = graphql`
  query {
    allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "exhibit"}}},sort: { frontmatter: {date: DESC }})  {
        edges {
          node {
            frontmatter {
              title
              exhibit_slug
              templateKey
              date(formatString: "YYYY-MM-DD")
            }
          }
        }
      }
  }
`