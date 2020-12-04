import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"


const SeriesTemplate = ({ data }) => {
    const books = data.allBooksJson
    return (
    <div>

        <Layout>
            <div className="grid grid-cols-2 content-center"><h1 className="text-4xl font-black py-3">{books.edges[0].node.Series} </h1>
            <div className="self-center"><button className="bg-green-400 py-1 px-4 text-white text-xs rounded-full">Active or Completed</button></div>
                </div>
            
                <h3 className="text-2xl font-black py-2">Books in This Series:</h3>
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

export default SeriesTemplate; 

export const query = graphql`
    query($id: String!){
        allBooksJson(filter: {Series: { eq: $id }}) {
            edges {
                node {
                  Title
                  BookID
                  Series
                }
            }
        }  
      
    }
`