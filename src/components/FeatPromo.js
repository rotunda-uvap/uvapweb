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
       
         
        <div className="col-span-2 xs:mt-5 sm:mt-5">
          <div className="flex flex-col">
          <p className="text-center uppercase text-gray-500 mx-auto  font-sans tracking-wide">Featured Promotion:</p>
            <p className="text-3xl font-sans text-gray-600">{data.promos.edges[0].node.frontmatter.title} </p></div>
            <div className="flex flex-row">
          <div className="font-serif dropCap" dangerouslySetInnerHTML={{ __html: data.promos.edges[0].node.html }}></div>
          <img src={data.promos.edges[0].node.frontmatter.image.publicURL} width="50%;"/>
        </div>

       
         {/*  <div className="grid grid-cols-3 place-content-center" id="promobooks">
        {data.promos.edges[0].node.frontmatter.relbook && data.promos.edges[0].node.frontmatter.relbook.split(',').map(book => (
        <> 
        <RelatedBookList key={book} id={book}/>
        </>
    ))}
    </div> */}
          </div>
      
        
    
      )}
    />
  )
}