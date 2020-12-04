import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"


export default function StaffList({ data }) {
    const people = data.allStaffJson
 return (
    
        <Layout>
          <h2 className="py-5 text-4xl">UVaP Staff</h2>
          
          <section >
          <ul className="container px-5 py-5 mx-auto grid md:grid-cols-2">
            {people.edges.map(edge => (

                  <>
                  <div className="flex flex-auto py-2">
                      <img src="scooter.jpg" alt="muppet placeholder"/>
                      <ul className="flex flex-col px-10">
                          <li className="font-black"><Link to={`../staff/${ edge.node.slug }`}>{ edge.node.name }
                          </Link></li> 
                          <li>{edge.node.jobtitle}</li>
                          <li>{edge.node.phone}</li>
                          <li><a href={`mailto:${ edge.node.email }`}>{edge.node.email}</a></li>
                    </ul>
                  </div>
                  </>   
           
              ))}
              </ul>
        </section>
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
