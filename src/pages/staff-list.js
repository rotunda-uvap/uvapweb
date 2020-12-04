import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"


export default function StaffList({ data }) {
    const people = data.allStaffJson
 return (
    
        <Layout>
          <h2 className="py-5 text-4xl">UVaP Staff</h2>
          <p>Turn into cards</p>
          <ul className="container px-5 py-5 mx-auto">
            {people.edges.map(edge => (
            <>
                <li  className="text-normal font-black hover:text-green-400 p-2" key={edge.node.name}>
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
