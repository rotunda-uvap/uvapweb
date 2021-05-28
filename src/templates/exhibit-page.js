import React from "react"
import { Link, graphql } from "gatsby"
import RelatedBookList from "../components/RelatedBookList"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"

const exhibitPage = ({ data }) => {
    const exhibit = data.markdownRemark
    const book_colls = data.markdownRemark.frontmatter.related_collection
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
          <div className={`${bgcolor} ${txtcolor} py-5`}
          dangerouslySetInnerHTML={{ __html:exhibit.html }}/>

          <h6 className="py-5">Meet our Editors:</h6>
        {related_staff && related_staff.map(staff => (
            <> 
            <Link to={'../../staff/' + staff.frontmatter.title.replace(" ", "-").toLowerCase()}> <div>{staff.frontmatter.title}</div></Link>
            <div className="py-2 text-light text-xs"
          dangerouslySetInnerHTML={{ __html:staff.html }}/>
            </>
        ))}
          
         <section>
       
          {related_series && 
             <>
            <h6 className="py-2">Related Series</h6>
            
            {related_series.map(series => (
            
            <h6 className="py-3 font-light pl-4"><Link to={`../../series/${ series.id }`}>{series.seriesName}</Link></h6>
            
        ))}
        </>
        }
          </section>
         
         <section>
          {book_colls && 
        
            <>
            <h6 className="py-4">Book Collections</h6>
            {book_colls.map(coll => (
              <div>
                <h6 className="py-2 font-display ">{coll.frontmatter.title}</h6>
                <span className="cms font-serif py-5 pl-4" dangerouslySetInnerHTML={{__html: coll.frontmatter.description}}/>
            <div className="flex flex-row py-4 space-x-4">
            {coll.frontmatter.related_book.map(book => (
              
              <RelatedBookList id={book.id} title={book.Title}/>
         
             
          ))}
           </div>
              </div>
            
        ))}
            </>
        }</section>

          </div>
        
    </div>
   </Layout>
    
 )
}

export default exhibitPage

export const query = graphql`
  query($id: String!, $relDir: String!) {
    markdownRemark(frontmatter: {templateKey: {eq: "exhibit"}}, id: { eq: $id }) {
        html
        id
        frontmatter {
            templateKey
            related_collection {
              frontmatter {
              Collection_Type
              title
              related_book {
                Title
                id
              }
            description
            }
          }
            title
            featured_books
            bgcolor
            txtcolor
            related_series {
              seriesName
              id
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

