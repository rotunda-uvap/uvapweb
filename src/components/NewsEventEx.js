import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
// import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {FaArrowAltCircleRight} from "react-icons/fa"
// import GoogleCalendar from "../components/Calendar"
export default function FeatTrio() { 

  return (
    <StaticQuery
      query={graphql`
        query  {
            news:  allMarkdownRemark(limit:1, filter: {frontmatter: {templateKey: {eq: "news"}, type: {eq: "news"}}},sort: {fields: frontmatter___date, order: DESC}) {
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
                      id
                      Title
                      }
                    }
                    fields {
                      slug
                    }
                  }
                }
              } 
              exhibit: allMarkdownRemark(limit:4, filter: {frontmatter: {templateKey: {eq: "exhibit"}}}) {
                edges {
                  node {
                    frontmatter {
                      templateKey
                      title
                      exhibit_slug
                    }
                  
                  }
                }
              } 
              ac:  allMarkdownRemark(limit:1, filter: {frontmatter: {templateKey: {eq: "news"}, type: {eq: "author-corner"}}},sort: {fields: frontmatter___date, order: DESC}) {
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
                        id
                        Title
                      }
                      image {
                        childrenImageSharp {
                        gatsbyImageData
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
           <article className="flex flex-1 flex-col flex-wrap p-5">
           
            <>
              <div className="flex flex-row">
                  <div className="border-r-2 uppercase tracking-widest font-serif text-xs pr-3"><Link to={`/publicity`}>{data.news.edges[0].node.frontmatter.type}</Link></div>
                  <div className="tracking-widest font-serif text-xs pl-3">{data.news.edges[0].node.frontmatter.date}</div>
              </div>
              {data.news.edges[0].node.frontmatter.related_book ? <div className="flex flex-row"><img src={'https://covers.upress.virginia.edu/mediums/' + data.news.edges[0].node.frontmatter.related_book[0].id + "_M.jpg"} alt="cover" className="justify-self-center object-cover w-1/3 p-2"/> <Link className="font-display tracking-wide uppercase py-2" to={`../${ data.news.edges[0].node.frontmatter.type }${ data.news.edges[0].node.fields.slug }`}>{data.news.edges[0].node.frontmatter.title }</Link></div> :<Link className="font-display tracking-wide uppercase py-2" to={`../${ data.news.edges[0].node.frontmatter.type }${ data.news.edges[0].node.fields.slug }`}>{data.news.edges[0].node.frontmatter.title }</Link> }

              {/* <Link className="font-display tracking-widest uppercase py-2" to={`../${ data.news.edges[0].node.frontmatter.type }${ data.news.edges[0].node.fields.slug }`}>{data.news.edges[0].node.frontmatter.title }</Link> */}
            {data.news.edges[0].node.html &&  <div className=" font-serif font-sm leading-relaxed text-base dropCap" dangerouslySetInnerHTML={{ __html: data.news.edges[0].node.html.split(' ').splice(0, 30).join(' ') + '...' }}/>}
            <div className="font-display uppercase text-xs tracking-widest"><Link  to={`../${ data.news.edges[0].node.frontmatter.type }${ data.news.edges[0].node.fields.slug }`}><FaArrowAltCircleRight className="inline mx-4"/> Read more</Link> 
              </div>
            </>
            </article>
            <article className="flex flex-1 flex-col flex-wrap px-2 py-5 md:p-5">
           
           <>
             <div className="flex flex-row md:px-10 "> 
             
                 <div className="border-r-2 uppercase tracking-widest font-serif text-xs pr-3"><Link to={`/authors-corner`}>Author's Corner</Link></div>
                 <div className="tracking-widest font-serif text-xs pl-3">{data.ac.edges[0].node.frontmatter.date}</div>
             </div>
               
             <div className="md:px-10 flex flex-col">
             {data.ac.edges[0].node.frontmatter.related_book ? <div className="flex flex-row"><img src={'https://covers.upress.virginia.edu/mediums/' + data.ac.edges[0].node.frontmatter.related_book[0].id + "_M.jpg"} alt="cover" className="justify-self-center object-cover w-1/3 p-2"/> <Link className="font-display tracking-wide uppercase py-2" to={`../author-corner${ data.ac.edges[0].node.fields.slug }`}>{data.ac.edges[0].node.frontmatter.title }</Link></div> :<Link className="font-display tracking-wide uppercase py-2" to={`../author-corner${ data.ac.edges[0].node.fields.slug }`}>{data.ac.edges[0].node.frontmatter.title }</Link> }
             {/* {getImage(data.Img) && <div className="float-left px-10 pb-5"><GatsbyImage image={getImage(data.Img)} alt="related image"/></div> } */}
              <div className="font-serif leading-relaxed text-base dropCap" dangerouslySetInnerHTML={{ __html: data.ac.edges[0].node.html.split(' ').splice(0, 20).join(' ') + '...' }}/> 
              <div className="font-display uppercase text-xs tracking-widest"><Link  to={`../${ data.news.edges[0].node.frontmatter.type }${ data.news.edges[0].node.fields.slug }`}><FaArrowAltCircleRight className="inline mx-4"/> Read more</Link> 
              </div>
           </div>
           </>
           </article>
            <article className="flex flex-1 flex-col flex-wrap p-5">
           
           <>
             <div className="flex flex-row">
                 <div className="border-r-2 uppercase tracking-widest font-serif text-xs pr-3"><Link to={`/exhibits`}>exhibits</Link></div>
             </div>
            
             <Link className="font-display tracking-widest uppercase py-2" to={`../exhibits/${ data.exhibit.edges[0].node.frontmatter.exhibit_slug }`}>{data.exhibit.edges[0].node.frontmatter.title }</Link>
             <Link className="font-display tracking-widest uppercase py-2" to={`../exhibits/${ data.exhibit.edges[1].node.frontmatter.exhibit_slug }`}>{data.exhibit.edges[1].node.frontmatter.title }</Link>
             <Link className="font-display tracking-widest uppercase py-2" to={`../exhibits/${ data.exhibit.edges[2].node.frontmatter.exhibit_slug }`}>{data.exhibit.edges[2].node.frontmatter.title }</Link>
             <Link className="font-display tracking-widest uppercase py-2" to={`../exhibits/${ data.exhibit.edges[3].node.frontmatter.exhibit_slug }`}>{data.exhibit.edges[3].node.frontmatter.title }</Link>
           <div className="font-display uppercase text-xs tracking-widest py-2"><Link  to={`../exhibits`}><FaArrowAltCircleRight className="inline mr-4"/> see more exhibits</Link> 
             </div>
           </>
           </article>
          
           {/* <GoogleCalendar/> */}
           
          
        </section>
       
      )}
    />
  )
}