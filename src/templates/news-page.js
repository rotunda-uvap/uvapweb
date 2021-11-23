import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { getImage } from "gatsby-plugin-image"
import SeO from "../components/SeoComponent"
import ShareButtons from "../components/ShareButtons"
import NewsPageTemplate from "../components/NewsPageTemplate"
import HTMLContent from "../components/Content";

const newsPage = ({ data }) => {
    const news = data.markdownRemark
    const related_books = data.markdownRemark.frontmatter.related_book
    const news_image = getImage(data.Img)
    const url = data.site.siteMetadata.siteUrl + "/news" + news.fields.slug
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
<NewsPageTemplate 
 contentComponent={HTMLContent}
  title={title}
  content={news.html}
  related_list={related_books}
  pic={news_image} />
        
        <div className="px-10">
            <ShareButtons title={title} url={url}/>
          </div>
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
      markdownRemark(frontmatter: {templateKey: {eq: "news"}},id: { eq: $id }) {

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
              id
              Title
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
