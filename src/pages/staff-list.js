import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import BioCard from "../components/BioCard"


export default function StaffList({ data }) {
    const people = data.allStaffJson
 return (
    
        <Layout>
          <h2 className="py-5 text-4xl">UVaP Staff</h2>
          
          <section >
          <div className="container py-10 grid md:grid-cols-2">
            {people.edges.map(edge => (
              <>
                       <BioCard name={edge.node.name} title={edge.node.jobtitle} phone={edge.node.phone} email={edge.node.email} slug={edge.node.slug} photo={edge.node.photo}/>
                    </>
                  
              ))}
              </div>
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
            photo
            bio {
              html
            }
          }
        }
      }
  }
`
