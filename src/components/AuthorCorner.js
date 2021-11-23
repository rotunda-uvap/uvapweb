import React from "react"
import { Link, StaticQuery, graphql} from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function AuthorCornerFront() { 
  return (
    <StaticQuery
      query={graphql`
        query  {
            news:  allMarkdownRemark(limit:1, filter: {frontmatter: {templateKey: {eq: "news"}, type: {eq: "author-corner"}}},sort: {fields: frontmatter___date, order: DESC}) {
                edges {
                  node {
                    id
                    html
                    frontmatter {
                      date(formatString: "YYYY-MM-DD")
                      templateKey
                      type
                      title
                      image {
                        childrenImageSharp {
                        gatsbyImageData(placeholder: BLURRED
                          formats: [AUTO, WEBP, AVIF])
                        }
                      }
                    }
                    fields {
                      slug
                    }
                  }
                }
              } 
        }
      `}
      render={data => (
        
        <section className="md:flex md:flex-row justify-center place-content-center md:space-x-8">
            {getImage(data.Img) && <div className="float-left px-10 pb-5"><GatsbyImage image={getImage(data.Img)} alt="related image"/></div> }
           <article className="flex flex-1 flex-col flex-wrap px-2 py-5 md:p-5">
           
            <>
              <div className="flex flex-row md:px-10 "> 
              
                  <div className="border-r-2 uppercase tracking-widest font-serif text-xs pr-3">Latest Author's Corner</div>
                  <div className="tracking-widest font-serif text-xs pl-3">{data.news.edges[0].node.frontmatter.date}</div>
              </div>
                
              <div className="md:px-10 flex flex-col">
              <Link className="font-display tracking-wide uppercase py-2" to={`../${ edge.node.frontmatter.type }${ edge.node.fields.slug }`}>{data.news.edges[0].node.frontmatter.title }</Link>
            <div className="font-serif leading-relaxed text-base dropCap" dangerouslySetInnerHTML={{ __html: data.news.edges[0].node.html.split(' ').splice(0, 27).join(' ') + '...' }}/>   
            <div className="font-display uppercase text-xs tracking-widest"><Link className="font-display tracking-wide uppercase py-2" to={`../${ edge.node.frontmatter.type }${ edge.node.fields.slug }`}>Read More ...</Link></div></div>
         
            
            </>
            </article>
          
          
        </section>
          
          )}
          />
        )
      }