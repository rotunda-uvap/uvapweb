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
            <div className="flex flex-row px-5 inline-flex items-center w-full leading-normal">
     <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
    </svg>
            <a
              href={`../../books#series`}
              className="block p-2  text-xs font-thin tracking-wide uppercase "
            >All Series</a>
    </div>
            <section className="py-4 border-b-2 border-gray-100">
            <div className="ml-4 text-center uppercase text-ceci-gray-mid tracking-wide"><Link to={'/series'}>{seriesinfo.frontmatter.status} series</Link></div>
            {seriesinfo.html ? <div className="pt-5 cms  text-lg text-ceci-gray-dark leading-relaxed" dangerouslySetInnerHTML={{ __html: seriesinfo.html }}/> :<div/> }
            {seriesinfo.frontmatter.editors ? <div className="text-ceci-gray-mid leading-relaxed font-serif ml-4 cms" dangerouslySetInnerHTML={{ __html: seriesinfo.frontmatter.editors }}/> : <div/> }
            {seriesinfo.frontmatter.moreEditors ? <div className="text-ceci-gray-mid leading-relaxed font-serif pt-2 ml-4 cms" dangerouslySetInnerHTML={{ __html: seriesinfo.frontmatter.moreEditors }}/> : <div/> }

<div>
{related_staff && related_staff.map(staff => (
            <div className="pt-2 text-ceci-gray-mid leading-relaxed font-serif ml-4 cms">UVA Editor: 
            <Link to={'../../staff/' + staff.frontmatter.title.replace(" ", "-").toLowerCase()}> {staff.frontmatter.title} </Link>
            
            </div>
        ))}
</div>

               </section> 
                
                <section className="py-4">
<SectionHeader text={'Books in this Series'}/>                    <div className="container grid grid-cols-2 md:flex md:flex-wrap gap-2 py-5">
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
                  moreEditors
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