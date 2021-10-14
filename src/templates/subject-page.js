import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import BookCard from "../components/BookCard"
import SeO from "../components/SeoComponent"
import PageHeader from "../components/PageHeader"


const SubjectTemplate = ({ data }) => {
    const books = data.allBooksJson
    return (
    <div>

        <Layout>
            <SeO title={books.edges[0].node.Subject.name}/>
            <PageHeader text={books.edges[0].node.Subject.name}/>
                    <div className="container grid grid-cols-2 md:flex md:flex-wrap gap-2 py-5">
                        {books.edges.map(edge => (
                  <>  
                  <Link key={`l${edge.node.BookID}`} to={`../../title/${ edge.node.BookID }`}>
                    <BookCard key={`b${edge.node.BookID}`} Title={edge.node.Title} Subtitle={edge.node.Subtitle} Author={edge.node.AuthorCredit} Thumb={edge.node.CoverImageMain} Bookid ={edge.node.BookID} pubdate={edge.node.PublicationDate}/>
                    </Link>
                     </>
                    ))}
                        </div> 
                     
            
        </Layout>
  </div>
    )
    
    ;
};

export default SubjectTemplate; 

export const query = graphql`
    query($id: String!){
        allBooksJson(filter: {Subject: {subjectID: { eq: $id }}}, sort: {fields: DaysSincePublication}) {
            edges {
                node {
                  Title
                  Subtitle
                  BookID
                  Subject {
                    subjectID
                    name
                  }
                  AuthorCredit
                  PublicationDate
                  DaysSincePublication
                  CoverImageMain
                }
            }
        }   
    }
`