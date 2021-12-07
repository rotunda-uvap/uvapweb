import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SeO from "../components/SeoComponent"
import PageHeader from "../components/PageHeader"
export default function Subjects({ data }) {
  const subs = data.allSubjectsJson
 return (
    
        <Layout>
          <SeO title="Our Subjects"/>
          <PageHeader text={'Book Subjects'}/>
          <div className="grid md:grid-cols-4 md:grid-4">
            
          {subs.edges.map((edge, index) => (
                   
           <li className="lg:w-1/3 mb-1 w-1/2" key={`sub${index}`}>
          <Link to={`../subject/${ edge.node.subjectID }`} className="text-gray-600 hover:text-gray-800">{ edge.node.subjectName }</Link>
        </li>            
           
        ))}       
          
        </div>
        </Layout>

 )
}



export const query = graphql`
  query {
    allSubjectsJson {
      edges {
        node {
            subjectID
            subjectName
          
        }
      }
    }
  }
`
