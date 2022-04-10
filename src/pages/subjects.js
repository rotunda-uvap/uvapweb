import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SeO from "../components/SeoComponent"
import PageHeader from "../components/PageHeader"
export default function Subjects({ data }) {
  
 return (
    
        <Layout>
          <SeO title="Our Subjects"/>
          <PageHeader text={'Book Subjects'}/>
          <div className="grid md:grid-cols-4 md:grid-4">
            
          {data.allBooksJson.group.map((g, index) => (
                   
           <li className="lg:w-1/3 mb-1 w-1/2" key={`sub${index}`}>
          <Link to={`../subject/${ g.distinct }`} className="text-gray-600 hover:text-gray-800">{ g.fieldValue } ({g.totalCount})</Link>
        </li>            
           
        ))}       
          
        </div>
        </Layout>

 )
}



export const query = graphql`
  query {
    allBooksJson {
      group(field: Subject___name) {
        distinct(field: Subject___subjectID)
        totalCount
        fieldValue
      }
    }
  }
`
