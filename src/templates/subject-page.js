import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import BookCard from "../components/BookCard"



const SubjectTemplate = ({ data }) => {
    const books = data.allBooksJson
    return (
    <div>

        <Layout>
            <h1 className="text-4xl py-3">{books.edges[0].node.Subject.name}</h1>
                    <div className="container px-5 py-5 grid md:grid-cols-5 md:gap-4">
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