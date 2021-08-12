import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import BookCard from "../components/BookCard"
import SeO from "../components/SeoComponent"
import PageHeader from "../components/PageHeader"
import SectionHeader from "../components/SectionHeader"



const SeriesTemplate = ({ data }) => {
    const books = data.allBooksJson
    const seriesinfo = data.markdownRemark
    const related_staff = data.markdownRemark.frontmatter.related_staff
    return (
    <div>

        <Layout>
            <SeO title={seriesinfo.frontmatter.title}/>
            <PageHeader text={seriesinfo.frontmatter.title}/>
            <section className="py-4 border-b-2 border-gray-100">
            <div className="ml-4 text-center"><Link to={'/series'}>{seriesinfo.frontmatter.status} series</Link></div>
            <div className="pt-5 cms" dangerouslySetInnerHTML={{ __html: seriesinfo.html }}/>
            <div className="text-base text-gray-600 leading-relaxed font-serif ml-4 cms" dangerouslySetInnerHTML={{ __html: seriesinfo.frontmatter.editors }}/>
<div>
{related_staff && related_staff.map(staff => (
            <div className="pt-5 text-base text-gray-600 leading-relaxed font-display ml-4 cms">UVA Editor: 
            <Link to={'../../staff/' + staff.frontmatter.title.replace(" ", "-").toLowerCase()}> {staff.frontmatter.title} </Link>
            
            </div>
        ))}
</div>

               </section> 
                
                <section className="py-4 border-b-2 border-gray-100">
<SectionHeader text={'Books in this Series'}/>                    <div className="container px-5 py-5 flex flex-wrap gap-2 md:gap-4">
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