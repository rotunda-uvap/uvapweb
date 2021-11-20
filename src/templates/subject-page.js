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
            <div className="flex flex-row px-5 inline-flex items-center w-full leading-normal">
     <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
    </svg>
            <a
              href={`../../books#subject`}
              className="block p-2  text-xs font-thin uppercase "
            >All Subjects</a>
    </div>
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