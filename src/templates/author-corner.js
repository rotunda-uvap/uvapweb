import React from "react"
import { Link, graphql } from "gatsby"
import RelatedBook from "../components/RelatedBook"
import Layout from "../components/layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import SeO from "../components/SeoComponent"
import ShareButtons from "../components/ShareButtons"
import PageHeader from "../components/PageHeader"
import sanitizeHtml from 'sanitize-html'

const newsPage = ({ data }) => {
    const news = data.markdownRemark
    const related_books = data.markdownRemark.frontmatter.related_book
    const related_series = data.markdownRemark.frontmatter.related_series
    const news_image = getImage(data.Img)
    const url = data.site.siteMetadata.siteUrl + "/author-corner" + news.fields.slug
    const title = news.frontmatter.title
    let metaImage;
if(news_image) metaImage = news.frontmatter.image.publicURL;
else metaImage = null;
   
 return (
   <Layout>
<SeO
  title={title}
  description={news.html.substring(0, 150)}
  pathname={news.fields.slug}
  image={metaImage || "/uvap_sm.png"}
  article={true}
/>
<section className="text-gray-600 body-font">
  <div className="container py-12 mx-auto">
  <div className="flex flex-row px-5 inline-flex items-center w-full leading-normal">
     <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
    </svg>
            <a
              href={`../../publicity`}
              className="block p-2  text-xs font-thin uppercase "
            >All News</a>
    </div>

<PageHeader text={title}/>
  <div className="flex flex-col md:flex-row leading-relaxed font-serif ">
  {related_books && 
            <>
             <div className="order-last px-5 pb-7 flex md:flex-col flex-row items-center ">
            <h6 className="hidden md:block uppercase py-2 font-thin tracking-widest font-sans">Related</h6>
            {related_books.map(book => (
            <RelatedBook id={book.jsonId} title={book.Title}/>
           

        ))}</div></>
        }
 <div className="md:w-4/5">
 <p className="lg-w-3/3 leading-relaxed italic py-5 text-center font-serif">Welcome back to the UVA Press Author's Corner! Here, we feature conversations with the authors of our latest releases to provide a glimpse into the writer's mind, their book's main lessons, and what’s next for them. We hope you enjoy these inside stories.</p>
 
  {news_image && <div className="md:float-left px-6 pb-5"><GatsbyImage image={news_image} alt="related image"/></div> }
  <div>
  <article className="cms"
          dangerouslySetInnerHTML={{ __html: sanitizeHtml(news.html) }}/>

            {related_series && related_series.map(series => (
            <> 
            <div className="float-right px-7 pb-5">
            <h6 className="uppercase py-2">Related Series: <Link to={`../../series/${ series.jsonId }`} className="pl-2">{series.seriesName}</Link></h6>
            </div></>
        ))} 
         </div>

       </div>
          
          
  </div>
  <div className="px-10">
          <ShareButtons title={title} url={url}/>
          </div>
  </div>
  </section>

        
   </Layout>
    
 )
}

export default newsPage


export const query = graphql`
  query($id: String!, $relDir: String!) {
    site {
    siteMetadata {
      siteUrl
    }
  }
      markdownRemark(id: { eq: $id }) {

        id
        html
        frontmatter {
            title
            type
            templateKey
            image {
              name
              publicURL
              extension
              
            }
            description
            date(formatString: "YYYY-MM-DD")
            
            related_book {
              jsonId
              Title
            }
            related_series {
              jsonId
              seriesName
            }
          }
        fields {
          slug
        }
    }
    Img: file(extension: {regex: "/(jpeg|jpg|gif|png)/"}, relativeDirectory: {eq: $relDir}) {
      publicURL
            childImageSharp {
        gatsbyImageData(width:300, layout: CONSTRAINED, placeholder: TRACED_SVG, formats: [AUTO, WEBP, AVIF])
        
      }
    }
  }
`
