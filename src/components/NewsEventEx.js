import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import {FaArrowAltCircleRight} from "react-icons/fa"

export default function FeatTrio() { 

  return (
    <StaticQuery
      query={graphql`
        query  {
            news:  allMarkdownRemark(limit:1, filter: {frontmatter: { type: {eq: "news"}}},sort: {fields: frontmatter___date, order: DESC}) {
                edges {
                  node {
                    id
                    html
                    frontmatter {
                      description
                      date(formatString: "YYYY-MM-DD")
                      templateKey
                      type
                      title
                      related_book {
                        jsonId
                        Title
                      }
                    }
                    fields {
                      slug
                    }
                  }
                }
              } 
              exhibit: allMarkdownRemark(limit:4, filter: {frontmatter: {templateKey: {eq: "exhibit"}}},sort: {fields: frontmatter___date, order: DESC}) {
                edges {
                  node {
                    frontmatter {
                      templateKey
                      date(formatString: "YYYY-MM-DD")
                      title
                      exhibit_slug
                    }
                  
                  }
                }
              } 
              ac:  allMarkdownRemark(limit:1, filter: {frontmatter: {type: {eq: "author-corner"}}},sort: {fields: frontmatter___date, order: DESC}) {
                edges {
                  node {
                    id
                    html
                    frontmatter {
                      date(formatString: "YYYY-MM-DD")
                      templateKey
                      type
                      title
                      related_book {
                        jsonId
                        Title
                      }
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
        
        <section className="flex md:flex-row flex-col justify-center place-content-center">
           <article className="flex flex-col md:flex-1 flex-wrap p-5">
           
            <>
              <div >
                  <Link to={`/publicity`} className="flex flex-row mb-2">
                  <div className="border-r-2 border-gray-600 uppercase tracking-wider text-ceci-gray-dark font-serif  text-sm md:text-md pr-2 md:pr-2">Recent Posts</div>
                  <div className="tracking-widest text-ceci-gray-mid font-serif text-xs pl-1 md:pl-3   self-center">{data.news.edges[0].node.frontmatter.date}</div>
                  </Link>
              </div>
         
<Link className="font-display font-thin tracking-wider uppercase p-2" to={`../${ data.news.edges[0].node.frontmatter.type }${ data.news.edges[0].node.fields.slug }`}>{data.news.edges[0].node.frontmatter.title }</Link>
           
            {data.news.edges[0].node.html &&  <div className=" font-serif text-md leading-relaxed text-gray-800 dropCap" dangerouslySetInnerHTML={{ __html: data.news.edges[0].node.html.split(' ').splice(0, 20).join(' ') + '...' }}/>}
            <div className="font-display uppercase text-xs tracking-widest"><Link  to={`../${ data.news.edges[0].node.frontmatter.type }${ data.news.edges[0].node.fields.slug }`}><FaArrowAltCircleRight className="inline mx-4"/> Continue Reading</Link> 
              </div>
            </>
            </article>
            <article className="flex flex-col md:flex-1 flex-wrap px-2 py-5 md:p-5">
           
           <>
             <div > 
              <Link to={`/authors-corner`}className="flex flex-row md:px-10 "><div className="border-r-2 border-gray-600 uppercase tracking-wider text-ceci-gray-dark font-serif  text-sm md:text-md pr-1 md:pr-3">Author's Corner</div>
                 <div className="tracking-widest text-ceci-gray-mid font-serif text-xs pl-2 md:pl-3 self-center">{data.ac.edges[0].node.frontmatter.date}</div></Link>
             </div>
               
             <div className="md:px-10 flex flex-col">
        
             <Link className="font-display tracking-wider font-thin uppercase py-2" to={`../author-corner${ data.ac.edges[0].node.fields.slug }`}>{data.ac.edges[0].node.frontmatter.title }</Link>
              <div className="font-serif text-left text-md leading-relaxed text-ceci-gray-dark dropCap" dangerouslySetInnerHTML={{ __html: data.ac.edges[0].node.html.split(' ').splice(0, 20).join(' ') + '...' }}/> 
              <div className="font-display uppercase text-xs tracking-widest"><Link  to={`../${ data.news.edges[0].node.frontmatter.type }${ data.ac.edges[0].node.fields.slug }`}><FaArrowAltCircleRight className="inline mx-4"/> Continue Reading</Link> 
              </div>
           </div>
           </>
           </article>
            <article className="flex md:flex-1 flex-col flex-wrap p-5">
           
           <>
             <div className="flex flex-row">
                <Link to={`/exhibits`}> <div className="border-r-2 border-gray-600 uppercase tracking-wider text-ceci-gray-dark font-serif text-sm md:text-md pr-3">exhibits</div></Link>
             </div>
            
             <Link className="font-display tracking-wide uppercase p-2" to={`../exhibits/${ data.exhibit.edges[0].node.frontmatter.exhibit_slug }`}>{data.exhibit.edges[0].node.frontmatter.title }</Link>
             <Link className="font-display tracking-wide uppercase p-2" to={`../exhibits/${ data.exhibit.edges[1].node.frontmatter.exhibit_slug }`}>{data.exhibit.edges[1].node.frontmatter.title }</Link>
             <Link className="font-display tracking-wide uppercase p-2" to={`../exhibits/${ data.exhibit.edges[2].node.frontmatter.exhibit_slug }`}>{data.exhibit.edges[2].node.frontmatter.title }</Link>
             <Link className="font-display tracking-wide uppercase p-2" to={`../exhibits/${ data.exhibit.edges[3].node.frontmatter.exhibit_slug }`}>{data.exhibit.edges[3].node.frontmatter.title }</Link>
           <Link  to={`../exhibits`}><div className="font-display uppercase text-xs tracking-wide py-2"><FaArrowAltCircleRight className="inline mr-4"/> see more exhibits 
             </div></Link>
           </>
           </article>
          
         
           
          
        </section>
       
      )}
    />
  )
}