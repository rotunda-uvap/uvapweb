import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import Gallery from "../components/RelCarousel"
export default function FeaturedColl() { 
  return (
    <StaticQuery
      query={graphql`
        query FeaturedCollQuery {
            rseries: allMarkdownRemark(limit: 1, filter: {frontmatter: {templateKey: {eq: "featured-collection"}}}) {
                edges {
                  node {
                    frontmatter {
                      title
                      templateKey
                      related_collection {
                        frontmatter {
                            
                        related_book {
                            jsonId
                            Title
                            }
                        }
                      }
                      description
                    }
                    html
        
                  }
                }
              }
        }
      `}
      render={data => (
       
         
        <div className="flex flex-col  mx-auto">

          <div className="flex flex-col ">

           <p className="text-xl font-sans text-ceci-gray-dark py-2 tracking-wide self-center font-thin">{data.rseries.edges[0].node.frontmatter.title} </p>
          <div className="font-serif text-center" dangerouslySetInnerHTML={{ __html: data.rseries.edges[0].node.html }}></div>
        </div>

        
     <div className="py-6">

          {data.rseries.edges[0].node.frontmatter.related_collection.map(coll => (
              
          <Gallery book_obj_array={coll.frontmatter.related_book}/>
        
        ))}

        </div>
    
          </div>
      
        
    
      )}
    />
  )
}