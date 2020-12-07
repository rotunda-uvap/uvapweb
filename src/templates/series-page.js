import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import BookCard from "../components/BookCard"



const SeriesTemplate = ({ data }) => {
    const books = data.allBooksJson
    const seriesinfo = data.markdownRemark
    return (
    <div>

        <Layout>
            <section>
            <div className="grid grid-cols-3 content-center">
                <h1 className="text-4xl py-3 col-span-2">{books.edges[0].node.Series} </h1>
            <div className="self-center"><button className="bg-blue-200 py-1 px-4 text-black text-xs rounded-full">{seriesinfo.frontmatter.status} series</button></div>
                </div>
            <p className="pt-5" dangerouslySetInnerHTML={{ __html: seriesinfo.html }}/>
            <p dangerouslySetInnerHTML={{ __html: seriesinfo.frontmatter.editors }}/>
     {seriesinfo.frontmatter.uvapeditors && <h4 className="text-normal p-5">UVaP Editor: </h4>}
               </section> 
                
                <section>
                     <h3 className="text-2xl font-black py-2">Books in This Series:</h3>
                    <div className="container px-5 py-5 grid md:grid-cols-5 md:gap-4">
                        {books.edges.map(edge => (
                  <>  
                  <Link to={`../../title/${ edge.node.BookID }`}>
                    <BookCard Title={edge.node.Title} Subtitle={edge.node.Subtitle} Author={edge.node.AuthorCredit} Thumb={edge.node.CoverImageThumb} Bookid ={edge.node.BookID} pubdate={edge.node.PublicationDate} /></Link>
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
        allBooksJson(filter: {Series: { eq: $id }}, sort: {fields: DaysSincePublication}) {
            edges {
                node {
                  Title
                  Subtitle
                  BookID
                  Series
                  AuthorCredit
                  PublicationDate
                  DaysSincePublication
                  CoverImageThumb
                }
            }
        }  
        markdownRemark(frontmatter: {title: {eq: $id}, type: {eq: "series"}}) {
          
                frontmatter {
                  status
                  type
                  title
                  editors
                  uvaeditors
                  seriestype
                }
                html
            
            
          } 
    }
`