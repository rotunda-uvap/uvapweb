import React from "react"
import { Link, graphql } from "gatsby"
import RelatedBook from "../components/RelatedBook"
import Layout from "../components/layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const newsPage = ({ data }) => {
    const news = data.markdownRemark
    const related_books = data.markdownRemark.frontmatter.related_book
    const related_series = data.markdownRemark.frontmatter.related_series
    const image = getImage(data.Img)
    
 return (
   <Layout>
     <div>
        <h1 className="py-5 text-2xl font-black uppercase" >{news.frontmatter.title}</h1>
        <div className="grid md:grid-cols-3">
        <section className="md:col-span-2">
        <div className="float-left px-5 pb-5"><GatsbyImage image={image} alt="related image"   width={300}/></div>
          <article 
          dangerouslySetInnerHTML={{ __html: news.html }}/>

          
          </section>
         
         <section className="flex flex-col p-10">
            
            {related_books && 
            <> 
            {related_books.map(book => (
            
            <RelatedBook id={book.id} title={book.Title}/>
            
        ))}
        </>
        }
        </section>
        </div>
         
          <section>
          <div className="grid md:grid-cols-5 md:gap-2">
            
            {related_series && related_series.map(series => (
            <> 
            <h6 className="py-3"><Link to={`../../series/${ series.id }`}>{series.seriesName}</Link></h6>
            </>
        ))}
        </div>
          </section>
          </div>
        
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
    }
    Img: file(extension: {eq: "jpg"}, relativeDirectory: {eq: $relDir}) {
      childImageSharp {
        gatsbyImageData(width:300, layout: CONSTRAINED, placeholder: TRACED_SVG)
      }
    }
  }
`
