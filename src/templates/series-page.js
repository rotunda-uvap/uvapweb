import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import EvenCard from "../components/EvenCard"



const SeriesTemplate = ({ data }) => {
    const books = data.allBooksJson
    const seriesinfo = data.markdownRemark
    return (
    <div>

        <Layout>
            <section>
            <div className="grid grid-cols-3 content-center">
                <h3 className="py-3 col-span-2">{seriesinfo.frontmatter.title} </h3>
            <div className="self-center"><button className="bg-gray-200 py-1 px-4 text-black text-sm tracking-wider leading-7 rounded-full">{seriesinfo.frontmatter.status} series</button></div>
                </div>
            <div className="pt-5" dangerouslySetInnerHTML={{ __html: seriesinfo.html }}/>
            <p dangerouslySetInnerHTML={{ __html: seriesinfo.frontmatter.editors }}/>
     {seriesinfo.frontmatter.uvapeditors && <h4 className="text-normal p-5">UVaP Editor: </h4>}
               </section> 
                
                <section>
                     <h3 className="text-2xl font-black py-2">Books in This Series:</h3>
                    <div className="container flex flex-col">
                        {books.edges.map(edge => (
                  <>  
                  <Link to={`../../title/${ edge.node.BookID }`}>
                    <EvenCard Title={edge.node.Title} Subtitle={edge.node.Subtitle} Author={edge.node.AuthorCredit} Thumb={edge.node.CoverImageThumb} Bookid ={edge.node.BookID} pubdate={edge.node.PublicationDate} /></Link>
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
                  CoverImageThumb
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
                  uvaeditors
                  seriestype
                  seriesID
                }
                html
            
            
          } 
    }
`