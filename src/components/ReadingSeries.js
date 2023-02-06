import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Gallery from "../components/RelCarousel"
import sanitizeHtml from 'sanitize-html'

const ReadingSeries = () => {
  const data = useStaticQuery(graphql`
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
                      BookID
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
`);
  return   <div className="flex flex-col  mx-auto">

  <div className="flex flex-col ">

    <p className="text-3xl font-sans text-gray-600">{data.rseries.edges[0].node.frontmatter.title} </p>
  <div className="font-serif dropCap" dangerouslySetInnerHTML={{ __html: sanitizeHtml(data.rseries.edges[0].node.frontmatter.description )}}></div>
</div>


<div className="py-6">

  {data.rseries.edges[0].node.frontmatter.related_collection.map(coll => (
      
  <Gallery book_obj_array={coll.frontmatter.related_book}/>

    
))}

</div>

  </div>;
}

export default ReadingSeries

