import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import BioCard from "../components/BioCard"


export default function Marketing({data}) {
  const staff = data.allStaffJson

  return (
    <Layout>
        <h2 className="text-4xl py-5">Marketing</h2>
        
        <section className="py-20">
                
                <div className="grid md:grid-cols-2 gap-2"> 
                {staff.edges.map(edge => (
                    <>
                    <BioCard name={edge.node.name} title={edge.node.jobtitle} phone={edge.node.phone} email={edge.node.email} slug={edge.node.slug} photo={edge.node.photo}/>
                 </>


                    ))}

                     </div>
                
            </section>
       
        <h3 className="text-3xl py-5">Exhibits</h3>
        <p>Individual custom pages or templated from CMS?</p>

       

   
    </Layout>
  )
  
}

export const query = graphql`
    query  {
      site {
        siteMetadata {
          title
          logo
          description
        }
      }
      allStaffJson(filter: {department: {eq: "Marketing"}}) {
        edges {
          node {
            name
            department
            jobtitle
            phone
            email
            slug
            photo
          }
        }
      }
  }`
