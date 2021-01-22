import React from "react"
import { Link, graphql } from "gatsby"
import RelatedBook from "../components/RelatedBook"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"

export default ({ data }) => {
    const exhibit = data.markdownRemark
    const related_books = data.markdownRemark.frontmatter.exhibit_books
    const related_series = data.markdownRemark.frontmatter.related_series
    const related_staff = data.markdownRemark.frontmatter.related_staff
    const image = getImage(data.Img)

 return (
   <Layout>
     <div>
        <GatsbyImage image={image} alt="related image"/>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
          <p className="py-5"
          dangerouslySetInnerHTML={{ __html:exhibit.html }}/>
          <h6 className="py-5">Meet our Editors:</h6>
        {related_staff && related_staff.map(staff => (
            <> 
            <Link to={'../../staff/' + staff.replace(" ", "-").toLowerCase()}> <div>{staff}</div></Link>
            </>
        ))}
         <h6 className="py-5">Related Books:</h6>
          {related_books && related_books.map(book => (
            <> 
            <RelatedBook id={book.book_id} title={book.book_title}/>
            
            </>
        ))}
        <h6 className="py-5">Related Series:</h6>
        {related_series && related_series.map(series => (
            <> 
            <div>{series}</div>
            </>
        ))}
        
          </div>
        
    </div>
   </Layout>
    
 )
}



export const query = graphql`
  query($id: String!, $relDir: String!) {
    markdownRemark(frontmatter: {templateKey: {eq: "exhibit"}}, id: { eq: $id }) {
        html
        id
        frontmatter {
            templateKey
            title
            color
            related_series
            related_staff
            exhibit_books {
              book_id
              book_title
            }
        } 
      }
    Img: file(extension: {eq: "jpg"}, relativeDirectory: {eq: $relDir}) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
      }
    } 
  }
`

