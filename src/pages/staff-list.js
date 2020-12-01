import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"


export default function StaffList({ data }) {
    const people = data.allStaffJson
 return (
    
        <Layout>
            <h2>Listing of All Staff Members at Press</h2>
          <ul className="container px-5 py-5 mx-auto">
            {people.edges.map(edge => (
            <>
                <li  className="text-normal font-black text-blue-400 hover:text-blue-200 p-2" key={edge.node.name}>
                  <Link to={`../staff/${ edge.node.slug }`}>{ edge.node.name }
                  </Link>
                  </li>
            
            </>
        ))}
        </ul>
        </Layout>

 )
}



export const query = graphql`
  query {
    allStaffJson {
        edges {
          node {
            name
            email
            slug
            jobtitle
            phone
            bio {
              html
            }
          }
        }
      }
  }
`
