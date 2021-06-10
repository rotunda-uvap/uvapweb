import React from "react"
import { StaticQuery, graphql } from "gatsby"
import RelatedBookList from "./RelatedBookList"
export default function ReadingSeries() { 
  return (
    <StaticQuery
      query={graphql`
        query ReadingSeriesQuery {
            rseries: allMarkdownRemark(limit: 1, filter: {frontmatter: {templateKey: {eq: "reading-series"}}}) {
                edges {
                  node {
                    frontmatter {
                      title
                      templateKey
                      related_collection {
                        frontmatter {
                            
                        related_book {
                            id
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
       
         
        <div className="flex flex-col w-full">

          <div className="flex flex-col ">

            <p className="text-3xl font-sans text-gray-600">{data.rseries.edges[0].node.frontmatter.title} </p>
          <div className="font-serif dropCap" dangerouslySetInnerHTML={{ __html: data.rseries.edges[0].node.frontmatter.description }}></div>
        </div>

        
          

          {data.rseries.edges[0].node.frontmatter.related_collection.map(coll => (
              
                
            <div className="grid grid-cols-7 w-full pt-5">
            {coll.frontmatter.related_book.map(book => (
              
              <RelatedBookList id={book.id} title={book.Title}/>
         
             
          ))}
           </div>
              
            
        ))}

        
    
          </div>
      
        
    
      )}
    />
  )
}