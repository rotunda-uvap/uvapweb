import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
export default function RotundaPromo() {
  return (
    <StaticQuery
      query={graphql`
        query RotundaPromoQuery {
            rot:  markdownRemark(frontmatter: {templateKey: {eq: "homepage-rotunda"}}) {
                frontmatter {
                  body1
                  body2
                  
                }
              }
              rotImg: file(extension: {eq: "jpg"}, relativeDirectory: {eq: "rotunda"}) {
                childImageSharp {
                  gatsbyImageData(width:300, layout: CONSTRAINED, placeholder: TRACED_SVG)
                }
              }
        }
      `}
      render={data => (
        <div className="container mx-auto px-6">
        <div className="bg-cover bg-center h-auto text-white py-20 px-10 object-fill grid md:grid-cols-2 gap-4 content-center items-center">
       <div>
        <p className="font-bold text-sm uppercase">Featured Rotunda:</p>
        <Link to={'../../title/5477'}><p className="text-3xl font-bold">{data.rot.frontmatter.body1}</p></Link>

        <p className="body-text p-5">{data.rot.frontmatter.body2} </p>
        </div>  
        <div>
        <Link to={'/'}><GatsbyImage image={getImage(data.rotImg)} alt="featured rotunda image" /></Link>
        
        </div>  
    </div>
    </div>
      )}
    />
  )
}