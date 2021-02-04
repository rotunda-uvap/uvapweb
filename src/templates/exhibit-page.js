import React from "react"
import { Link, graphql } from "gatsby"
import RelatedBook from "../components/RelatedBook"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"

export default ({ data }) => {
    const exhibit = data.markdownRemark
    const related_book_group1 = data.markdownRemark.frontmatter.related_1
    const related_series = data.markdownRemark.frontmatter.related_series
    const related_staff = data.markdownRemark.frontmatter.related_staff
    const bgcolor = exhibit.frontmatter.bgcolor
    const txtcolor = exhibit.frontmatter.txtcolor
    const image = getImage(data.Img)

 return (
   <Layout>
     <div>
        <GatsbyImage image={image} alt="related image"/>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
          <p className={`${bgcolor} ${txtcolor} py-5`}
          dangerouslySetInnerHTML={{ __html:exhibit.html }}/>

          <h6 className="py-5">Meet our Editors:</h6>
        {related_staff && related_staff.map(staff => (
            <> 
            <Link to={'../../staff/' + staff.replace(" ", "-").toLowerCase()}> <div>{staff}</div></Link>
            </>
        ))}
         {exhibit.frontmatter.bkg1_title &&
         <section>
         <h6 className="py-5">{exhibit.frontmatter.bkg1_title}</h6>
          {related_book_group1 && related_book_group1.map(book => (
            <> 
            <RelatedBook id={book}/>
            
            </>
        ))}
         </section>}

         {exhibit.frontmatter.bkg2_title &&
         <section>
         <h6 className="py-5">{exhibit.frontmatter.bkg2_title}</h6>
          {data.markdownRemark.frontmatter.related_2 && data.markdownRemark.frontmatter.related_2.map(book => (
            <> 
            <RelatedBook id={book}/>
            
            </>
        ))}
         </section>}
         {exhibit.frontmatter.bkg3_title &&
         <section>
         <h6 className="py-5">{exhibit.frontmatter.bkg3_title}</h6>
          {data.markdownRemark.frontmatter.related_3 && data.markdownRemark.frontmatter.related_3.map(book => (
            <> 
            <RelatedBook id={book}/>
            
            </>
        ))}
         </section>}
         
         {exhibit.frontmatter.bkg4_title &&
         <section>
         <h6 className="py-5">{exhibit.frontmatter.bkg4_title}</h6>
          {data.markdownRemark.frontmatter.related_4 && data.markdownRemark.frontmatter.related_4.map(book => (
            <> 
            <RelatedBook id={book}/>
            
            </>
        ))}
         </section>}
       
        
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
            related_staff
            featured_books
            bkg1_title
            bkg2_title
            bkg3_title
            bkg4_title
            related_1
            related_2
            related_3
            related_4
            bgcolor
            txtcolor
        } 
      }
    Img: file(extension: {eq: "jpg"}, relativeDirectory: {eq: $relDir}) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
      }
    } 
  }
`

