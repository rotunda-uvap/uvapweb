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
                  }
          
                }
            
            primImg: file(extension: {eq: "jpg"}, relativeDirectory: {eq: "primary"}) {
                childImageSharp {
                  gatsbyImageData(width:200, height:320, layout: FIXED, placeholder: TRACED_SVG)
                }
              }
        }
      `}
      render={data => (
        <div className="py-15">
            <div className="container mx-auto px-6">
                <div className="container mx-auto px-6 py-10">
                    <Link to={'../../title/' + data.markdownRemark.frontmatter.relbook}>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 hover:text-underline">
                            <div className="flex flex-col mx-auto place-content-center md:col-span-2">
                        <h2 className="text-2xl md:text-5xl font-bold mb-2 text-black">{data.markdownRemark.frontmatter.body1}</h2>
                        <h3 className="text-lg md:text-3xl font-light text-gray-400">{data.markdownRemark.frontmatter.body2}</h3>
                            </div>
                            <GatsbyImage image={getImage(data.primImg)} alt="featured cover" />

                        </div>
                    </Link>
        </div>
        </div>
        </div>
      )}
    />
  )
}