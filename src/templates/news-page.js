import React from "react"
import { Link, graphql } from "gatsby"
import RelatedBook from "../components/RelatedBook"
import Layout from "../components/layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import ShareButtons from "../components/ShareButtons"
// import SEO from 'react-seo-component'
import NewsSEO from "../components/NewsSeo"

const newsPage = ({ data }) => {
    const news = data.markdownRemark
    const related_books = data.markdownRemark.frontmatter.related_book
    const related_series = data.markdownRemark.frontmatter.related_series
    const news_image = getImage(data.Img)
    const title = news.frontmatter.title
    let metaImage;
if(news_image) metaImage = news.frontmatter.image.childImageSharp.fixed.src;
else metaImage = null;
   
 return (
   <Layout>
<NewsSEO
  title={title}
  description={news.html.substring(0, 150)}
  pathname={news.fields.slug}
  image={metaImage || "/uvap_sm.png"}
  article={true}
/>
<section className="text-gray-600 body-font">
  <div className="container px-5 py-12 mx-auto">
  <div className="flex flex-col  w-full mb-10">
  <h1 className="sm:text-3xl text-2xl font-medium font-sans mb-4 text-gray-900">{title}</h1>
 
 
  <p className="lg:w-3/3  leading-relaxed font-serif">
  {news_image && <div className="float-left px-10 pb-5"><GatsbyImage image={news_image} alt="related image" width={300}/></div> }
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

       

          <ShareButtons title={title} url={`https://uvap-draft-13b347.netlify.app/${news.fields.slug}`}/>

          
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
    # markdownRemark(frontmatter: {type: {nin: ["page", "media", "promo"]}},id: { eq: $id }) {
      markdownRemark(frontmatter: {templateKey: {eq: "news"}},id: { eq: $id }) {

      id
        html
        frontmatter {
            title
            type
            templateKey
            image {
              name
              extension
              childImageSharp{
                fixed{
                  src
                }
              }
            }
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
        fixed {
          src
        }
        gatsbyImageData(width:300, layout: CONSTRAINED, placeholder: TRACED_SVG)
        
      }
    }
  }
`
