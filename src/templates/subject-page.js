import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import BookCard from "../components/BookCard"
import SeO from "../components/SeoComponent"
import PageHeader from "../components/PageHeader"


const SubjectTemplate = ({ pageContext, data }) => {
  const { id }  = pageContext
  const books = data.allBooksJson
    return (
    <div>

        <Layout>
        <SeO title={id}/>
            <PageHeader text={id}/>
            <div className="flex flex-row px-5 inline-flex items-center w-full leading-normal">
     <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
    </svg>
            <a
              href={`../../books/#subjects`}
              className="block p-2  text-xs font-thin tracking-wide uppercase "
            >All Subjects</a>
    </div>
                    <div className="flex flex-wrap gap-2 py-5">
                        {books.edges.map(edge => (
                  <>  
                 
                    <BookCard fields={edge.node}/>
                   
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
      allBooksJson(filter: {Subject: {name: { in: [$id] }}}, sort: {fields: DaysSincePublication}) {
        edges {
                node {
                  ...BookQFragment
                  Subject {
                    subjectID
                    name
                  }
                  DaysSincePublication
                  
                }
            }
        }   
    }
`