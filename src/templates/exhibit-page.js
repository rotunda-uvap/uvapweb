import React from "react"
import { Link, graphql } from "gatsby"
import RelatedBook from "../components/RelatedBook"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"

export default ({ data }) => {
    const exhibit = data.markdownRemark
    const book_clusters = data.markdownRemark.frontmatter.book_clusters
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
            <Link to={'../../staff/' + staff.frontmatter.title.replace(" ", "-").toLowerCase()}> <div>{staff.frontmatter.title}</div></Link>
            <p className="py-2 text-light text-xs"
          dangerouslySetInnerHTML={{ __html:staff.html }}/>
            </>
        ))}
          
         <section>
       
          {related_series && 
             <>
            <h6 className="py-2">Related Series</h6>
            
            {related_series.map(series => (
            
            <h6 className="py-3"><Link to={`../../series/${ series.id }`}>{series.seriesName}</Link></h6>
            
        ))}
        </>
        }
          </section>
         
         {book_clusters &&
         <>
           {book_clusters.map(cluster => (
             <>
             <h6 className="py-5">{cluster.cluster_title}</h6>
             {cluster.related_book.map(book => (
              <RelatedBook id={book.id} title={book.title}/>
          ))}
          </>
           ))}
         </>
}
         
      
         
        
       
        
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
            book_clusters {
              cluster_title
              related_book
            }
            title
            featured_books
            bgcolor
            txtcolor
            related_series {
              id
              seriesName
            }
            related_staff {
              frontmatter {
                title
              }
              html
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

