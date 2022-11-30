import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import {FaArrowAltCircleRight} from "react-icons/fa"
import sanitizeHtml from 'sanitize-html';


const FeatTrio = () => {
  const data = useStaticQuery(graphql`
  query  {
      news:  allMarkdownRemark(limit:1, filter: {frontmatter: { type: {eq: "news"}}},sort: { frontmatter: {date: DESC }}) {
        edges {
          node {
              html
              frontmatter {
                  title
                  type
                  date(formatString: "YYYY-MM-DD")
              }
              fields {
                  slug
              }
          }
      }
         
        } 
        exhibit: allMarkdownRemark(limit:4, filter: {frontmatter: {templateKey: {eq: "exhibit"}}},sort: { frontmatter: {date: DESC }})  {
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
        ac:  allMarkdownRemark(limit:1, filter: {frontmatter: {type: {eq: "author-corner"}}},sort: { frontmatter: {date: DESC }})  {
          edges {
            node {
                html
                frontmatter {
                    title
                    type
                    date(formatString: "YYYY-MM-DD")
                }
                fields {
                    slug
                }
            }
        }
      }    

  }
`);
  return  <section className="flex md:flex-row flex-col gap-2 m-2">

  <article className="flex flex-col border-b-2 md:border-b-0 pb-2  md:basis-1/3">
     <Link className="flex flex-row sm:flex-wrap p-2" to={`../publicity`} >
         <div className="border-r-2 pr-2 font-serif uppercase tracking-wider text-sm self-center">Recent Posts</div>
         <div className="pl-2 font-serif text-sm self-center text-ceci-gray-mid">{data.news.edges[0].node.frontmatter.date}</div>
     </Link>
    
     {data.news.edges.map((edge, index) => (
       <>
          <Link className="p-2" to={`../news${ edge.node.fields.slug }`} key={`news${index}`}>
         <div className="font-thin uppercase tracking-wide font-display md:py-1">{edge.node.frontmatter.title }</div>
     <div className="font-serif text-left leading-relaxed text-ceci-gray-dark dropCap" dangerouslySetInnerHTML={{ __html: sanitizeHtml(edge.node.html.split(' ').splice(0, 30).join(' ') + '...' )}}/> 
     <div className="font-display uppercase text-xs tracking-widest py-2"><FaArrowAltCircleRight className="inline mx-4"/> Continue Reading</div>
     </Link> 
      </>
      ))}
    
 </article>


 <article className="flex flex-col border-b-2 md:border-b-0 pb-2 md:basis-1/3 ">
     <Link className="flex flex-row sm:flex-wrap p-2" to={`../authors-corner`} >
         <div className="border-r-2 pr-2 font-serif uppercase tracking-wider self-center">Authors' Corner</div>
         <div className="pl-2 font-serif text-sm self-center text-ceci-gray-mid">{data.ac.edges[0].node.frontmatter.date}</div>
     </Link>
    
     {data.ac.edges.map((edge, index) => (
       <>
          <Link className="p-2" to={`../author-corner${ edge.node.fields.slug }`} key={`ac${index}`}>
         <div className="font-thin uppercase tracking-wide font-display md:py-1">{edge.node.frontmatter.title }</div>
     <div className="font-serif text-left  p-0 leading-relaxed text-ceci-gray-dark dropCap" dangerouslySetInnerHTML={{ __html: sanitizeHtml(edge.node.html.split(' ').splice(0, 25).join(' ') + '...' )}}/> 
     <div className="font-display uppercase text-xs tracking-widest py-2"><FaArrowAltCircleRight className="inline mx-4"/> Continue Reading</div>
     </Link> 
      </>
      ))}
    
 </article>


   <article className="flex flex-col border-b-2 md:border-b-0 pb-2 md:shrink-0 md:basis-1/3">
  <>
    <Link to={`../exhibits`} className=" font-serif uppercase tracking-wider  p-2 ">exhibits</Link>
   
    <Link className="font-display tracking-wide uppercase p-2 text-sm " to={`../exhibits/${ data.exhibit.edges[0].node.frontmatter.exhibit_slug }`}>{data.exhibit.edges[0].node.frontmatter.title }</Link>
    <Link className="font-display tracking-wide uppercase p-2 text-sm" to={`../exhibits/${ data.exhibit.edges[1].node.frontmatter.exhibit_slug }`}>{data.exhibit.edges[1].node.frontmatter.title }</Link>
    <Link className="font-display tracking-wide uppercase p-2 text-sm" to={`../exhibits/${ data.exhibit.edges[2].node.frontmatter.exhibit_slug }`}>{data.exhibit.edges[2].node.frontmatter.title }</Link>
    <Link className="font-display tracking-wide uppercase p-2 text-sm" to={`../exhibits/${ data.exhibit.edges[3].node.frontmatter.exhibit_slug }`}>{data.exhibit.edges[3].node.frontmatter.title }</Link>
    <Link  to={`../exhibits`} className="font-display uppercase text-xs tracking-widest px-2 py-4"><FaArrowAltCircleRight className="inline mr-4"/> see more exhibits</Link>
  </>
  </article>
 
</section>;
}

export default FeatTrio

