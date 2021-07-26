import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import BookCard from "../components/BookCard"
import SeO from "../components/SeoComponent"



const SeriesTemplate = ({ data }) => {
    const books = data.allBooksJson
    const seriesinfo = data.markdownRemark
    const related_staff = data.markdownRemark.frontmatter.related_staff
    return (
    <div>

        <Layout>
            <SeO title={seriesinfo.frontmatter.title}/>
            <section>
            <div className="grid grid-cols-3 content-center">
                <h3 className="py-3 col-span-2">{seriesinfo.frontmatter.title} </h3>
            <div className="self-center"><Link to={'/series'}><button className="bg-gray-200 py-1 px-4 text-black text-sm tracking-wider leading-7 rounded-full">{seriesinfo.frontmatter.status} series</button></Link></div>
                </div>
            <div className="pt-5 cms" dangerouslySetInnerHTML={{ __html: seriesinfo.html }}/>
            <div dangerouslySetInnerHTML={{ __html: seriesinfo.frontmatter.editors }}/>
<div>
{related_staff && related_staff.map(staff => (
            <div className="pt-5 cms">UVA Editor: 
            <Link to={'../../staff/' + staff.frontmatter.title.replace(" ", "-").toLowerCase()}> {staff.frontmatter.title} </Link>
            
            </div>
        ))}
</div>

               </section> 
                
                <section>
                     <h3 className="text-2xl py-5 uppercase text-gray-500">Books in This Series:</h3>
                    <div className="container px-5 py-5 grid grid-cols-2 md:grid-cols-5 md:gap-4">
                        {books.edges.map(edge => (
                  <>  
                  <Link to={`../../title/${ edge.node.BookID }`}>
                  <BookCard Title={edge.node.Title} Subtitle={edge.node.Subtitle} Author={edge.node.AuthorCredit} Thumb={edge.node.CoverImageMain} Bookid ={edge.node.BookID} pubdate={edge.node.PublicationDate} /></Link>
                     </>
                    ))}
                        </div> 
                       
                </section>
               
             
               
            
        </Layout>
  </div>
    )
    
    ;
};

export default SeriesTemplate; 

export const query = graphql`
    query($id: String!){
        allBooksJson(filter: {Series: {seriesID: { eq: $id }}}, sort: {fields: DaysSincePublication}) {
            edges {
                node {
                  Title
                  Subtitle
                  BookID
                  Series {
                    name
                    seriesID
                  }
                  AuthorCredit
                  PublicationDate
                  DaysSincePublication
                  CoverImageMain
                }
            }
        }  
        markdownRemark(frontmatter: {seriesID: {eq: $id}, templateKey: {eq: "series"}}) {
          
                frontmatter {
                  status
                  type
                  templateKey
                  title
                  editors
                  seriestype
                  seriesID
                  related_staff {
                    frontmatter {
                     title
              }
                }
                }
                html
            
            
          } 
    }
`