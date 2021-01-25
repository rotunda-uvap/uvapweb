import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
export default function Banner() {
  return (
    <StaticQuery
      query={graphql`
        query BannerQuery {
            markdownRemark(frontmatter: {templateKey: {eq: "homepage-primary"}}) {
                frontmatter {
                  body1
                  body2
                  relbook
                  primary_image {
                    childImageSharp {
                      gatsbyImageData(width: 200, layout: CONSTRAINED, placeholder: TRACED_SVG)
                    }
                  }
          
                }
            }
            primImg: file(extension: {eq: "jpg"}, relativeDirectory: {eq: "primary"}) {
                childImageSharp {
                  gatsbyImageData(width:300, layout: CONSTRAINED, placeholder: TRACED_SVG)
                }
              }
        }
      `}
      render={data => (
        <div className="py-15 bg-blue-500">
            <div className="container mx-auto px-6">
                <div className="container mx-auto px-6 py-10">
                    <Link to={'../../title/' + data.markdownRemark.frontmatter.relbook}>
                        <div className="grid grid-cols-2 gap-2 hover:text-underline">
                            <div className="flex flex-col mx-auto place-content-center">
                        <h2 className="text-2xl md:text-5xl font-bold mb-2 text-white">{data.markdownRemark.frontmatter.body1}</h2>
                        <h3 className="text-lg md:text-3xl font-light text-gray-200">{data.markdownRemark.frontmatter.body2}</h3>
                            </div>
                            <Link to={'../../title/' + data.markdownRemark.frontmatter.relbook}><GatsbyImage image={getImage(data.primImg)} alt="featured cover" /></Link>

                        </div>
                    </Link>
        </div>
        </div>
        </div>
      )}
    />
  )
}