import React from "react"
import { StaticQuery, graphql } from "gatsby"


// import RelatedBookList from "./RelatedBookList"
export default function FeatPromo() { 
  return (
    <StaticQuery
      query={graphql`
        query PromoQuery {
            promos: allMarkdownRemark(limit: 1, filter: {frontmatter: {templateKey: {eq: "promo"}}}) {
                edges {
                  node {
                    frontmatter {
                      title
                      templateKey
                      relbook
                      image {
                        publicURL
                      }
                    }
                    html
                  }
                }
              }
        }
      `}
      render={data => (
       
         
        <div className="md:col-span-2 xs:mt-5 sm:mt-5">
          <div className="flex flex-col">
            <p className="text-3xl font-sans text-gray-600">{data.promos.edges[0].node.frontmatter.title} </p></div>
            <div className="md:flex md:flex-row">
          <div className="font-serif dropCap" dangerouslySetInnerHTML={{ __html: data.promos.edges[0].node.html }}></div>
          <img src={data.promos.edges[0].node.frontmatter.image.publicURL} width="50%;" alt="promotion"/>
        </div>

       
          </div>
      
        
    
      )}
    />
  )
}