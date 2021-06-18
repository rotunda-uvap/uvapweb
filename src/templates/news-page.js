import React from "react"
import { Link, graphql } from "gatsby"
import RelatedBook from "../components/RelatedBook"
import Layout from "../components/layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import ShareButtons from "../components/ShareButtons"
import SEO from 'react-seo-component'

const newsPage = ({ data }) => {
    const news = data.markdownRemark
    const related_books = data.markdownRemark.frontmatter.related_book
    const related_series = data.markdownRemark.frontmatter.related_series
    const image = getImage(data.Img)
    const title = news.frontmatter.title
    const description = news.frontmatter.description
    const altDesc = news.frontmatter.html
    const siteUrl = 'https://uvap-draft-13b347.netlify.app'
    const url = siteUrl + news.fields.slug 
 return (
   <Layout>
<SEO
  title={title}
  description={news.html}
  image={image}
/>
<section className="text-gray-600 body-font">
  <div className="container px-5 py-12 mx-auto">
  <div className="flex flex-col  w-full mb-10">
  <h1 className="sm:text-3xl text-2xl font-medium font-sans mb-4 text-gray-900">{title}</h1>
  
 
  <p className="lg:w-3/3  leading-relaxed font-serif">
  {image && <div className="float-left px-10 pb-5"><GatsbyImage image={image} alt="related image"   width={300}/></div> }
  {related_books && 
            <>
             <div className="float-right px-5 pb-5">
            <h6 className="uppercase px-7 py-2">Related</h6>
            {related_books.map(book => (
            <RelatedBook id={book.id} title={book.Title}/>
           
        ))}</div></>
        } 
    <article className="cms"
          dangerouslySetInnerHTML={{ __html: news.html }}/>
          </p>

          <ShareButtons title={title} url={url} image={image} quote={description} article={true}/>


          
            {related_series && related_series.map(series => (
            <> 
            <h6 className="py-3"><Link to={`../../series/${ series.id }`}>{series.seriesName}</Link></h6>
            </>
        ))} 
  </div>
  
  </div>
  </section>

     
        
   </Layout>
    
 )
}

export default newsPage


export const query = graphql`
  query($id: String!, $relDir: String!) {
    markdownRemark(frontmatter: {type: {nin: ["page", "media", "promo"]}},id: { eq: $id }) {
      id
        html
        frontmatter {
            title
            type
            description
            date(formatString: "YYYY-MM-DD")
            
            related_book {
              id
              Title
            }
            related_series {
              id
              seriesName
            }
          }
        fields {
          slug
        }
    }
    Img: file(extension: {eq: "jpg"}, relativeDirectory: {eq: $relDir}) {
      childImageSharp {
        gatsbyImageData(width:300, layout: CONSTRAINED, placeholder: TRACED_SVG)
        
      }
    }
  }
`
