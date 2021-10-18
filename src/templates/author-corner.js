import React from "react"
import { Link, graphql } from "gatsby"
import RelatedBook from "../components/RelatedBook"
import Layout from "../components/layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import SeO from "../components/SeoComponent"
import ShareButtons from "../components/ShareButtons"
import PageHeader from "../components/PageHeader"

const newsPage = ({ data }) => {
    const news = data.markdownRemark
    const related_books = data.markdownRemark.frontmatter.related_book
    const related_series = data.markdownRemark.frontmatter.related_series
    const news_image = getImage(data.Img)
    const url = data.site.siteMetadata.siteUrl + "/author-corner" + news.fields.slug
    const title = news.frontmatter.title
    let metaImage;
if(news_image) metaImage = news.frontmatter.image.childImageSharp.fixed.src;
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
  <div className="container px-5 py-12 mx-auto">
  <div className="flex flex-col  w-full mb-10">
<PageHeader text={title}/>
 
 <p className="lg-w/3/3 leading-relaxed italic py-5 text-center font-serif">Welcome back to the UVA Press Author's Corner! Here, we feature conversations with the authors of our latest releases to provide a glimpse into the writer's mind, their book's main lessons, and what’s next for them. We hope you enjoy these inside stories.</p>
  <p className="lg:w-3/3  leading-relaxed font-serif">
  {news_image && <div className="float-left px-10 pb-5"><GatsbyImage image={news_image} alt="related image"/></div> }
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

       
          <div className="px-10">
          <ShareButtons title={title} url={url}/>
</div>
          
            {related_series && related_series.map(series => (
            <> 
            <div className="float-right px-7 pb-5">
            <h6 className="uppercase py-2">Related Series: <Link to={`../../series/${ series.id }`} className="pl-2">{series.seriesName}</Link></h6>
            </div></>
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
    site {
    siteMetadata {
      siteUrl
    }
  }
      markdownRemark(frontmatter: {type: {eq: "author-corner"}},id: { eq: $id }) {

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