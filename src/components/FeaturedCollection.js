import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Gallery from "../components/RelCarousel"
import sanitizeHtml from 'sanitize-html';

const FeaturedColl = () => {
  const data = useStaticQuery(graphql`
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
                      BookID
                      Title
                      }
                  }
                }
              }
              html
  
            }
          }
        }
  }
`);
  return  <div className="flex flex-col  mx-auto">

  <div className="flex flex-col ">

{/* <Link to={`../series/BUS`}> <p className="text-lg uppercase tracking-wide text-center text-ceci-gray-dark py-2 font-display self-center font-thin">{data.rseries.edges[0].node.frontmatter.title} </p></Link> */}
  <div className="font-serif text-center" dangerouslySetInnerHTML={{ __html: sanitizeHtml(data.rseries.edges[0].node.html) }}></div>
</div>


<div className="py-6">

  {data.rseries.edges[0].node.frontmatter.related_collection.map(coll => (
      
  <Gallery book_obj_array={coll.frontmatter.related_book}/>

))}

</div>

  </div>;
}

export default FeaturedColl