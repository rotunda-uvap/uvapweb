import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import {FaArrowAltCircleRight} from "react-icons/fa"
export default function FeatNews() { 

  return (
    <StaticQuery
      query={graphql`
        query NewsQuery {
            news:  allMarkdownRemark(limit:3, filter: {frontmatter: {templateKey: {eq: "news"}, type: {eq: "news"}}},sort: {fields: frontmatter___date, order: DESC}) {
                edges {
                  node {
                    id
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
        }
      `}
      render={data => (
        
        <section className="flex md:flex-row flex-col justify-center place-content-center space-x-8">
           <article className="flex flex-1 flex-col flex-wrap p-5">
           
            <>
              <div className="flex flex-row">
                  <div className="border-r-2 uppercase tracking-widest font-serif text-xs pr-3">{data.news.edges[0].node.frontmatter.type}</div>
                  <div className="tracking-widest font-serif text-xs pl-3">{data.news.edges[0].node.frontmatter.date}</div>
              </div>
             
              <Link className="font-display tracking-widest uppercase py-2" to={`../${ data.news.edges[0].node.frontmatter.type }${ data.news.edges[0].node.fields.slug }`}>{data.news.edges[0].node.frontmatter.title }</Link>
            <div className="font-serif font-sm leading-tight">{data.news.edges[0].node.frontmatter.description &&  <p className="font-serif leading-relaxed text-base dropCap" dangerouslySetInnerHTML={{ __html: data.news.edges[0].node.frontmatter.description.split(' ').splice(0, 50).join(' ') + '...' }}></p>}</div>
            <div className="font-display uppercase text-xs tracking-widest"><Link  to={`../${ data.news.edges[0].node.frontmatter.type }${ data.news.edges[0].node.fields.slug }`}><FaArrowAltCircleRight className="inline mx-4"/> Read more</Link> 
              </div>
            </>
            </article>
            <article className="flex flex-1 flex-col flex-wrap p-5">
          
            <>
              <div className="flex flex-row">
                  <div className="border-r-2 uppercase tracking-widest font-serif text-xs pr-3">{data.news.edges[1].node.frontmatter.type}</div>
                  <div className="tracking-widest font-serif text-xs pl-3">{data.news.edges[1].node.frontmatter.date}</div>
              </div>
             
              <Link className="font-display tracking-widest uppercase py-2" to={`../${ data.news.edges[1].node.frontmatter.type }${ data.news.edges[1].node.fields.slug }`}>{ data.news.edges[1].node.frontmatter.title }</Link>
            <div className="font-serif font-sm leading-tight">{data.news.edges[1].node.frontmatter.description &&  <p className="font-serif text-base dropCap" dangerouslySetInnerHTML={{ __html: data.news.edges[1].node.frontmatter.description.split(' ').splice(0, 50).join(' ') + '...' }}></p>}</div>
            <div className="font-display uppercase text-xs tracking-widest"><Link  to={`../${ data.news.edges[1].node.frontmatter.type }${ data.news.edges[1].node.fields.slug }`}><FaArrowAltCircleRight className="inline mx-4"/> Read more</Link> 
              </div>
            </>
            </article>
            <article className="flex flex-1 flex-col flex-wrap p-5">
           
           <>
             <div className="flex flex-row">
                 <div className="border-r-2 uppercase tracking-widest font-serif text-xs pr-3">{data.news.edges[2].node.frontmatter.type}</div>
                 <div className="tracking-widest font-serif text-xs pl-3">{data.news.edges[2].node.frontmatter.date}</div>
             </div>
            
             <Link className="font-display tracking-widest uppercase py-2" to={`../${ data.news.edges[2].node.frontmatter.type }${ data.news.edges[2].node.fields.slug }`}>{data.news.edges[2].node.frontmatter.title }</Link>
           <div className="font-serif font-sm leading-tight">{data.news.edges[2].node.frontmatter.description &&  <p className="font-serif dropCap" dangerouslySetInnerHTML={{ __html: data.news.edges[2].node.frontmatter.description.split(' ').splice(0, 50).join(' ') + '...' }}></p>}</div>
           <div className="font-display uppercase text-xs tracking-widest"><Link  to={`../${ data.news.edges[2].node.frontmatter.type }${ data.news.edges[2].node.fields.slug }`}><FaArrowAltCircleRight className="inline mx-4"/> Read more</Link> 
             </div>
           </>
           </article>
          
        </section>
       
      )}
    />
  )
}