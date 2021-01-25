import React from "react"
import { StaticQuery, graphql } from "gatsby"
import RelatedBook from "./RelatedBook"
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
                    fields {
                      slug
                    }
                  }
                }
              }
        }
      `}
      render={data => (
        <div className="container mx-auto px-6 py-10">
         
        <div className="flex flex-col mx-auto place-content-center">
<h2 className="text-5xl font-bold my-5">{data.promos.edges[0].node.frontmatter.title} </h2>
<p className="pt-2" dangerouslySetInnerHTML={{ __html: data.promos.edges[0].node.html }}></p>
        </div>
        <div className="grid md:grid-cols-5 md:gap-2">
        {data.promos.edges[0].node.frontmatter.relbook && data.promos.edges[0].node.frontmatter.relbook.split(',').map(book => (
        <> 
        <RelatedBook id={book}/>
        </>
    ))}
    </div>
    </div>
      )}
    />
  )
}