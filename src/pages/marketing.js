import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import MiniBio from "../components/MiniBio"


export default function Marketing({data}) {
  const staff = data.staffs

  return (
    <Layout>
        <h2 className="py-10">Marketing</h2>
        
        <section className="py-20">
                
                <div className="grid md:grid-cols-2 gap-2"> 
                {staff.edges.map(edge => (
                    <>
                  <MiniBio frontmatter={edge.node.frontmatter} />                 </>


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
      staffs: allMarkdownRemark(filter: {frontmatter: {department: {in: "MKG"}}}) {
        edges {
          node {
            ...MiniBioFragment
          }
        }
      }
      
  
  }`
