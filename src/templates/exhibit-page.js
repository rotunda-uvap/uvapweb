import React from "react"
import { Link, graphql } from "gatsby"
import RelatedBookList from "../components/RelatedBookList"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Gallery from "../components/ExCarousel"
import SeO from "../components/SeoComponent"
import PageHeader from "../components/PageHeader"
import SectionHeader from "../components/SectionHeader"

const exhibitPage = ({ data }) => {
    const exhibit = data.markdownRemark
    const book_colls = data.markdownRemark.frontmatter.related_collection
    const related_series = data.markdownRemark.frontmatter.related_series
    const related_staff = data.markdownRemark.frontmatter.related_staff
    const related_posts = data.markdownRemark.frontmatter.related_blog
    const feat_books = data.markdownRemark.frontmatter.featured_books
    const bgcolor = exhibit.frontmatter.bgcolor
    const txtcolor = exhibit.frontmatter.txtcolor
    const image = getImage(data.Img)

 return (
   <Layout>
     <SeO title={`Virtual Book Exhibit: + ${data.markdownRemark.frontmatter.title}`}/>
     <div>
     <PageHeader text={data.markdownRemark.frontmatter.title}/>

        <GatsbyImage image={image} alt="related image"/>
        {data.markdownRemark.frontmatter.coupon && <div className={`${bgcolor} ${txtcolor} py-5 px-5 text-2xl tracking-wide text-center`}>{data.markdownRemark.frontmatter.coupon}</div>}
        <div>
          <div className={`py-5 px-5 text-md font-light tracking-wide text-center`}
          dangerouslySetInnerHTML={{ __html:exhibit.html }}/>

        
       
        {feat_books &&
         
        <section className="py-8 border-b-2">
          <SectionHeader text="Featured Books" className="pb-4"/>
        {/* <p className="text-center uppercase text-gray-500 mx-auto  font-sans tracking-wide py-4">Featured Books:</p> */}
          <Gallery book_id_array={feat_books}/>
        </section>
        
        }

      
         

        {related_staff && 
        
        <section className="py-8 border-b-2"> 
            <SectionHeader text="Meet our Editors"/>
            {/* <p className="text-center uppercase text-gray-500 mx-auto  font-sans py-4">Meet our Editors:</p> */}
        {related_staff.map(staff => (
            <>
            <Link to={'../../staff/' + staff.frontmatter.title.replace(" ", "-").toLowerCase()}> <div className="tracking-wide text-lg font-thin text-ceci-gray-mid">{staff.frontmatter.title} <span className="text-sm">&nbsp; - &nbsp;{staff.frontmatter.job_title}</span></div></Link>
            <div className="py-2 font-light text-ceci-gray-dark text-lg leading-relaxed"
          dangerouslySetInnerHTML={{ __html:staff.html }}/>
            </>
        ))}
          </section>}
        
        <SectionHeader text="Related Content"/>
         <section className="py-8 border-b-2 flex flex-col md:flex-row">
       
          {related_series && 
             
             <div className="md:w-1/2">
            <p className="text-center uppercase text-ceci-gray-mid mx-auto font-sans tracking-wide py-4">Related Series</p>
            <ul className="content-center">
            {related_series.map(series => (
            
            <li className="py-3 text-gray-700 text-center font-display"><Link to={`../../series/${ series.id }`}>{series.seriesName}</Link></li>
            
        ))}</ul>
        </div>
        }

            <div className="md:w-1/2">
            <p className="text-center uppercase text-ceci-gray-mid mx-auto font-sans tracking-wide py-4">Related Posts</p>
            <ul className="content-center">
            {related_posts && related_posts.map(post => (
            post.frontmatter.title && <Link to={`../../news${ post.fields.slug }`}><li className="py-3 text-gray-700 text-center font-display" key={post.id}>{post.frontmatter.title}</li></Link> 
        ))}</ul>
        </div>
    
</section>

         <section className="py-8">
           <SectionHeader text="Books"/>
          {book_colls && 
        
            <>
            {/* <p className="text-center uppercase text-gray-500 mx-auto  font-sans tracking-wide py-4">Books</p> */}
            {book_colls.map(coll => (
              <div>
                {/* <h6 className="py-2 font-display ">{coll.frontmatter.title}</h6> */}
                <span className="cms font-serif py-5 pl-4" dangerouslySetInnerHTML={{__html: coll.frontmatter.description}}/>
            <div className="flex flex-row flex-wrap gap-4 p-4">
             
            {coll.frontmatter.related_book && 
            coll.frontmatter.related_book.map(book => (
              
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
            title
            related_blog {
              frontmatter {
                title
                }
              fields {
                slug
                }
            }
            coupon
            featured_books
            related_collection {
              frontmatter {
                title
                exhibit_slug
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
                job_title

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

