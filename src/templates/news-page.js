import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { getImage } from "gatsby-plugin-image"
import SeO from "../components/SeoComponent"
import ShareButtons from "../components/ShareButtons"
import { HTMLContent } from "../components/Content";
/* import RelatedBook from "../components/RelatedBook"
import PageHeader from "../components/PageHeader"
import BackArrow from "../components/BackArrow" */
import NewsPageTemplate from "../components/NewsPageTemplate"

/* export const NewsPageTemplate = ({ title, content, related_list, pic, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <section className="text-gray-600">
    <div className="container px-5 py-12 mx-auto"> 
      <div className="flex flex-row px-5 inline-flex items-center w-full leading-normal">
       <BackArrow/>
              <a
                href={`../../publicity`}
                className="block p-2  text-xs font-thin uppercase "
              >All News</a>
      </div>
   <PageHeader text={title}/>
  
  
    <div className="flex flex-col md:flex-row leading-relaxed font-serif ">
    {related_list && 
              <>
               <div className="order-last px-5 pb-7 flex md:flex-col flex-row items-center ">
              <h6 className="hidden md:block uppercase py-2 font-thin tracking-widest font-sans">Related</h6>
              {related_list.map(book => (
              <RelatedBook id={book.id} title={book.Title}/>
             
  
          ))}</div></>
          }
      <div className="md:w-4/5">
        {pic && <div className="float-left px-10 pb-5"><GatsbyImage image={pic} alt="related image"/></div> }
        <PageContent className="content" content={content} />

    </div>
    
    </div>
     
    </div>
    </section>
  );
};
 */

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
              BookID
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
        gatsbyImageData(width:400, layout: CONSTRAINED, placeholder: DOMINANT_COLOR, formats: [AUTO, WEBP, AVIF])
        
      }
    }
  }
`
