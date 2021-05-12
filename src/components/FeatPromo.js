import React from "react"
import { StaticQuery, graphql } from "gatsby"
import RelatedBookList from "./RelatedBookList"
export default function FeatPromo() { 
  return (
    <StaticQuery
      query={graphql`
        query PromoQuery {
            promos: allMarkdownRemark(limit: 1, filter: {frontmatter: {type: {eq: "promo"}}}) {
                edges {
                  node {
                    frontmatter {
                      title
                      type
                      relbook
                    }
                    html
                  }
                }
              }
        }
      `}
      render={data => (
       
         
        <div className="col-span-2 flex flex-row">
          <div className="flex flex-col w-2/3">
            <p className="text-3xl font-sans text-gray-600">{data.promos.edges[0].node.frontmatter.title} </p>
          <div className="font-serif dropCap" dangerouslySetInnerHTML={{ __html: data.promos.edges[0].node.html }}></div>
        </div>

        
          <div className="grid grid-cols-3 place-content-center" id="promobooks">
        {data.promos.edges[0].node.frontmatter.relbook && data.promos.edges[0].node.frontmatter.relbook.split(',').map(book => (
        <> 
        <RelatedBookList key={book} id={book}/>
        </>
    ))}
    </div>
          </div>
      
        
    
      )}
    />
  )
}