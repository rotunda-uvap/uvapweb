import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"


const SubjectTemplate = ({ data }) => {
    const books = data.allBooksJson
    return (
    <div>

        <Layout>
            <h1 className="text-2xl font-black mt-1">{books.edges[0].node.Subject}</h1>
            {books.edges.map(edge => (
            <>
            
                <h3  className="text-1xl mt-1" key={edge.node.Title}><Link to={`../../title/${ edge.node.BookID }`}>{ edge.node.Title }</Link></h3>
            
            
            </>
        ))}
             
            
        </Layout>
  </div>
    )
    
    ;
};

export default SubjectTemplate; 

export const query = graphql`
    query($id: String!){
        allBooksJson(filter: {Subject: { eq: $id }}) {
            edges {
                node {
                  Title
                  BookID
                  Subject
                }
            }
        }   
    }
`